function filterRange(arr, a, b) {
    return arr.filter(function (item) { return item >= a && item <= b; });
}
var numbers = [5, 3, 8, 1];
var filtered = filterRange(numbers, 1, 4);
console.log(filtered)
