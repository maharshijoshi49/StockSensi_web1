// // console.log("---------Parameterized--------")


// function add() {
//     let X = 10
//     let Y = 20
//     console.log(X + Y)

// }
// add()

// // console.log("---------Non-Parameterized----------")

// function add2(x, y) {
//     console.log(x + y)
// }
// add2(10, 40)

// // // console.log("---------Anonymous Function----------")
// let ad = function() {
//     let x1 = 50
//     let y1 = 81
//     console.log(x1 + y1)

// }
// ad()



// // console.log("---------Arrow Function----------")
// let add4 = () => {
//     console.log(20 + 120)

// }
// add4()

// //  -------------LOOP-----------
// for (let i = 0; i < 5; i++) {
//     x
//     console.log("Number:", i);
// }
// while (true) {
//     prompt("What is your name?")
// }
// let person = {
//     name: "Mann",
//     age: 18,
//     City: "Pune",
//     Salary: 20000
// }
// // console.log(person.Salary)
// user = prompt("Enter your choice:-")
// let youth = ["Mann", 20, "Python", "Pune", 5.9, "Ruler"]
// let youth2 = ["Apurv Bhatt", 20, "Java", "Jaipur", 6.0, "Sports"]
//     // if (user == "youth") {
// console.log(user)
// } else if (user == "youth2") {
//     console.log(yotuh2)
// } else {
//     console.log("Invalid choice")
// }




// let l = prompt("Enter your letter:-")
// l = l.toLowerCase();
// if (l == "a" | l == "e" | l == "i" | l == "o" | l == "u") {
//     console.log(l, "letter is Vowel!")
// } else {
//     console.log(l, "letter is consonet!")

// }
// for (let i = 1; i <= 100; i++) {
//     document.print("Hello world")

// }
// --------------------Loop in js---------------------------


// for loop 
// Syntax:
// python 
// for i in range(start,step,stop)
// loop body


// //js 
//        for (start ; stop ; step ;){
//                    loop Body
//              }

//  While loop 
// Syntax:
// Initialization 
// let i = 0
// termination (condition)
//        while(condition)

// steps(i++i--)
//  }

// wap to print table and input Enter by user:

// let n = prompt("Enter Number:")
// for (let j = 10; j <= 1; j--) {
//     console.log(n, "*", j, "=", n * j)
// }



// let N = prompt("Enter number")
// let i = 1;
// while (i <= 10) {
//     console.log(N * 1);
//     i++;
// }
// loop with conditional statement 
//wap to print only even num range between 1 to 20


// for (let k = 1; k <= 20; k++) {
//     if (k % 2 == 0) {
//         console.log(k)
//     }
// }
// let x = 1;
// while (x <= 20) {
//     if (x % 2 == 0) {
//         console.log(x)
//     }
//     x++
// }

// let n = prompt("Enter Number:")
// for (let j = 10; j >= 1; j--) {
//     console.log(n, "*", j, "=", n * j)
// }



// let N = prompt("Enter number")
// let i = 10;
// while (i >= 1) {
//     console.log(N * 10);
//     i--;
// }
// let N = prompt("Enter number")
// let i = 1;
// while (i <= 10) {
//     console.log(N * 1);
//     i++;
// }

// let x = 20;
// while (x >= 1) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
//     x--;
// }
// for (let k = 20; k >= 1; k--){
//     if (k % 2 == 0) {
//         console.log(k);
//     }
// }



// user = prompt("Enter your choice:-")
// let youth = ["Mann", 20, "Python", "Pune", 5.9, "Ruler"]
// let youth2 = ["Apurv Bhatt", 20, "Java", "Jaipur", 6.0, "Sports"]
// if (user == "youth") {
//     console.log(user)
// } else if (user == "youth2") {
//     console.log(yotuh2)
// } else {
//     console.log("Invalid choice")
// }
// -------- Push method --------------

// youth.push("Fullstack Devlopment")
// console.log(youth)

// -----------Pop Method --------------

// youth.pop()
// console.log(youth)


// -------------- Unshift Method ---------------
// youth.unshift(101)
// console.log(youth)

// ---------------- Shift Method --------------


// youth.shift(101)
// console.log(youth)


