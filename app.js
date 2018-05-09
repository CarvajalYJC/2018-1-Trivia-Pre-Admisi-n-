
// Contador de puntaje.
var score = 0;
// Preguntar el nombre.
var name = prompt ("¡Bienvenida! ¿Cuál es tu nombre?");
// Declarar variable de respuesta. si/no
var triviaAnswer = [
  "si",
  "no"
];
// Ingresar pregunta, si es identico a 0: "¡Perfecto, iniciemos!
var game = prompt("¡Bienvenida! ¿Quieres jugar? (Si/No)");
  game= game.toLowerCase();
  if (triviaAnswer.indexOf(game) === 0 ){
    alert("¡Perfecto, iniciemos!");
document.getElementById("player").innerHTML = "Queremos decirte cuáles son tus resultados " + name;
// Pregunta número 1
var oneQuestion = prompt("¿En qué año nació Laboratoria?");
if (oneQuestion ==="2014"){
    alert("¡Correcto!");
    score++;
}
else {
    alert("¡Incorrecto! \n \n La respuesta es: 2014");
}
// Pregunta número 2
var twoQuestion = prompt("¿Quién fue la creadora de Laboratoria?");
  questions= twoQuestion.toLowerCase();
if (questions ==="mariana costa"){
    alert("¡Correcto!");
    score++;
}
else {
    alert("¡Incorrecto! \n \n La respuesta es: Mariana Costa");
}
// Pregunta número 3
var threeQuestion = prompt("¿Es la pre-admisión el último paso para formar parte del bootcamp?");
  threeQuestion= threeQuestion.toLowerCase();
if (threeQuestion ==="si"){
    alert("¡Correcto!");
    score++;
}
else {
    alert("¡Incorrecto! \n \n La respuesta es: Sí");
}
// Pregunta número 4
var fourQuestion = prompt("¿Cuántos meses dura el bootcamp?");
if (fourQuestion ==="6"){
    alert("¡Correcto!");
    score++;
}
else {
    alert("¡Incorrecto! \n \n La respuesta es: 6");
}
// Pregunta número 5
var fiveQuestion = prompt("¿Cuál es el lenguaje que aprenderás durante el bootcamp?")
  fiveQuestion= fiveQuestion.toLowerCase();
if (fiveQuestion ==="javascript"){
    alert("¡Correcto!");
    score++
}
else {
    alert("¡Incorrecto!  \n \n La respuesta es: Javascript");
}
// Cierra "¿Deseas Jugar?"
} else {
    alert("¡Nooooooooooo! =( ¡Vuelve pronto!");
}
// Si la persona juega.
console.log(score);
if(triviaAnswer.indexOf(game) ===0) {
    document.getElementById("result") .innerHTML = "Haz acertado en " + score + " preguntas de 5.";
    }
    else {
        document.getElementById("notresult") .innerHTML = "APRENDE A PROGRAMAR  Y TRANSFORMA TU FUTURO";
}
