import { Image } from "@unpic/preact";
import cdn_url from "../../../constants/cdn_url";
import { useTheme } from "../../common/contexts/themeContext";
import Svg from "../../common/ui/utils/svg";
import UIFullScreenSheet from "../../common/ui/fullscreenSheet";
import icons from "../../../constants/icons";

export default function PostQuickReactions({ id, image, userReaction, isQuickReactions, setisQuickReactions }) {
	const { theme } = useTheme();
	const reactions = [
		"emojis/moneyMouth.png",
		"emojis/cryingFace.png",
		"emojis/faceClasp.png",
		"emojis/faceGlasses.png",
		"emojis/faceTongue.png",
		"emojis/kissingFace.png",
		"emojis/moneyMouth.png",
		"emojis/smileFace.png",
		"emojis/sobFace.png",
	];
	return (
		<UIFullScreenSheet isBackdropBlur={true} onClick={() => setisQuickReactions(false)} isOpen={isQuickReactions}>
			<div className='w-full h-full flex flex-col gap-4 px-5 justify-center'>
				<Image width={1600} height={1600} src={cdn_url + `/posts/${image}`} className='w-full h-[calc(100%-14rem)] rounded-[2rem] block bg-black' />
				<div style={{ background: theme.modalsBackground }} className='w-full rounded-full p-2 flex gap-2'>
					<button
						onClick={() => console.log("reactions modal")}
						style={{ color: theme.white, background: theme.buttonInactiveBg }}
						className='rounded-full duration-200 ease-out active:opacity-80 active:scale-[0.97] p-[0.6875rem]'
					>
						<Svg size={22} icon={icons["x"]} />
					</button>
					<div className='w-full flex gap-1 gradient-mask-l-70-d overflow-hidden'>
						{reactions.map((reaction, index) => (
							<button style={{ background: userReaction == reaction ? theme.buttonInactiveBg : "" }} id={`quickReaction-${index}`} className='p-[0.375rem] min-w-fit rounded-full duration-200 ease-out'>
								<Image width={32} height={32} src={reaction} />
							</button>
						))}
					</div>
					<button
						onClick={() => console.log("reactions modal")}
						style={{ color: theme.white, background: theme.buttonInactiveBg }}
						className='rounded-full duration-200 ease-out active:opacity-80 active:scale-[0.97] p-2'
					>
						<Svg size={28} icon={icons["smile"]} />
					</button>
				</div>
			</div>
		</UIFullScreenSheet>
	);
}
