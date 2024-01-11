// Define a namespace named Subjects
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingC) {
                return "No available Teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
