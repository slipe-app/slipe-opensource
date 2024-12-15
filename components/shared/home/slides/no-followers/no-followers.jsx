import UserCard from "./user-card";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import { fetcher } from "@/lib/utils";
import api from "@/constants/api";
import useSWR from "swr";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Skeleton } from "@/components/ui/skeleton";

export default function NoFollowers() {
	const { data: users, isLoading, error } = useSWR(api.v1 + "/account/popular", async url => await fetcher(url, "get", null));

	console.log(users?.success);

	return (
		<div className='w-full h-full flex-col flex justify-center animate-[fadeIn_0.3s_ease-out] items-center gap-4'>
			<div className='flex flex-col gap-2 items-center'>
				<img src='./static/states-assets/nothing.png' className='w-40 h-40' />
				<span className='text-3xl text-foreground font-semibold'>You have no follows</span>
			</div>
			<Swiper
				creativeEffect={{
					prev: {
						opacity: 0.4,
						translate: ["-106%", 0, 0],
					},
					next: {
						opacity: 0.4,
						translate: ["106%", 0, 0],
					},
				}}
				effect='creative'
				slidesPerView='auto'
				pagination={{
					clickable: true,
				}}
				autoHeight
				modules={[Pagination, EffectCreative]}
				className='w-full px-5 swiper-followers'
			>
				{!isLoading && !error ? (
					[...Array(4).keys()]
						.map(i => i * 2)
						.map((_, index) => (
							<SwiperSlide className='gap-5 flex'>
								{users?.success.slice(_, _ + 2).map(user => (
									<UserCard user={user} />
								))}
							</SwiperSlide>
						))
				) : (
					<div className='flex w-full gap-5'>
						<Skeleton className='w-full aspect-square rounded-3xl' />
						<Skeleton className='w-full aspect-square rounded-3xl' />
					</div>
				)}
			</Swiper>
		</div>
	);
}
