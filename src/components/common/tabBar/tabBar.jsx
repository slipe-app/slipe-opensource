import icons from "../../../constants/icons";
import colors from "../../../constants/colors";
import { useLocation } from "preact-iso";
import TabBarButton from "./button";

export default function TabBar() {
	const { url } = useLocation();
	return (
		<div style={{ backgroundColor: colors.navigationBackground }} className='w-screen fixed flex bottom-0 backdrop-blur-3xl z-10'>
			<TabBarButton icon={icons["blogs"]} label="Blogs" url="/" currentUrl={url} color={colors.text}/>
            <TabBarButton icon={icons["plus"]} label="Create post" url="/create" currentUrl={url} color={colors.text}/>
            <TabBarButton avatar="./postsExamples/skibidi.jpg" label="My profile" url="/profile" currentUrl={url} color={colors.text}/>
		</div>
	);
};
