import icons from "../../../constants/icons";
import { Image } from "@unpic/preact";
import Svg from "../ui/utils/svg";
import { useLocation } from "preact-iso";
import { useStorage } from "../contexts/sessionContext";
import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import cdn_url from "../../../constants/cdn_url";

import "./tabBar.scss";

export default function TabBar() {
	const { url } = useLocation();
	const { token, store } = useStorage();

	const { data: user, error, isLoading } = useSWR("/account/info/get", async url => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

	return (
		<>
			{url !== "/auth" ? (
				<div className='tab-bar'>
					<a href='/' className={url === "/" ? "tab--active" : "tab--inactive"}>
						<Svg size={44} icon={icons["blogs"]} />
					</a>
					<a href='/add' className={url === "/add" ? "tab--active" : "tab--inactive"}>
						<Svg size={44} icon={icons["plus"]} />
					</a>
					<a href='/profile' className={url === "/profile" ? "tab--active" : "tab_user--inactive"}>
						<div className='avatar-wrapper'>
							<Image src={!isLoading ? `${cdn_url}/avatars/${user?.success[0]?.avatar}` : null} width={36} height={36} />
						</div>
					</a>
				</div>
			) : null}
		</>
	);
}
