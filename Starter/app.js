// Functional Programming
// Task: Create a new array out of array1 and double each value on it

let array1 = [1, 2, 3];
console.log(array1);

let array2 = [];

for(let i = 0; i < array1.length; i++){
    array2.push(array1[i] * 2);
}

console.log(array2); // [2, 4, 6]

// although the above code performs the task, it can be turned into a function that takes in any function and any array, thus, allowing you more control and flexibility. This is the essence of functional programming. Take the example below

// the function will take in an array and a function
// it will then map through each item in the array, 
// pass those items to the function, which will perform an operation on each item
// the result or output will, then, be pushed into a new array


function mapForEach(array, fn){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(
            fn(array[i])
        );
    };
    return newArray;
}

// now that a function is created, we can pass any function and array
// this gives us more options in that we can create any function on the fly and pass in any array

// For example: The example below takes in array1 and a function that multiplies it by 3
// for the example below, I am using the mapForEach function I created above

let array3 = mapForEach(array1, function(item){
    return item * 3;
});

console.log(array3); // output: [3, 6, 9]

// let's use the same mapForEach function, but pass in a different array and different function

// Task: for each item in the array multiply by either 5 or 10
    // for each item in the array greater than 5, multiply by 10
    // for each item not greater than 5, multiply by 5

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array4 = mapForEach(arr, function(item){
    if(item > 5){
        return item * 10;
    } else {
        return item * 5;
    }
});

console.log(array4); // output:[5, 10, 15, 20, 25, 60, 70, 80, 90, 100]

// as you can see, functional programming allows us to reuse the same code, yet pass it in a variety of different functions and arrays.  

