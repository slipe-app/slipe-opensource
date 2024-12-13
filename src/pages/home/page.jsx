import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import api from "@/constants/api";
import { useState, useEffect, useContext } from "react";
import UsersSlider from "@/components/shared/home/sliders/users";
import { useStorage } from "@/hooks/contexts/session";
import { PagesContentTypeContext } from "@/hooks/contexts/posts-type";
import { AnimatePresence, motion } from "motion/react";
import NoFollowers from "@/components/shared/home/slides/no-followers/no-followers";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [blogs, setBlogs] = useState([]);
	const { token, store } = useStorage();
	const { activeContent, setActiveContent } = useContext(PagesContentTypeContext);

	const {
		data: startData,
		error,
		isLoading,
	} = useSWR(api.v1 + "/post/get?after=0&region=slavic", async url => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

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

	return <>{activeContent == "forYou" ? <UsersSlider users={users} blogs={blogs} /> : <NoFollowers />}</>;
}
