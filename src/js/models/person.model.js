export class Person{
    name;
    lastName;
    email; 
    personID;
    taxID;

    constructor(name, lastName, email, personID, taxID){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.personID = personID;
        this.taxID = taxID; 
    }
}