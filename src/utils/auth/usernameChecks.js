export default function validateUsername(username, maxLength = 24, minLength = 2) {
  
    if (username.length < minLength || username.length > maxLength) {
        return [false, 'Username must be between 2 and 17 characters long']
    }
  
    if (!/^(?!\s)(?=.*[a-zA-Z])[a-zA-Z0-9](?!.*[_\.\-]$)[a-zA-Z0-9_.-]{0,14}[a-zA-Z0-9]$/.test(username)) {
        return [false, 'Username must contain only letters, numbers, (_), (-), (.)']
    }

    return [true, ''];
  }