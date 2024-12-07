import { fetcher } from "@/lib/utils";
import api from "@/constants/api";

export default async function loginAccount (username, password) {
    return await fetcher(api.v2 + "/auth/login", "post", JSON.stringify({
        username,
        password
    }), { 'Content-Type': 'application/json' });
}