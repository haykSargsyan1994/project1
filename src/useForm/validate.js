export const validateUserName = (username) => {
    const pattern =  /^[a-zA-Z ]+$/
    return pattern.test(username);
}