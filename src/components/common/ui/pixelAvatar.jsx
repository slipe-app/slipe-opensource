import colors from "../../../constants/colors";

export default function PixelAvatar({ size, pixels }) {
    const opacities ={
        0: 0.25,
        1: 0.50,
        2: 0.75,
        3: 1
    }
	return (
		<div style={{ minHeight: size, maxHeight: size, minWidth: size, maxWidth: size, background: colors.background}} className='overflow-hidden rounded-full duration-200 grid grid-rows-4 grid-cols-4'>
			{pixels?.map(pixel => (
              <span style={{ opacity: opacities[pixel], background: colors.text}} className="w-full aspect-square duration-150" />  
            ))}
		</div>
	);
}
