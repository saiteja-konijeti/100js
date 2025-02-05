// Lets understand how functions work
function call() {
    //implememtation of function
    console.log("called");
}
// calling function
call();

//Functions are simple reusable code that can make our work simple
//lets understand with simple example
//creating simple call IV calculator

function add(a, b) {
    console.log(a + b);
}
function sub(a, b) {
    console.log(a - b);
}
function mul(a, b) {
    console.log(a * b);
}
function div(a, b) {
    console.log(a / b);
}
add(6, 3);
sub(6, 3);
mul(6, 3);
div(6, 3);
//simply calling the function we can do all arithmatic operations
//Let add some logic to functions
//lets try if else in function

function vote(age, name) {
    if (age > 18) {
        console.log(`${name} can vote`);
    } else {
        console.log(`${name} can't vote`);
    }
}
vote(24, "Aditya");

//lets learn another logic using for loop
//try to find the given number is prime or not

function pri(num) {
    count = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
        if (count <= 2) {
            console.log(`${num}is prime`);
        } else {
            console.log(`${num}is not prime`);
        }
}
pri(3);
