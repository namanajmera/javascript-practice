function flattenArray(arr) {
    // Your implementation
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            arr.splice(index, 1, ...arr[index]);
            index--;
        }
    }
    return arr;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));