//3 VARIABLE
let schoolName = "Northwestern Samar State University";
let semester = "First Semester";
let age = 21;

// 3 Arrays
let Goal = ["cybersecurity", "ethicalHacker", "developer"];
let grades = [90, 98, 84];
let courses = ["ComputerScience", "InformationTechnology", "InformationSystem"];


// 3 Conditional
if (age < 21){
    console.log("You are an adult");
}else{
    console.log("You are minor!")
}

if (courses[0] === "ComputerScience"){
    console.log("You are in the right track of goal");
}

let active = true;
let status =   active ? "Valid" : "Invalid";
console.log(active);

//3 Loops
for(i = 1; i < 5;i++){
    console.log(i);
}

let num = 5;

while(num === 5){
    console.log("Good job!");
    num++;
}

for(let goal of Goal){
    console.log(goal);
}

// 4 Classes
class Student{
    constructor(name, age){
       this.name = name;
       this.age = age;
    }

    message(){
        console.log(`My name  is ${this.name} and I'm ${this.age} years old.`)
    }
}


class Teacher{
    constructor(subject, teacher){
          this.subject = subject;
          this.teacher = teacher; 
    }

    subjectInstructor(){
        console.log(`Sir ${this.teacher} is our instructor in ${this.subject}.`);
    }
}

class School{
    constructor(schoolName, location){
        this.schoolName = schoolName;
        this.location = location;
    }

    info(){
        console.log(`${this.schoolName} is in ${this.location}.`)
    }
}


class favorite{
    constructor(food, sports, workouts){
        this.food = food;
        this.sports = sports;
        this.workouts = workouts;
    }

    //method 1
    habit(){
        console.log(`My favorite food is ${this.food}
            My favorite sports is ${this.sports}
            My favorite workouts ${this.workouts}`)
    }

    //method 2
    num(num1, num2){
        return num1 + num2;
    }

    //method 3
    greetings(){
        console.log(`Welcome to the dieying area!.`)
    }

    //method 4
    subtract(sum1, sum2){
        return sum1 - sum2;
    }

    //method 5
    condition(){
        console.log(`Keep going!`)
    }
}

//2 Inheritance
class wants extends favorite {

    constructor (food, sports, workouts){
        super(food, sports, workouts)
    }
    routine(){
        console.log(`I want a ${this.food} while ${this.workouts} and after that i play ${this.sports}`)
    }

    //1 polymorphism
    habit(){
        console.log(`I love this ${this.food}
            It's feel good when im ${this.workouts}
            I love playing ${this.sports}`)
    }
}

let favperson = new favorite("coffee", "jumping", "boxing");
favperson.habit()
let want = new wants("cake", "basketball", "running");
want.habit();
want.routine();

class operation extends favorite{
    sum(sum1 , sum2){
        return sum1 - sum2;
    }
}

let operations = new operation();
console.log(operations.sum(10 , 5));


// 4 objects
let student1 = new Student ("jimbryce", 22);
let teacher = new Teacher("Programming", "Yuri");
let school = new School("NWSSU", "Calbayog city");
let fav = new favorite("EggPay", "Basketball", "Push up");

//2 Constructors
console.log(student1.name);
console.log(teacher.teacher);

//Output of 5 methods
fav.habit();
fav.greetings();
console.log(fav.num(5, 5));
console.log(fav.subtract(10, 5));
fav.condition();

//2 object literals
let student = {
    name: "jimbryce",
    age: 21,
    school: "NWSSU"
}

console.log(student);

let people = {
    name1: "james",
    name2: "jackson",
    name3: "Bryce",

    method(){
        console.log(`Hello I'm ${this.name3}`);
    }
}

people.method()

// 2 Encapsulation
class tutorial{
    #id;
    #number;

    constructor(id, number){
        this.id = id;
        this.number = number;
    }

    information(){
        console.log(`My id is${this.id}
My number is ${this.number}`)
    }
}

let person = new tutorial("2024-439-1", "09974179933")
person.information();

class Location{
    #address;
    #region;

    constructor(address, region){
        this.address = address;
        this.region = region;
    }

    result(){
        console.log(`Im from ${this.address} region ${this.region}`);
    }
}

let loc = new Location("calbayog city", 8);
loc.result();

//1 Abstraction
class ATM{
    withdrawAmount(amount){
        this.#checkBalance()
        this.#processWithdrawal(amount)
    }

    #checkBalance(){
        console.log(`Checking amount balance here.`);
    }

    #processWithdrawal(amount){
        console.log(`Processing : ${amount} withdrawal.`)
    }
}

let withdraw = new ATM();
withdraw.withdrawAmount(500);



