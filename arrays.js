const steps = ['one', 'two', 'three'];

///steps.forEach(function(item) {
///    console.log(item);
///});

steps. foreach(showStep);

function showStep(item) {
    console.log(item);
};

//.map

let mylist = document.querySelector("#mylist");

const stepshtml = steps.map(listtemplate);

function listtemplate(item) {
    return `<li>${item}</li>`;
};

mylist.innerHTML = stepshtml.join('');

let grades = ['A', 'B', 'C'];
let points;

let gpapoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          
console.log(gpapoints);

//.reduce

let totalPoints = gpapoints.reduce(gettotal);

function gettotal(total, item) {
    return total + item;
}
console.log(totalPoints);

let gpaaverage = totalPoints / gpapoints.length;
console.log(gpaaverage);


//.filter

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
       
const shortwords = words.filter(function(word) {
    return word.length < 6;
});
console.log(shortwords);

//.indexOf

const myArray = [12, 34, 21, 54]
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

//dynamic content

let container = document.querySelector("#studentcontainer");


const students = [
    {
        last: 'Andrus', 
        first: 'Aaron'
    },
    {
        last: 'Masa', 
        first: 'Manny'
    },
    {
        last: 'Tanda', 
        first: 'Tamanda'
    }
];

students.forEach(function(item) {
    let name = document.createElement('div');
    name.className = 'format';

    let html =`
    <span>${item.first} ${item.last}</span>
    `;
    name.innerHTML = html;
    container.appendChild(name);
});