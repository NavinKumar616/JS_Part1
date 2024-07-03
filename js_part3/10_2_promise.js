


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
            reject("Error: Not fulfilled");

        }, 2000);
    })

}
function approved1() {
    console.log("4 approved...");
}


// callback help -> problem created soluting in 10


// loadingData1(function () {
//     collectingData1(function () {
//         approvingdata1(function () {
//             approved1();
//         });

//     });
// });

loadingData1().then(collectingData1).then(approvingdata1).then(approved1).catch((err) => {
    console.log(err);
})


