import loginAccount from "./signIn/requests/login";
import registerAccount from "./signUp/requests/register";

export default async function auth(type, username, password, onStarted, onSuccess, onError) {
    onStarted();

    const request = type === "signup" ?
        await registerAccount(username, password) :
        await loginAccount(username, password);

    if (request?.token) {
        return onSuccess(request?.token);
    } else {
        return onError(request?.error);
    }
}