import { useContext } from "preact/hooks";
import colors from "../../../constants/colors";
import { PostsTypeContext } from "../contexts/postsTypeContext";

export default function StatesRender(url) {
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
}
