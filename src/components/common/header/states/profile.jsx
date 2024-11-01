import { PagesContentTypeContext } from "../../contexts/pagesContentTypeContext";
import { useEffect, useContext, useState } from "preact/hooks";
import { animate } from "motion";
import Svg from "../../ui/utils/svg";
import icons from "../../../../constants/icons";

import "./profile.scss";

export default function StateProfile({ url }) {
	const { activeContent, setActiveContent } = useContext(PagesContentTypeContext);
	const [isShare, setIsShare] = useState(false);
	const [isReport, setIsReport] = useState(false);

	const changeTab = (value) =>{
		const updatedTab = [...activeContent];
    	updatedTab[1] = value; 
		setActiveContent(updatedTab);
	}

	useEffect(() => {
		if (url == "/profile") {
			animate(".header_profile_switcher__indicator", { transform: activeContent[1] === "profile" ? "translateX(0)" : "translateX(100%)" }, { easing: "ease-out", duration: 0.15 });
		} else {
			changeTab('profile')
		}
	}, [url, activeContent]);

	return (
		<>
			<button onClick={() => setIsShare(true)} className={`header_button_profile--${isShare ? "active" : "inactive"}`}>
				<Svg size={32} icon={icons['link']} />
			</button>
			<div className='header_profile_switcher'>
				<div className='header_profile_switcher__indicator' />
				<button onClick={() => changeTab("profile")} className={`header_profile_switcher__tab--${activeContent[1] == "profile" ? "active" : "inactive"}`}>
					Profile
				</button>
				<button onClick={() => changeTab("edit")} className={`header_profile_switcher__tab--${activeContent[1] == "edit" ? "active" : "inactive"}`}>
					Edit
				</button>
			</div>
			<button onClick={() => setIsReport(true)} className={`header_button_profile--${isReport ? "active" : "inactive"}`}>
				<Svg size={32} icon={icons['flag']} />
			</button>
		</>
	);
}
