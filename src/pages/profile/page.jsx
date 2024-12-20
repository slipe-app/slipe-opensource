import { Banner, Description, Publications, User } from "@/components/shared/profile/profile"
import useSWR from "swr"
import api from "@/constants/api"
import { useStorage } from "@/hooks/contexts/session";
import { fetcher } from "@/lib/utils";

export default function Profile() {
	const { token, store } = useStorage();
	const {
		data: user,
		error,
		isLoading,
	} = useSWR(api.v1 + "/account/info/get", async url => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

  return (
    <div className='w-full h-full overflow-y-auto flex flex-col'>
        <Banner banner={user?.success[0]?.banner} username={user?.success[0]?.username} pixel_order={user?.success[0]?.pixel_order}/>
        <div className="w-full z-10 min-h-full flex flex-col gap-5">
          <User user={user?.success[0]}/>
          <Description description={user?.success[0]?.description}/>
          <Publications/>
        </div>
    </div>
  )
}
