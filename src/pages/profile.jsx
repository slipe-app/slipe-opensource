import ProfileUserWrapper from "../components/profile/user/wrapper";
import useSWR from "swr";
import { useStorage } from "../components/common/contexts/sessionContext";

export default function Profile() {
	const { token, store } = useStorage();

	const { data: user, error, isLoading } = useSWR("/account/info/get", async url => await fetcher(url, "get", null, { Authorization: "Bearer " + token }));

	return <ProfileUserWrapper user={user?.success[0]} />;
}
