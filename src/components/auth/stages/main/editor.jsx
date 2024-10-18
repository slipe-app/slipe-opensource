import { useTheme } from "../../../common/contexts/themeContext";
import icons from "../../../../constants/icons";
import Svg from "../../../common/ui/utils/svg";

export default function AuthMainEditor() {
	const { theme } = useTheme();
	return (
		<>
			<div className='w-full grid grid-cols-3 grid-rows-2 gap-5'>
				<div className='h-full flex justify-center items-center aspect-square border-2 opacity-75 rounded-[2rem]' style={{ borderColor: theme.textPrimaryTransparent }}>
					<Svg size={72} style={{ color: theme.text }} icon={icons["user"]} />
				</div>
				<div className='h-full flex justify-center items-center aspect-square border-2 rounded-[2rem]' style={{ background: theme.text }}>
					<Svg size={72} style={{ color: theme.background }} icon={icons["smile"]} />
				</div>
				<div className='h-full flex justify-center items-center aspect-square border-2 opacity-75 rounded-[2rem]' style={{ borderColor: theme.textPrimaryTransparent }}>
					<Svg size={72} style={{ color: theme.text }} icon={icons["paint"]} />
				</div>
				<div className='h-full flex justify-center items-center aspect-square border-2 rounded-[2rem]' style={{ background: theme.text }}>
					<Svg size={72} style={{ color: theme.background }} icon={icons["image"]} />
				</div>
				<div className='h-full flex justify-center items-center aspect-square border-2 opacity-75 rounded-[2rem]' style={{ borderColor: theme.textPrimaryTransparent }}>
					<Svg size={72} style={{ color: theme.text }} icon={icons["pencil"]} />
				</div>
				<div className='h-full flex justify-center items-center aspect-square border-2 rounded-[2rem]' style={{ background: theme.text }}>
					<Svg size={72} style={{ color: theme.background }} icon={icons["text"]} />
				</div>
			</div>
			<div className=' flex flex-col gap-2'>
				<span style={{ color: theme.text }} className='text-center text-3xl font-semibold'>
					The editor of dream
				</span>
				<span style={{ color: theme.textPrimaryTransparent }} className='text-center text-lg'>
					Create truly breathtaking posts with our intuitively simple editor
				</span>
			</div>
		</>
	);
}
