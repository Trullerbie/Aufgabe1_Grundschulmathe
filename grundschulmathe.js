//Aufgabe a
alert("Grundschulmathe");

//Aufgabe b
//Zwei Zufallszahlen generieren
const a = Math.floor(Math.random()*20)+1
const b = Math.floor(Math.random()*20)+1

//Rechnung abfragen
let result = prompt(`Wieviel ist ${a} + ${b}?`)
console.log(result)

result = parseInt(result, 10)

//Rechnung überprüfen
if(result === a + b){
    alert("Richtig");
}
else{
    alert("Falsch");
}