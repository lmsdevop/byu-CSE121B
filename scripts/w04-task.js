/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Lucas Mendonça",
    photo: "images/Lucas.jpeg",
    favoriteFood: [
        'Pizza',
        'Hamburger',
        'Lasanha',
        'Hot-Dog',
        'Ice-Cream'
    ],
    hobbies: [
        'Play Piano',
        'Videogames',
        'Hanging out',
        'Cinema',
        'Shopping'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({ place: 'Rio de Janeiro, RJ', length: '28 years' })
myProfile.placesLived.push({ place: 'Ribeirão Preto, SP', length: '2 years' })

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo)
document.querySelector('#photo').setAttribute('alt', `Profile image of ${myProfile.name}`)

/* Favorite Foods List*/

myProfile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
