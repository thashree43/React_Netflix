
export const loginUpValidate = (email,password)=>{
    const validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

    if (!validEmail || !email.trim()) return "Please enter a valid email address";
    if (!validPassword || !password.trim()) return "Password must be at least 8 characters long and contain at least one uppercase letter, one numeric digit, and one special character";

    return null
}