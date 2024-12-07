import { fetcher } from "@/lib/utils";
import api from "@/constants/api";

export default async function registerAccount (username, password) {
    return await fetcher(api.v2 + "/auth/register", "post", JSON.stringify({
        username,
        password
    }), { 'Content-Type': 'application/json' });
}