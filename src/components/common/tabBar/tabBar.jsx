import icons from "../../../constants/icons";
import colors from "../../../constants/colors";
import { useLocation } from "preact-iso";
import TabBarButton from "./button";
import readLocaleFile from "../../../utils/locales/read";

export default function TabBar() {
	const { url } = useLocation();
	const locales = readLocaleFile("ru");

	return (
		<>
			{url !== "/auth" ? (
				<div style={{ backgroundColor: colors.navigationBackground }} className='w-screen animate-[fadeIn_0.2s_ease] fixed flex bottom-0 backdrop-blur-3xl z-10'>
					<TabBarButton icon={icons["blogs"]} label={locales.navigation.blogs} url='/' currentUrl={url} color={colors.text} />
					<TabBarButton icon={icons["plus"]} label={locales.navigation.create} url='/create' currentUrl={url} color={colors.text} />
					<TabBarButton avatar='./postsExamples/skibidi.jpg' label={locales.navigation.profile} url='/profile' currentUrl={url} color={colors.text} />
				</div>
			) : null}
		</>
	);
}
