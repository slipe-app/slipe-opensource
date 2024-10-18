export default function Svg({ size = "24", style, className, icon, id = "" }) {
	return (
		<svg id={id} width={size} height={size} className={className} style={style} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
			<path fill-rule='evenodd' clip-rule='evenodd' d={icon} />
		</svg>
	);
}
