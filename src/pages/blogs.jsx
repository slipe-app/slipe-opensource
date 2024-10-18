import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useState, useEffect } from "preact/hooks";
import UsersSlider from "../components/blogs/verticalSlider";
import { useTheme } from "../components/common/contexts/themeContext";
import { useStorage } from "../components/common/contexts/sessionContext";

export default function Blogs() {
	const { data: startData, error, isLoading } = useSWR("/post/get?after=0&region=slavic", async (url) => {
		console.log(url, token)
		return await fetcher(url, "get", null, { Authorization: "Bearer " + token })
	});
	const { theme } = useTheme();
	const { token, store } = useStorage();
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
	
	return (
		<main style={{ background: theme.background }} className='w-screen fixed h-screen top-0'>
			{" "}
			<UsersSlider users={users} blogs={blogs}/>
		</main>
	);
}
