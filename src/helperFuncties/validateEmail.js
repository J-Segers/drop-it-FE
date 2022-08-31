function checkEmailValidity(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export default checkEmailValidity;