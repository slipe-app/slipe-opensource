import api from "@/constants/api";
import { fetcher } from "../utils";

export default async function sendReport (type, to_type, to, token) {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("to_type", to_type);
    formData.append("to", to);

    return await fetcher(api.v1 + "/report/send", "post", formData, {
        "Authorization": "Bearer " + token,
    });
}