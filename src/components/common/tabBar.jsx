import icons from "../../constants/icons";
import colors from "../../constants/colors";
import { Image } from "@unpic/preact";
import { useLocation } from "preact-iso";

export default function TabBar() {
	const { url } = useLocation();

	return (
		<>
			{url !== "/auth" ? (
				<div style={{ backgroundColor: colors.navigationBackground }} className='w-screen animate-[fadeIn_0.2s_ease] fixed flex bottom-0 backdrop-blur-3xl z-10'>
					<a href="/" style={{ opacity: url === "/" ? 1 : 0.25, color: colors.text }} className='w-full duration-200 ease-out pt-4 pb-6 justify-center flex'>
						<svg width='44' height='44' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["blogs"]} />
						</svg>
					</a>
					<a href="/add" style={{ opacity: url === "/add" ? 1 : 0.25, color: colors.text }} className='w-full duration-200 ease-out pt-4 pb-6 justify-center flex'>
						<svg width='44' height='44' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["plus"]} />
						</svg>
					</a>
					<a href="/profile" style={{ opacity: url === "/profile" ? 1 : 0.5 }} className='w-full duration-200 ease-out pt-4 pb-6 justify-center flex'>
						<div className='w-11 h-11 flex justify-center items-center'>
							<Image src='postsExamples/gucciFish.webp' className='rounded-full' width={36} height={36} />
						</div>
					</a>
				</div>
			) : null}
		</>
	);
}
