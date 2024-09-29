import { Image } from "@unpic/preact";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useState, useEffect } from "preact/hooks";
import Slider from "../components/blogs/slider/blogsSlider";
import readLocaleFile from "../utils/locales/read";

export default function Blogs() {
	const { data: startData, error, isLoading } = useSWR("/post/get?after=0&region=english", fetcher);

	const [users, setUsers] = useState([]);
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		if (!isLoading && startData?.success) {
			const users = Object.keys(startData.success);
			setUsers(users);

			const allBlogs = users.flatMap(username => {
				const user = startData.success[username];
				return user?.posts?.map(post => ({ ...post, author: user.author })) || [];
			});

			setBlogs(allBlogs);
		}
	}, [startData, isLoading, error]);

	return <Slider users={users} blogs={blogs} />;
}
