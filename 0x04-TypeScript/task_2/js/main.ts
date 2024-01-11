// Define an interface named DirectorInterface.
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define an interface named TeacherInterface.
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Define a Director class
export class Director implements DirectorInterface {
    workFromHome(): string {
        //console.log("Working from home");
        return "Working from home";
    }
    getCoffeeBreak(): string {
        //console.log("Getting a coffee break");
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        //console.log("Getting to director tasks");
        return "Getting to director tasks";
    }
}

// Define a Teacher class
export class Teacher implements TeacherInterface {
    workFromHome(): string {
        //console.log("Cannot work from home");
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        //console.log("Cannot have a break");
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        //console.log("Getting to work");
        return "Getting to work";
    }
}

// Return either a Director or a Teacher instance based on salary number
export function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Usage example: If you want to test the functions uncomment.
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));

// Execute the appropriate work task based on the type of the employee,
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return 'workDirectorTasks' in employee;
}

export function executeWork(employee: TeacherInterface | DirectorInterface): string {
    let taskCall: string;
    if (isDirector(employee)) {
        taskCall = employee.workDirectorTasks();
    } else {
        taskCall = employee.workTeacherTasks();
    }
    console.log(taskCall);
    return taskCall;
}

// Usage example: If you want to test the functions uncomment.
// executeWork(createEmployee(200));
// executeWork(createEmployee(1000));

// Define a type for subjects that can be taught
type Subjects = "Math" | "History";
// Return today class based on the specified subject
export function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case "History":
            return "Teaching History";
        case "Math":
            return "Teaching Math";
        default:
            return "Enjoy Your Free Time";
    }
}

// Usage example: If you want to test the functions uncomment.
// console.log(teachClass('Math'));
// console.log(teachClass('History'));
