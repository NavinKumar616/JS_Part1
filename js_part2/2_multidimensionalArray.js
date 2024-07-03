let arr = [
    ["navin", 23], // 0
    ["srinu", 25], // 1
    ["robert", 30] // 2
]
console.log(arr);
console.log(arr[1]);
console.log(arr[1][1]);
// part 1
for (let i = 0; i < arr.length; i++) {
    console.log(arr);
}
// part 2
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
// part 3
arr.forEach(data=>{
    data.forEach(val=>{
        console.log(val);
    })
})
// part 4
for(let ar of arr)
    {
        for(let i of ar)
            {
                console.log(i);
            }
    }