import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useState, useEffect } from "preact/hooks";
import UsersSlider from "../components/blogs/verticalSlider";
import { useStorage } from "../components/common/contexts/sessionContext";

export default function Blogs() {
	const { token, store } = useStorage();
	const [users, setUsers] = useState([]);
	const [blogs, setBlogs] = useState([]);

	const { data: startData, error, isLoading } = useSWR("/post/get?after=0&region=slavic", async (url) => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

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

	return (
			<UsersSlider users={users} blogs={blogs} />
	);
}
