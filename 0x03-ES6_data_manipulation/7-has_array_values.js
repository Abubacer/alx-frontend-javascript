// returns a boolean if all the elements in the array exist within the set.
function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

export default hasValuesFromArray;
