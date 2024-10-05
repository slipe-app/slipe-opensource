import { useState, useEffect } from "preact/hooks";

const createEmptyGrid = (rows, cols) => {
	const grid = [];
	for (let i = 0; i < rows; i++) {
		grid.push(Array.from(Array(cols), () => 0));
	}
	return grid;
};
const runGameOfLife = (grid, rows, cols) => {
	const newGrid = grid.map((row, y) =>
		row.map((cell, x) => {
			let liveNeighbors = 0;
			const directions = [
				[-1, -1],
				[-1, 0],
				[-1, 1],
				[0, -1],
				[0, 1],
				[1, -1],
				[1, 0],
				[1, 1],
			];

			directions.forEach(([dx, dy]) => {
				const newY = y + dy;
				const newX = x + dx;
				if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
					liveNeighbors += grid[newY][newX];
				}
			});

			if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
				return 0;
			}
			if (cell === 0 && liveNeighbors === 3) {
				return 1;
			}
			return cell;
		})
	);
	return newGrid;
};

const GameOfLife = () => {
	const [grid, setGrid] = useState([]);
	const [rows, setRows] = useState(0);
	const [cols, setCols] = useState(0);
	const [running, setRunning] = useState(true);
	const [cellSize, setCellSize] = useState(20);

	const calculateGridSize = () => {
		const cellSize = 18;
		const width = window.innerWidth;
		const height = window.innerHeight;

		const cols = Math.floor(width / cellSize);
		const rows = Math.floor(height / cellSize);

		setRows(rows);
		setCols(cols);
		setCellSize(cellSize);
		setGrid(createEmptyGrid(rows, cols));
	};

	useEffect(() => {
		calculateGridSize();
		window.addEventListener("resize", calculateGridSize);
		return () => window.removeEventListener("resize", calculateGridSize);
	}, []);

	useEffect(() => {
		if (!running) return;
		const interval = setInterval(() => {
			setGrid(prevGrid => runGameOfLife(prevGrid, rows, cols));
		}, 200);
		return () => clearInterval(interval);
	}, [running, grid, rows, cols]);

	const randomizeGrid = () => {
		const newGrid = [];
		for (let i = 0; i < rows; i++) {
			newGrid.push(Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0)));
		}
		setGrid(newGrid);
	};

	useEffect(() => {
		randomizeGrid();
		setRunning(true);
	}, [rows, cols]);

	return (
		<div
			className='opacity-20 grid grid-cols-[repeat(auto-fit,minmax(18px,1fr))]'
		>
			{grid.map((row, y) =>
				row.map((cell, x) => (
					<div
						className='rounded-full w-full aspect-square'
						key={`${x}-${y}`}
						style={{
							backgroundColor: cell ? "white" : "black",
						}}
					/>
				))
			)}
		</div>
	);
};

export default GameOfLife;
