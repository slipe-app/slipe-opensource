export default function validatePassword(password) {
    const result = {
        lengthValid: false,
        hasLetters: false,  
        hasSpecialChar: false,
    };

    if (password.length >= 8 && password.length <= 32) {
        result.lengthValid = true;
    }

    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
        result.hasLetters = true;
    }

    if (/[!@#\$%\^\&*\)\(+=._-]/.test(password)) {
        result.hasSpecialChar = true;
    }

    return result;
}
