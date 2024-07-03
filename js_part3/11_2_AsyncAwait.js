

// part 2

function loadingData1() {
    return new Promise((resolve, reject) => {
        console.log("Processing");
        setTimeout(() => {
            console.log("1 Loading data...");
            resolve();
        }, 4000);
    })


}
function collectingData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2 collecting Data...");
            resolve();

        }, 5000);
    })



}
function approvingdata1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3 approving data...");
            resolve();

        }, 2000);
    })

}
function approved1() {
    console.log("4 approved...");
}



async function Ex() {
    await loadingData1(); // 1st
    await approvingdata1(); // 2nd
    await approved1(); // 3rd
}

Ex().then(collectingData1).catch((err) => {
    console.log(err);
});