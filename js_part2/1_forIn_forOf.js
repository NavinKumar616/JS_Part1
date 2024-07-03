let arr = [10, 20, 30, 40];
// in
for (let ar in arr) {
    console.log(ar); // it will print the index of an array arr
    console.log(arr[ar]); // it will print the values
}
// of
for (let ar of arr) {
    console.log(ar); // it will print the values

}
