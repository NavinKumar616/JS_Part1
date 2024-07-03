// conditional 

// part 1
let age = 1;
if (age >= 18) {
    console.log("you can drive")
}
else {
    console.log("you cannot drive")
}

// part 2

let a = 20;
let name = "navin"

if (a > 18) {
    if (name == "navin") {
        console.log("name is matched")
    }
    else {
        console.log("name is not matched")
    }
}
else {
    console.log("opps!.... below 18")
}

//  part 3
let c = 10;
let d = 20;

if (c > d) {
    console.log("C is greater");
}
else if (c < d) {
    console.log("D is greater");
}
else {
    console.log("Both are Equal");
}

// switch
let ch = 2;
// note here -> if the value of ch matches with any of the case 
// then that case will and below whatever the case is there all are going to print
// if we didn't put the break statement
switch (ch) {
    case 1:
        console.log("I m 1");
        break;
    case 2:
        console.log("I m 2");
        break;
    case 3:
        console.log("I m 3");
        break;
    default:
        console.log("You pressed wrong choice");
        break;
}