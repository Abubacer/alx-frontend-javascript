// Define an interface named Student.
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// Create two instances of students using the Student interface.
const studentOne: Student = {
    firstName: "Morton",
    lastName: "Schmidt",
    age: 26,
    location: "Metropolitan City",
};

const studentTwo: Student = {
    firstName: "Greg",
    lastName: "Jenko",
    age: 28,
    location: "Louisiana",
};
// Store the students in an array named studentsList.
const studentsList: Student[] = [studentOne, studentTwo];
// Using Vanilla JavaScript, dynamically render a table
// and append a new row for each student in the array.
document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    let headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);

    headerCell1.textContent = "First Name";
    headerCell2.textContent = "Location";

    studentsList.forEach((student) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    // Append the table to the body of the HTML document.
    document.body.appendChild(table);
});
