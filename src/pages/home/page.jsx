import { fetcher } from "@/lib/utils";
import api from "@/constants/api";
import { useState, useEffect, useContext } from "react";
import UsersSlider from "@/components/shared/home/sliders/users";
import { PagesContentTypeContext } from "@/hooks/contexts/posts-type";
import { useStorage } from "@/hooks/contexts/session";
import { useNavigate } from "react-router";

export default function Home() {
	const navigate = useNavigate()
	const { token, store } = useStorage();
	console.log(token)
	if (!token) navigate("/auth");

	const [startData, setStartData] = useState();
	const [isLoading, setIsLoading] = useState();
	const [error, setError] = useState();

	const [users, setUsers] = useState([]);
	const [blogs, setBlogs] = useState([]);

	const { activeContent, setActiveContent } = useContext(PagesContentTypeContext);

	useEffect(() => {
		setBlogs([]);
		setUsers([]);
	}, [activeContent]);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const request = await fetcher(api.v1 + `/post/get?after=0&region=slavic${activeContent === "follows" ? "&subscribed=true" : ""}`, "get", null, {
				Authorization: "Bearer " + token,
			});
			setIsLoading(false);
			if (request?.success) setStartData(request);
			else setStartData(request?.error);
		})();
	}, [activeContent]);

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

	return <UsersSlider users={users} blogs={blogs} type={activeContent} />;
}
