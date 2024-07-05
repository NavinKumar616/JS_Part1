// dout watch the video once 

let emp = {

};
emp.name = "John";

console.log(Object.getOwnPropertyDescriptor(emp, "name")); // { value: 'John', writable: true, enumerable: true, configurable: true }

Object.defineProperty(emp, "age", {
    value: 22,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(emp); // { name: 'John', age: 22 }

console.log(Object.getOwnPropertyDescriptor(emp, "age")); 

delete emp.age;