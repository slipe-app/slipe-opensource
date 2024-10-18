import { useLocation } from "preact-iso";
import icons from "../../../constants/icons";
import Svg from "../ui/utils/svg";
import StatesRender from "./states";
import { useTheme } from "../contexts/themeContext";

export default function Header() {
	const { url } = useLocation();
	const { theme } = useTheme();

	return (
		<>
			{url !== "/auth" ? (
				<header style={{ backgroundColor: theme.navigationBackground }} className='w-screen animate-[fadeIn_0.2s_ease] fixed flex gap-4 backdrop-blur-3xl z-10 p-4'>
					<a href='/notifs' style={{ backgroundColor: url == "/search" ? theme.text : theme.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.6875rem]'>
						<Svg size={34} style={{ color: url == "/search" ? theme.background : theme.text }} icon={icons["bell"]} />
					</a>
					{StatesRender(url)}
					<a href='/search' style={{ backgroundColor: url == "/notifs" ? theme.text : theme.buttonInactiveBg }} className='rounded-full duration-200 ease-out p-[0.75rem]'>
						<Svg size={32} style={{ color: url == "/search" ? theme.background : theme.text }} icon={icons["search"]} />
					</a>
				</header>
			) : null}
		</>
	);
}
