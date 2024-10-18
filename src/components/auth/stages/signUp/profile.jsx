import { useEffect, useState } from "preact/hooks";
import { useTheme } from "../../../common/contexts/themeContext";
import icons from "../../../../constants/icons";
import Svg from "../../../common/ui/utils/svg";
import AuthInput from "../../common/input";
import { animate } from "motion";
import { Image } from "@unpic/preact";

export default function AuthSignUpProfile({ avatar, displayname, error, setAvatar, setDisplayname }) {
	const [isFocused, setIsFocused] = useState(false);
	const { theme } = useTheme();

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

	const handleFileChange = e => {
		const reader = new FileReader();
		reader.onloadend = () => {
			setAvatar(reader.result);
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	return (
		<>
			<div style={{ borderColor: theme.textPrimaryTransparent }} className={`w-32 ${avatar ? "" : "border-2"} relative border-dashed rounded-full justify-center items-center flex h-32`}>
				<input className='w-full h-full absolute z-10 opacity-0' type='file' accept='avatar/*' onChange={handleFileChange} />
				{avatar ? (
					<Image width={128} height={128} className='rounded-full' src={avatar} />
				) : (
					<Svg size={96} style={{ color: theme.text }} icon={icons["avatar"]} />
				)}
			</div>
			<span style={{ color: theme.text }} className='text-3xl font-semibold'>
				Setup your profile
			</span>
			<AuthInput type='text' maxLength={32} isFocused={data => setIsFocused(data)} value={displayname} onChange={data => setDisplayname(data.target.value)} placeholder='Your display name here'>
				<span id='displaynameCount' style={{ color: theme.text }} className='p-[1rem] opacity-0 pl-0 text-lg'>
					{displayname.length}/32
				</span>
			</AuthInput>
			<span style={{ color: theme.textPrimaryTransparent }} className='text-lg'>
				Tap circle to select avatar
			</span>
		</>
	);
}
