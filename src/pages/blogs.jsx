import { Image } from "@unpic/preact";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useState } from "preact/hooks";
import Slider from "../components/blogs/slider/blogsSlider";

const Blogs = () => {

	// const startPosts = useSWR('/post/get?after=0', fetcher);
	// const [users, setUsers] = useState(Object.keys(startPosts?.data?.success));

	// console.log(users)
	
	return (
        <Slider/>
	);
};

export default Blogs;
