let password = "";

function getPasswordErrors(input) {
    //check if input is empty return "" if true
    if(input === "") {
        return "";
    }

    //set global password value from input value
    password = input;

    let errorsArr = validatePassword();
    let errors = "";

    //check for each array index if it's not empty else add error from array index
    for(let i = 0; i < errorsArr.length; i++) {
        if(errorsArr[i] !== "") {
            errors += errorsArr[i];
        }
    }

    if(errors === "") {
        return "";
    }

    return "needs to contain " + errors;
}
export default getPasswordErrors;

function validatePassword() {
    let listErrors = [];

    listErrors.push(checkForPasswordLength());
    listErrors.push(checkForLowerCase());
    listErrors.push(checkForUpperCase());
    listErrors.push(checkForDigits());
    listErrors.push(checkForSpecialCharacters());

    return listErrors;
}

function checkForPasswordLength() {
    if(password.length >= 6 && password.length <= 26){
        return "";
    }
    return "6-26 characters";
}

function checkForLowerCase() {
    if(!password.match(/[a-z]/)) {
        return "a-z";
    }
    return "";
}

function checkForUpperCase() {
    if(!password.match(/[A-Z]/)) {
        return "A-Z";
    }
    return "";
}

function checkForDigits() {
    if(!password.match(/[0-9]/)) {
        return "0-9";
    }
    return "";
}

function checkForSpecialCharacters() {
    if(!password.match(/[!@#$%^&*]/)) {
        return "!@#$%^&*";
    }
    return "";
}
