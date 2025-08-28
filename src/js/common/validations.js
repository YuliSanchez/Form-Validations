export class Validator {
    PROPER_NAME_REGEX = /[^a-zA-Z\s]/;
    EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    validateProperName(properName){
        let isValid = true; 
        let containSpecialChars = false;
        if (properName.length < 3)
            isValid = false; 

        containSpecialChars = this.PROPER_NAME_REGEX.test(properName);
        if(containSpecialChars)
            isValid = false; 

        return isValid; 
    }

    validateEmail(email){
        return this.EMAIL_REGEX.test(email);
    }
}