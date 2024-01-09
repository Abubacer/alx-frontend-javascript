// returns a string of all the set values that start with a specific string.
function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
