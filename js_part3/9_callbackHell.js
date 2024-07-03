// part 1

function loadingData(callback) {
    setTimeout(() => {
        console.log("1 Loading data...");
        callback();
    }, 4000);

}
function collectingData() {
    console.log("2 collecting Data...");

}
function approvingdata() {
    console.log("3 approving data...");
}
function approved() {
    console.log("4 approved...");
}


loadingData(function () {
    collectingData();
    approvingdata();
    approved();
});

// part 2

function loadingData1(callback) {
    setTimeout(() => {
        console.log("1 Loading data...");
        callback();
    }, 4000);

}
function collectingData1(callback) {
    setTimeout(() => {
        console.log("2 collecting Data...");
        callback();

    }, 5000);


}
function approvingdata1(callback) {
    setTimeout(() => {
        console.log("3 approving data...");
        callback();

    }, 2000);

}
function approved1() {
    console.log("4 approved...");
}


// callback help -> problem created soluting in 10


loadingData1(function () {
    collectingData1(function () {
        approvingdata1(function () {
            approved1();
        });

    });
});