import icons from "../../constants/icons";
import { Image } from "@unpic/preact";
import Svg from "./ui/utils/svg";
import { useTheme } from "./contexts/themeContext";
import { useLocation } from "preact-iso";
import { useStorage } from "./contexts/sessionContext";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import cdn_url from "../../constants/cdn_url";

export default function TabBar() {
	const { url } = useLocation();
	const { theme } = useTheme();
	const { token, store } = useStorage();

	const { data: user, error, isLoading } = useSWR("/account/info/get", async (url) => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

	return (
		<>
			{url !== "/auth" ? (
				<div style={{ backgroundColor: theme.navigationBackground }} className='w-screen animate-[fadeIn_0.2s_ease] fixed flex bottom-0 backdrop-blur-3xl z-10'>
					<a href='/' style={{ opacity: url === "/" ? 1 : 0.25, color: theme.text }} className='w-full duration-200 ease-out pt-4 pb-6 justify-center flex'>
						<Svg size={44} icon={icons["blogs"]} />
					</a>
					<a href='/auth' style={{ opacity: url === "/add" ? 1 : 0.25, color: theme.text }} className='w-full duration-200 ease-out pt-4 pb-6 justify-center flex'>
						<Svg size={44} icon={icons["plus"]} />
					</a>
					<a href='/profile' style={{ opacity: url === "/profile" ? 1 : 0.5 }} className='w-full duration-200 ease-out pt-4 pb-6 justify-center flex'>
						<div className='w-11 h-11 flex justify-center items-center'>
							<Image src={!isLoading ? `${cdn_url}/avatars/${user?.success[0]?.avatar}` : null} className='rounded-full' width={36} height={36} />
						</div>
					</a>
				</div>
			) : null}
		</>
	);
}
