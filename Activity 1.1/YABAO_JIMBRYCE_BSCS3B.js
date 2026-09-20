// 3 variables
let StudentName = "jimbryce";
let age = 22;
let course  = "Computer Science";

// 3 arrays
let subject = ["javascript", "Python","PHP"];
let grades = [87, 95, 89];
let hobbies = ["Coding", "EthicalHacking","Reading"];

// CONDITIONAL 1
if (age >= 18) {
    console.log(`${StudentName} is a adult.`);
} else {
    console.log(`${StudentName} is a minor.`);
}


//CONDITIONAL 2
for(i = 0; i < age; i++){
    console.log(`Good job ${hobbies[1]}`);
}

//CONDITIONAL 3
let gap = 21;

while (gap < age){
    console.log(`Your age is ${age}`)
    ++gap;
}


// FINAL OUTPUT
console.log("Student Name: " + StudentName);
console.log("Age: " + age);
console.log("Course: " + course);