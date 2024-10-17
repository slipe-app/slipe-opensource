import { useLocation } from "preact-iso";
import icons from "../../../constants/icons";
import StatesRender from "./states";
import { useTheme } from "../contexts/themeContext";

export default function Header() {
	const { url } = useLocation();
	const { theme } = useTheme();

	return (
		<>
			{url !== "/auth" ? (
				<header style={{ backgroundColor: theme.navigationBackground }} className='w-screen animate-[fadeIn_0.2s_ease] fixed flex gap-4 backdrop-blur-3xl z-10 p-4'>
					<a href='/search' style={{ backgroundColor: url == "/search" ? theme.text : theme.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.75rem]'>
						<svg width='32' height='32' style={{ color: url == "/search" ? theme.background : theme.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["search"]} />
						</svg>
					</a>
					{StatesRender(url)}
					<a href='/notifs' style={{ backgroundColor: url == "/notifs" ? theme.text : theme.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.6875rem]'>
						<svg width='34' height='34' style={{ color: url == "/notifs" ? theme.background : theme.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path fill-rule='evenodd' clip-rule='evenodd' d={icons["bell"]} />
						</svg>
					</a>
				</header>
			) : null}
		</>
	);
}
