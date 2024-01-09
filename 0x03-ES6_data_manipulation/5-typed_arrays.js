// returns a new ArrayBuffer with an Int8 value at a specific position.
function createInt8TypedArray(length, position, value) {
  // If adding the value is not possible, throw an error.
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);
  return dataView;
}

export default createInt8TypedArray;