// ---------------- Reverse Method ----------


// youth.reverse();
// console.log(youth)

// --------------------- Sort Method --------------------
// youth.sort();
// console.log(youth)



// let youth = ["Mann", 20, "Python", "Pune", 5.9, "Ruler"];
// for (let i = 0; i < youth.length; i++) {
//     console.log(youth[i]);
// }
// let num = [10, 20, 35, 40, 45, 50, 55, 60];
// num.forEach(number => {
//     if (number % 2 === 0) {
//         console.log(number, "Number is even");
//     } else {
//         console.log(number, "Number is odd");
//     }
// })


// let arr = ["Mann Joshi", 18, 20, 30, "Appurv Bhatt"]
// let arr2 = arr.slice(1, );
// console.log(arr2);
// console.log(arr);

// arr.slice(1, 5)
// console.log(arr)
// arr.splice(2, 1, "Janak", "Kirtan")
// console.log(arr)
// arr.splice(1, 1)
// console.log(arr)
// let x = [1, 2, 3]
// x[10] = "hi"
// console.log(x)


// let arra = {
//     name: "alice",
//     address: {
//         street: 'Main Street',
//         City: "Los angeles",
//         Postalcode: 90001
//     }

// };
// console.log(arra.address.City);

// let workers = [{
//         name: "Alice",
//         address: {
//             street: "Main Street",
//             city: "Los Angeles",
//             postalCode: 299201
//         }
//     },
//     {
//         name: "Paul",
//         address: {
//             street: "North Of Street",
//             city: "San Francisco",
//             postalCode: 300213
//         }
//     },
//     {
//         name: "John",
//         address: {
//             street: "Middle of Street",
//             city: "Los Santos",
//             postalCode: 900012
//         }
//     },
//     {
//         name: "Aurturo",
//         address: {
//             street: "Middle of Street",
//             city: "Spain",
//             postalCode: 2323445
//         }

//     },
//     {
//         name: "Denver",
//         address: {
//             street: "Spain Bank of Espanazo",
//             city: "Spain",
//             postalCode: 9382902
//         }

//     },


// ];

// console.log(workers[4]);














// let fruit = ["Apple", "Banana", "Grapes", "Orange", "Strawberry"]
// let fruits = fruit
// console.log(fruits)
// fruit.splice(6, 0, "Mango")
// console.log(fruits)
// console.log(fru.its.includes("Banana"));
// let workers = {
//     "101": {
//         name: "Akash",
//         address: "MG Road",
//         city: "Delhi",
//         phone: "9876543210"
//     },
//     "102": {
//         name: "Mayur",
//         address: "Linking Road",
//         city: "Mumbai",
//         phone: "9812345678"
//     },
//     "103": {
//         name: "Gaurav",
//         address: "Kharadi",
//         city: "Pune",
//         phone: "6377685806"
//     },
//     "104": {
//         name: "Heril",
//         address: "Ahmedabad",
//         city: "Gujarat",
//         phone: "9950423601"
//     },
//     "105": {
//         name: "Appurv",
//         address: "Motera",
//         city: "Gujarat",
//         phone: "8107484446"
//     }
// };

// function handleWorkerInput() {
//     let workID = prompt("Enter Worker ID (e.g., 101) or type 'all' to show all workers:").trim().toLowerCase();

//     // agar user 'all' likhe
//     if (workID === "all") {
//         console.log("📋 List of all workers:");
//         for (let key in workers) {
//             console.log(`\nWorker ID: ${key}`);
//             console.log(workers[key]);
//         }
//     }

//     // agar valid ID hai
//     else if (workers[workID]) {
//         console.log("✅ Worker found! Details below:");
//         console.log(workers[workID]);
//     }

//     // agar galat ID hai
//     else {
//         console.log("❌ Invalid Worker ID!");
//     }
// }

// handleWorkerInput();






// let parent = document.getElementsByClassName("parent")
// console.dir(parent)
// let child = document.getElementsByClassName("child")
// console.dir(child)

// let child = document.querySelectorAll(".child")
// console.log(child)


// let parent = document.querySelector(".parent");
// console.dir(parent.childNodes);
// let parent = document.querySelector(".parent");
// console.dir(parent.innerHTML);