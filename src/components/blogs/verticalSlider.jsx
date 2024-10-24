import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import BlogsSlider from "./horizontalSlider";
import { Virtual } from "swiper/modules";
import { useEffect, useState } from "preact/hooks";
import { useStorage } from "../common/contexts/sessionContext";

import fetcher from "../../utils/fetcher";

export default function UsersSlider({ users, blogs }) {
	const [allUsers, setUsers] = useState();
	const [allBlogs, setBlogs] = useState();

	const { token, store } = useStorage();

	useEffect(() => {
		setUsers(users);
		setBlogs(blogs);
	}, [users, blogs]);

	async function onSlideChange(slide) {
		const currentSlide = slide.activeIndex;
		const greatestIndex = allUsers.length - 1;
		const allUserIds = [...new Set(allBlogs.map(blog => blog.author.id))];

		if (greatestIndex - currentSlide === 1) {
			const reqBlogs = await fetcher(`/post/get?after=0&users=[${allUserIds}]&region=slavic`, "get", null, { Authorization: "Bearer " + token });
			const reqUsers = Object.keys(reqBlogs?.success);

			setUsers(oldValue => [...oldValue, ...reqUsers]);
			setBlogs(oldValue => [
				...oldValue,
				...reqUsers.flatMap(username => {
					const user = reqBlogs?.success[username];
					return user?.posts?.map(post => ({ ...post, author: user.author })) || [];
				}),
			]);
		}
	}

	return (
		<>
			<Swiper slidesPerView={1} modules={[Virtual]} direction='vertical' className='!w-full !h-full' onSlideChange={onSlideChange} virtual>
				{allUsers?.map((username, index) => (
					<SwiperSlide key={index} virtualIndex={index} className='!w-full !h-full'>
						<BlogsSlider blogs={allBlogs.filter(blog => blog.author.username === username)} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
