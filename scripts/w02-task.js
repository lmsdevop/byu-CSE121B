/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Lucas Mendonça de Souza";
let currentYear = 2024;
let profilePicture = "images/Lucas.jpeg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const mainElement = document.getElementById('home');
const imageElement = mainElement.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
let favFoods = ["Pizza", "Sushi", "Chocolate", "Burgers"];
foodElement.innerHTML = favFoods;
var newFavoriteFood = "Ice Cream";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;







