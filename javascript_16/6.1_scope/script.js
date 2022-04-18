//block 1
function funcA(){
    console.log(a);// => undefined, we can't access var (a) before we declare it
    console.log(foo()); // => 2, we can call function foo() because it is the function scope

    var a = 1;
    function foo(){
        return 2;
    }
}
funcA()


//block 2 
var fullName = 'John Doe'
var obj = {
    fullName: "Colin Ihrig",
    prop:{
        fullName: 'Aurelio De Rosa',
        getFullName: function(){
            return this.fullName;
        }
    }
}

console.log(obj.prop.getFullName()) // => "Aurelio De Rosa", because "this" will return value from the object itself
var test = obj.prop.fullName // => "Aurelio De Rosa", the value of key fullName is "Aurelio De Rosa" and it is in the global scope
console.log(test)


//block 3
function funcB(){
    let a = b = 0;
    a++;
    return a;
}
funcB()
console.log(typeof a) //undefined => (a) in function scope so we cant acess it from outside the function 
console.log(typeof b); //number => becuase we did assign (b) to value and we have not deculare it so it become automatically global 


//block 4
function funcC(){
    console.log("1")
}
funcC() // 2 => the second funcC() did rewrite the first funcC() 
function funcC(){
    console.log("2")
}
funcC() // 2 =>  the second funcC() did rewrite the first funcC() 



//block 5
function funcD1(){
    d = 1;
}
funcD1();
console.log(d); //1 => becuase we did assign (d) to value and we have not deculare it so it become automatically global 

function funcD2(){
    var e = 1;
}
funcD2()
console.log(e); // e is not defined error => (e) is function scope we cant access it from outside, if we remove the "var" it will become automatically global


//block 6
function funcE(){
    console.log("value of f in local scope: ", f) // 1 => the function have been called after (f) was declared
}
console.log("value of f in global scope: ", f) // undefine ==> we have not declare varable (f) yet
var f = 1;
funcE()