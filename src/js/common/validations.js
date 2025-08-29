export class Validator {
    PROPER_NAME_REGEX = /[^a-zA-Z\s]/;
    EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    CURP_REGEX = /^[A-Z]{4}\d{6}[HM]{1}[A-Z]{2}[A-Z]{3}[A-Z0-9]{1}\d{1}$/;
    RFC_REGEX = /^([A-ZÑ&]{3,4})\d{6}([A-Z0-9]{3})$/;

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

    validateCURP(curp){
        return this.CURP_REGEX.test(curp);
    }

    validateRFC(rfc){
        return this.RFC_REGEX.test(rfc);
    }
}