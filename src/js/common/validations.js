export class Validator {
    PROPER_NAME_REGEX = /[^a-zA-Z\s]/;

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
}