// Displaying number from 1 to 100
let num = 100, n;
let count=0;
let i,j;
console.log('Displaying number from 1 to 100');

for (number = 1; number <= num; number++) {
    console.log(number);    
}

// Displaying even numbers from 1 to 100
console.log('Displaying even number from 1 to 100');
for(i =1; i<=num; i++)
{
    if(i % 2 == 0){
        console.log(i);
    } 
}

// Displaying odd numbers from 1 to 100
console.log('Displaying odd numbers from 1 to 100');
for(n=1; n<=num; n++){
    if( n % 2 == 1){
        console.log(n);
    } 
}

// Prime numbers
 console.log('Displaying prime number from 1 to 100');
 for(i=1; i<=100;i++){
    for(j=2; j<i; j++){
        if(i%j == 0)
        break;
    }
    if(i==j)
    console.log(`${i} is a prime number`);
 }   
// Getting inputs from user and displaying 
// let start = prompt('Hello, Enter the starting range');
// let end = prompt('Enter the ending range');
// console.log(`starting range:- ${start}`);
// console.log(`Ending range:- ${end}`);
// if(start && end != null){
//     console.log('values are collected from user');
//     for (i = start; start <= end; start++) {
//         console.log(start);   
//     }
// } else{
//     console.log('Values are null');
// }

//Random Color Generator
const char = '0A1B2C3D45E67F89';
    let randomColor = "#";
    for (let index = 1; index <= 6; index++) {
    const randColor = Math.floor(Math.random() * char.length);
    randomColor += char.charAt(randColor);
    console.log(randomColor);
    }

// adding para text using DOM
// window.onload = () =>{
//     const subHeading = document.createElement("p");
//     subHeading.innerText = "Let's understand the purpose of DOM and JS";
//     document.body.appendChild(subHeading);
// }

// window.onclick = () =>{
// const button = document.getElementById("start-button");
// button.addEventListener('click', function(){
//     alert('Welcome');
// });
// }


const genRandomColor = () => {
    const char = '0A1B2C3D45E67F89';
    let randomColor = "#";
    for (let index = 1; index <= 6; index++) {
    const randColor = Math.floor(Math.random() * char.length);
    randomColor += char.charAt(randColor);
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    const colorCode = document.querySelector("h2");
    colorCode.innerHTML = `Your Color Code is ${randomColor}`;
    }
}

const generateBtn =  document.querySelector("button");
generateBtn.addEventListener('click', genRandomColor);






