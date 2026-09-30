// 10 let variables
let recipeName = "Chicken Adobo";
let category = "Lunch";
let cookingTime = 45;
let servings = 4;
let difficulty = "Easy";
let rating = 4.8;
let calories = 350;
let ingredientsCount = 7;
let isFavorite = false;
let searchText = "chicken";

//10 const variable
const appName = "Recipe Finder";
const developer = "Bryce";
const country = "Philippines";
const currency = "PHP";
const maxRecipes = 100;
const breakfast = "Breakfast";
const lunch = "Lunch";
const dinner = "Dinner";
const dessert = "Dessert";
const drinks = "Drinks";

// 5 arrow function
let app = () => {
    console.log(developer);
}
app();

let dev = (experience) => {
    console.log(`I have ${experience} years in tech industry.`);
}
console.log(dev(5));

let cal = (num1, num2) => {
    return num1 + num2;
 }
console.log(cal(5, 4));

let serve = (servings) =>{
    return servings * 3;
}
console.log(serve(3));

let name = (Studentname) =>{
    console.log(`My name is ${Studentname}`);
}

//10 template literals
console.log(`Hello`);
console.log(`World`);
console.log(`keep going`);
console.log(`Don't quit`);
console.log(`Im ${developer}`);
console.log(`My dinner is ${dinner}`);
console.log(`I want ot drink ${drinks}`);
console.log(`I want to ear ${dessert}`);
console.log(`What is your name ${appName}`);
console.log(`Do you want to keep going`);

//3 destructive arrays
let arr = ["Hacker", "Cybersecurity", "Developer"];
let recipe = ["carrots", "garlic", "Onion"];
let weather = ["rainy", "sunny", "snow"];

let [goal1, goal2, goal3] = arr;
let [ingredient1, ingredient2, ingredient3] = recipe;
let [climate1, climate2, climate3] = weather;

console.log(goal1);
console.log(ingredient1);
console.log(climate1);

//3 destructive object literals
let object = {
    tools: "laptop",
    StudentName: "bryce",
    phone: "iphone"
};

const food = {
    Sname: "Pizza",
    price: 250,
    Category: "Dinner"
};

const Developer = {
    username: "Bryce",
    language: "JavaScript",
    level: "Beginner"
};

let {tools, StudentName, phone} = object;
let {Sname, price, Category} = food;
let {username, language, level} = Developer;

//2 Arrays using spread arrays
let items = ["fan", "tv", "spoon"];
let Food = ["mango", "grapes", "chocolate"];

let result = [...items, ...Food];
console.log(result);

//2 object literals using spread operator
let Items = {
    brand: "sniper",
    price: 2000,
    location: "region 8"
}

let pasts = {
    ...Items,
    lower: "Shock",
    type: "mugs"
}

console.log(pasts);

//2 arrays using map()
const grades = [80, 85, 90, 95, 100];

const increasedGrades = grades.map((grade) => grade + 5);

console.log(`Original Grades: ${grades}`);
console.log(`Increased Grades: ${increasedGrades}`);


const names = ["Jim", "Bryce", "John", "Mark"];

const upperCaseNames = names.map((name) => name.toUpperCase());

console.log(`Original Names: ${names}`);
console.log(`Uppercase Names: ${upperCaseNames}`);


// 2 ARRAYS USING .FILTER()

const highGrades = grades.filter((grade) => grade >= 90);

console.log(`High Grades: ${highGrades}`);


const passedGrades = grades.filter((grade) => grade >= passingGrade);

console.log(`Passed Grades: ${passedGrades}`);


// 2 OBJECT LITERALS USING OPTIONAL CHAINING

const studentProfile = {
    personal: {
        name: "Jim Bryce",
        age: 22
    },
    academic: {
        course: "Computer Science",
        school: "NWSSU"
    }
};

const profileResult = {
    name: studentProfile?.personal?.name,
    age: studentProfile?.personal?.age,
    course: studentProfile?.academic?.course
};

console.log(`Profile Name: ${profileResult.name}`);
console.log(`Profile Age: ${profileResult.age}`);
console.log(`Profile Course: ${profileResult.course}`);


const contact = {
    information: {
        email: "jimbryce@example.com",
        phone: "09123456789"
    }
};

const contactResult = {
    email: contact?.information?.email,
    phone: contact?.information?.phone
};

console.log(`Email: ${contactResult.email}`);
console.log(`Phone: ${contactResult.phone}`);

