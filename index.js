
let randomNumber1 = Math.floor((Math.random()* 6)+1); // Random number from 1 - 6 
let imgLeft = "images/dice"+ randomNumber1+".png" // images/dice1.png - images/dice6.png
document.querySelector("img.img1").setAttribute("src",imgLeft) // setingAttribute of the new value to the image.

let randomNumber2 = Math.floor((Math.random()*6)+1); // Random number from 1 - 6 
let imgRight = "images/dice" + randomNumber2+".png" // images/dice1.png - images/dice6.png
document.querySelector("img.img2").setAttribute("src",imgRight) // setingAttribute of the new value to the image.

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🚩 Player 1 Wins  ' 
}else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = '🚩 Player 2 Wins ' 
}else{
    document.querySelector('h1').innerHTML = '🏳️ Draw 🏳️'
}