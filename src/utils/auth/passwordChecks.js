export default function hasStringByPass(inputString, maxLength = 48, minLegth = 8) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ0-9\s.,!?@#$%^&*()_+-=]+$/;

    if (!regex.test(inputString)) {
        return [false, 'Password contains forbidden symbols']
    }

    if (inputString.length < 8 || inputString.length > 48) {
        return [false, 'Password must be between 8 and 48 characters long'];
    }

    return [true, ''];
}