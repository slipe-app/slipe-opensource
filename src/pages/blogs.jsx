import { Image } from "@unpic/preact";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useState, useEffect } from "preact/hooks";
import readLocaleFile from "../utils/locales/read";
import BlogsSlider from "../components/blogs/horizontalSlider";
import UsersSlider from "../components/blogs/verticalSlider";

export default function Blogs() {
	const { data: startData, error, isLoading } = useSWR("/post/get?after=0&region=slavic", fetcher);

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

	return <UsersSlider/>;
}
