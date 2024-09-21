import { useLocation } from "preact-iso";
import colors from "../../../constants/colors";
import icons from "../../../constants/icons";
import { useContext } from "preact/hooks";
import { PostsTypeContext } from "../contexts/postsTypeContext";

const Header = () => {
	const { url } = useLocation();

	return (
		<header style={{ backgroundColor: colors.navigationBackground }} className='w-screen fixed flex gap-4 backdrop-blur-3xl z-10 p-4'>
			<a href='/search' style={{ backgroundColor: url == "/search" ? colors.text : colors.buttonInactiveBackground }} className='rounded-full duration-150 p-2'>
				<svg width='34' height='34' style={{ color: url == "/search" ? colors.background : colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["search"]} />
				</svg>
			</a>
			{StatesRender(url)}
			<a href='/notifs' style={{ backgroundColor: url == "/notifs" ? colors.text : colors.buttonInactiveBackground }} className='rounded-full duration-150 p-2'>
				<svg width='34' height='34' style={{ color: url == "/notifs" ? colors.background : colors.text }} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
					<path fill-rule='evenodd' clip-rule='evenodd' d={icons["bell"]} />
				</svg>
			</a>
		</header>
	);
};

const StatesRender = url => {
	const { type, setType } = useContext(PostsTypeContext);

	switch (url) {
		case "/":
			return (
				<div className='w-full flex font-semibold text-lg'>
					<button onClick={() => setType("foryou")} className='w-full text-center duration-150' style={{ color: type == "foryou" ? colors.text : colors.textPrimaryTransparent }}>
						For you
					</button>
					<button onClick={() => setType("followed")} className='w-full text-center duration-150' style={{ color: type == "followed" ? colors.text : colors.textPrimaryTransparent }}>
						Followed
					</button>
				</div>
			);
		case "/search":
			return <>2</>;
		case "/profile":
			return <>3</>;
	}
};

export default Header;
