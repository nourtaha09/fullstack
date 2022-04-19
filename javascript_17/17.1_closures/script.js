//Block 1
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
      return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); //5 => var firstResult is the function "otherFunction" that "SomeFunction" returned it, "otherFunction" return b, and value of b is 5, 
                            // we pass the arguments without using theme



//Block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a); //1 => we call the function b2 wich assigned  a(the function "a" inside the function b2 to 10) so our var a = 1 in the global scope is not effected 



//Blcok 3
let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100); //3 (thee times) // the function log takes i from the global scope
}


