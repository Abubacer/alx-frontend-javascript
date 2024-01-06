/**
 * Represents a class named Currency.
 */
export default class Currency {
  /**
   * Creates a new @see {@link Currency}.
   *
   * @param {String} code - The currency code.
   * @param {String} name - The currency name.
  */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  /* Gets the code of the currency */
  get code() {
    return this._code;
  }
  /* Sets the code of the currency */
  set code(value) {
    this._code = value;
  }
  /* Gets the name of the currency */
  get name() {
    return this._name;
  }
  /* Sets the name of the currency */
  set name(value) {
    this._name = value;
  }

  /**
   * Returnes the full string representation of the Currency attributes.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
