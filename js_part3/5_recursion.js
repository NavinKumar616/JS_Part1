// recursion

// function calling itself

// part 1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// part 2
function printNumbersRecursive(n) {
    if (n <= 10) {
        console.log(n);
        printNumbersRecursive(n + 1);
    }
}
printNumbersRecursive(1);

// part 3

function fact(n) {
    if (n == 0) {
        return 1;
    }

    else {
        return n * fact(n - 1);

    }
}
console.log(fact(5)); // 120