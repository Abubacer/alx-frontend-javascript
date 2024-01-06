/**
 * Represents a class named Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new class @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the Holbertoncourse.
   * @param {Number} length - The course timeframe length (in months).
   * @param {String[]} students - The names of students.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the Holbertoncourse name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the Holbertoncourse name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the Holbertoncourse length.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the Holbertoncourse length.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the course students names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the course students names.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
