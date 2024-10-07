export default function hasStringByPass(inputString, maxLength = 48, minLegth = 8) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?@#$%^&*()_+-=]+$/;

    if (!regex.test(inputString)) {
        console.log(1)
        return true;
    }

    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) > 0xFFFF) {
            console.log(2)
            return true;
        }
    }

    if (inputString.length < 8 || inputString.length > 48) {
        console.log(3)
        return true;
    }

    return false;
}