// test.js

import  "./index.js"// Import the array prototype extensions

// Testing array utility functions
const arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9];

console.log('Sum:', arr.sum()); // 61
console.log('Unique:', arr.unique()); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('Median:', arr.median()); // 5
console.log('Average:', arr.average()); // 4.6923076923076925
console.log('Max:', arr.max()); // 9
console.log('Min:', arr.min()); // 1
console.log('Flatten:', [[1, 2], [3, 4], [5]].flatten()); // [1, 2, 3, 4, 5]
console.log('Count Occurrences:', arr.countOccurrences()); // { '1': 1, '2': 2, '3': 1, '4': 1, '5': 3, '6': 1, '7': 1, '8': 1, '9': 2 }
console.log('First:', arr.first()); // 1
console.log('Last:', arr.last()); // 9
