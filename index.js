console.log("Welcome to our snake water game");
console.log("1. S: snake 2. W: water 3. G: gun");
let user = prompt("Choose any of one : ")
let CPU1 = Math.floor(Math.random()* 3);
let CPU = ['S', 'G', 'W'][CPU1];

const match = (CPU, user) =>{
  
if(CPU === user){
  return "Nobody wins";
}
else if (CPU === 'S' && user === 'W'){
  return "You loose";
}
else if (CPU === 'S' && user === 'G') {
  return "you win";
}
else if (CPU === 'G' && user === 'S') {
  return "you loose";
}
else if (CPU === 'G' && user === 'W') {
  return "you win";
}
else if (CPU === 'W' && user === 'S') {
  return "you win"
}
else if (CPU === 'W' && user === 'G') {
  return "you loose"
}
else{
  return "better luck next time";
}
}

let result = match(CPU, user);
console.log(CPU, user, result);
