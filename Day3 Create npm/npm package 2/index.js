// index.js

// 1. Sum of all elements in the array
Array.prototype.sum = function() {
    return this.reduce((acc, val) => acc + val, 0);
};

// 2. Clear all duplicate elements from the array
Array.prototype.unique = function() {
    return [...new Set(this)];
};

// 3. Get the median of the array
Array.prototype.median = function() {
    if (this.length === 0) return null;
    const sorted = [...this].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

// 4. Get the average of all elements in the array
Array.prototype.average = function() {
    return this.length === 0 ? null : this.sum() / this.length;
};

// 5. Find the maximum element in the array
Array.prototype.max = function() {
    return Math.max(...this);
};

// 6. Find the minimum element in the array
Array.prototype.min = function() {
    return Math.min(...this);
};

// 7. Flatten a nested array
Array.prototype.flatten = function() {
    return this.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flatten() : val), []);
};

// 8. Count occurrences of each element
Array.prototype.countOccurrences = function() {
    return this.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};

// 9. Get the first element of the array
Array.prototype.first = function() {
    return this[0];
};

// 10. Get the last element of the array
Array.prototype.last = function() {
    return this[this.length - 1];
};
