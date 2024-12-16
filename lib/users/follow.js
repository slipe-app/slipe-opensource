import api from "@/constants/api";
import { fetcher } from "../utils";

export default async function follow (user_id, token) {
    return await fetcher(
        api.v1 + "/account/subscribe",
        "post",
        JSON.stringify({ user_id }),
        { "Content-Type": "application/json", Authorization: "Bearer " + token }
    );
}