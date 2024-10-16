import { useLocation } from "preact-iso";
import colors from "../../../constants/colors";
import icons from "../../../constants/icons";
import StatesRender from "./states";
import { PostsTypeContext } from "../contexts/postsTypeContext";

export default function Header() {
	const { url } = useLocation();

	return (
		<>
			{url !== "/auth" ? (
				<header style={{ backgroundColor: colors.navigationBackground }} className='w-screen animate-[fadeIn_0.2s_ease] fixed flex gap-4 backdrop-blur-3xl z-10 p-4'>
					<a href='/search' style={{ backgroundColor: url == "/search" ? colors.text : colors.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.75rem]'>
						<svg width='32' height='32' style={{ color: url == "/search" ? colors.background : colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["search"]} />
						</svg>
					</a>
					{StatesRender(url)}
					<a href='/notifs' style={{ backgroundColor: url == "/notifs" ? colors.text : colors.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.6875rem]'>
						<svg width='34' height='34' style={{ color: url == "/notifs" ? colors.background : colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["bell"]} />
						</svg>
					</a>
				</header>
			) : null}
		</>
	);
}
