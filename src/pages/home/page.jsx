import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);

	return (
		<div className='w-screen bg-background h-screen p-5 flex justify-center items-center'>
			{/* <Button size="full" onClick={() => setCount(count => count + 1)}>Start blogging</Button> */}
		</div>
	);
}
