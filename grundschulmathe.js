//Aufgabe a
alert("Grundschulmathe");

//Aufgabe c
var wiederholung = "";
var punkte = 0;

    //Schleife für 5 Durchgänge
for (var i = 1; i <= 5; i++) {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;

  var result = prompt(`Wieviel ist ${a} + ${b}?`);
  result = parseInt(result, 10);

    //Überprüfung des Ergebnisses und anzeigen der Punktzahl
  if (result === a + b) {
    punkte++;
    alert("Richtig, deine Punktezahl: " + punkte);
  } else {
    alert("Falsch, deine Punktezahl: " + punkte);
  }

  wiederholung++;
}
