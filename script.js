let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
console.log(arr1);
console.log(...arr2);

///////////////////
let arr3 = [arr1, 11, 12];
console.log(arr3);

//////////////////
let arr4 = [...arr1, 11, 12, ...arr2];
console.log(arr4);

////////////////
let x = "JAVASCRIPT"
console.log(x);
console.log(...x);


/////////////////
function add(a, b, c, d) {
    console.log(a + b + c + d);
}
// add(arr1[1], arr1[2]);
add(...arr1);// it will take firs 2 elements if we need two arguments only 
add(...arr1);
