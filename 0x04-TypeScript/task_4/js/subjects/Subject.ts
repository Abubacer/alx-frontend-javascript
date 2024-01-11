// Define a Subject class inside a namespace named Subjects.
namespace Subjects {
    export class Subject {
        teacher: Teacher;

        // Setter method
        set setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
