// Define a namespace named Subjects
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingReact) {
                return "No available Teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
