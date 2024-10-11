import { useEffect, useState } from "preact/hooks";
import colors from "../../../../constants/colors";
import icons from "../../../../constants/icons";
import AuthInput from "../../common/input";
import { animate } from "motion";
import { Image } from "@unpic/preact";

export default function AuthSignUpProfile() {
	const [displayname, setDisplayname] = useState("");
	const [image, setImage] = useState();
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

	const handleFileChange = e => {
		const reader = new FileReader();
		reader.onloadend = () => {
			setImage(reader.result);
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	return (
		<>
			<div style={{ borderColor: colors.textPrimaryTransparent }} className={`w-32 ${image ? "" : "border-2"} relative border-dashed rounded-full justify-center items-center flex h-32`}>
				<input className='w-full h-full absolute z-10 opacity-0' type='file' accept='image/*' onChange={handleFileChange} />
				{image ? (
					<Image width={128} height={128} className='rounded-full' src={image} />
				) : (
					<svg width='96' height='96' style={{ color: colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path fill-rule='evenodd' clip-rule='evenodd' d={icons["image"]} />
					</svg>
				)}
			</div>
			<span style={{ color: colors.text }} className='text-3xl font-semibold'>
				Setup your profile
			</span>
			<AuthInput type='text' maxLength={32} isFocused={data => setIsFocused(data)} value={displayname} onChange={data => setDisplayname(data.target.value)} placeholder='Your display name here'>
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
