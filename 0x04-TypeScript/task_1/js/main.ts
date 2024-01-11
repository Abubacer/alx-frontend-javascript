// Define an interface named Teacher.
interface Teacher {
    readonly firstName: string; // only be modifiable when
    readonly lastName: string; // a Teacher is first initialized
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // this attribute is optional
    location: string;
    [key: string]: any; // Allow to add any additional attribute
}

/**
 *  Usage example:
 * const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
   };
 * console.log(teacher3);
*/

// Define an interface named Directors that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

/** 
 * Usage example:
 * const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
   };
 * console.log(director1);
*/

// Define an interface for printTeacherFunction function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
// Returns the first letter of the firstName and the full lastName
export const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string
): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

/**
 * Usage example:
 * console.log(printTeacher("John", "Doe")) -> J. Doe
*/

// Define an interface describing the constructor parameters for StudentClass
interface StudentClsConstructor {
    new (firstName: string, lastName: string): StudentClsInterface;
}
// Interface describing the structure of the StudentClass
interface StudentClsInterface {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentClsInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
