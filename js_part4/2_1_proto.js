// dout

// watch video once 
let obj1 = {
    fname: "john"
};

let obj2 = {
    lNmae: "Smith"
};
// dout
obj2.__proto__ = obj1;

console.log(obj2.fname); // john
console.log(obj2); // { lNmae: 'Smith' } // dout