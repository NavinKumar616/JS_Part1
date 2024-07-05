function d(a, b) {
    try {
        if (b == 0) {
            throw new Error("Can't divide by 0");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
d(10, 0);