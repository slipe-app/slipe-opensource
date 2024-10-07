import { useEffect, useState } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";
import AuthInput from "../../common/input";
import { animate } from "motion";

export default function AuthSignUpProfile() {
	const [displayname, setDisplayname] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		animate(
			"#displaynameCount",
			isFocused ? { transform: "translateY(0px) rotateX(0deg)", opacity: 0.25, display: "block" } : { transform: "translateY(-10px) rotateX(-20deg)", opacity: 0, display: "none" },
			{
				duration: 0.15,
				easing: "ease-out",
			}
		);
	}, [isFocused]);

	return (
		<>
			<div style={{ borderColor: colors.textPrimaryTransparent }} className='w-32 border-2 border-dashed rounded-full justify-center items-center flex h-32'>
				<svg width='96' height='96' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["image"]} />
				</svg>
			</div>
			<span style={{ color: colors.text }} className='text-3xl font-semibold'>
				Setup your profile
			</span>
			<AuthInput type="text" maxLength={32} isFocused={data => setIsFocused(data)} value={displayname} onChange={data => setDisplayname(data.target.value)} placeholder='Your display name here'>
				<span id='displaynameCount' style={{ color: colors.text }} className='p-[1rem] opacity-0 pl-0 text-lg'>
					{displayname.length}/32
				</span>
			</AuthInput>
			<span style={{ color: colors.textPrimaryTransparent }} className='text-lg'>
				Tap circle to select avatar
			</span>
		</>
	);
}
