export class Validator {
    PROPER_NAME_REGEX = /[^a-zA-Z\s]/;
    EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    CURP_REGEX = /^[A-Z]{4}\d{6}[HM]{1}[A-Z]{2}[A-Z]{3}[A-Z0-9]{1}\d{1}$/;
    RFC_REGEX = /^([A-ZÑ&]{3,4})\d{6}([A-Z0-9]{3})$/;

    PROPER_NAME_ERROR_MESSAGE = "El nombre debe contener almenos 3 caracteres y no debe contener números.";
    EMAIL_ERROR_MESSAGE = "Debe ingresar un email válido.";
    CURP_ERROR_MESSAGE = "Debe ingresar un CURP válido";
    RFC_ERROR_MESSAGE = "Debe ingresar un RFC válido";

    validateProperName(properName) {
        let isValid = true;
        let containSpecialChars = false;
        if (properName.length < 3)
            isValid = false;

        containSpecialChars = this.PROPER_NAME_REGEX.test(properName);
        if (containSpecialChars)
            isValid = false;

        return { isValid: isValid, message: isValid === true ? "" : this.PROPER_NAME_ERROR_MESSAGE };
    }

    validateEmail(email) {
        let isValid = this.EMAIL_REGEX.test(email);
        return { isValid: isValid, message: isValid === true ? "" : this.EMAIL_ERROR_MESSAGE };
    }

    validateCURP(curp) {
        let isValid = this.CURP_REGEX.test(curp);
        return { isValid: isValid, message: isValid === true ? "" : this.CURP_ERROR_MESSAGE };

    }

    validateRFC(rfc) {
        let isValid = this.RFC_REGEX.test(rfc);
        return { isValid: isValid, message: isValid === true ? "" : this.RFC_ERROR_MESSAGE };

    }
}
