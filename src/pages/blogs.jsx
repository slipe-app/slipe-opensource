import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useState, useEffect } from "preact/hooks";
import UsersSlider from "../components/blogs/verticalSlider";
import { useTheme } from "../components/common/contexts/themeContext";

export default function Blogs() {
	const { data: startData, error, isLoading } = useSWR("/post/get?after=0&region=slavic", fetcher);
	const { theme } = useTheme();
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
			<UsersSlider />
		</main>
	);
}
