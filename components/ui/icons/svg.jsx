export default function Svg({ icon, ...props }) {
	return (
		<svg width='24' height='24' {...props} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
			<path fill-rule='evenodd' clip-rule='evenodd' d={icon} />
		</svg>
	);
}
