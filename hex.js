const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// #f15025 (6 times loop in the array, I'll get a random value from array hex, and just add to my hex color variable)
const bth = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor ="#";

    for(let i = 0; i < 6;  i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);

}