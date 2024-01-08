// Track within the weakMap the number of times queryAPI is called for each endpoint.
const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 1);
  } else {
    const numberOfQuery = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, numberOfQuery);
    // When the number of queries is >= 5 throw an error.
    if (numberOfQuery >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export { queryAPI, weakMap };
