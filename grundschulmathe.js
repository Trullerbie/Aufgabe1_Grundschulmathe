alert("Grundschulmathe");

//globale Variablen
var punkte = 0;
//-------------- Ablauf --------------
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function createAdditionQuestion(a, b){
    var aufgabe = {
        zahl1: a,
        zahl2: b,
        frage: `Wieviel ist ${zahl1} + ${zahl2} ?`
    }
    
    return aufgabe; 
}

function createSubstractionQuestion(a, b){
    var zahl1, zahl2;
    if(a > b){
        zahl1 = a;
        zahl2 = b;
    }
    else{
        zahl1 = b;
        zahl2 = a;
    }
    var aufgabe = {
        zahl1,
        zahl2,
        frage: `Wieviel ist ${zahl1} - ${zahl2} ?`
    }
    
    return aufgabe; 
}

function createMultiplicationQuestion(a, b){
    var aufgabe = {
        zahl1: a,
        zahl2: b,
        frage: `Wieviel ist ${zahl1} * ${zahl2}?`
    }
    
    return aufgabe;

}

function createDivisionQuestion(a, b){
    var aufgabe = {
        zahl1: a,
        zahl2: b,
        frage: `Wie viel ist ${zahl1 * zahl2} : ${zahl1}?`
    }

    return aufgabe;
}


levelStart(add, createAdditionQuestion);

//------------------------------Level 1 Addition -------------------------
function levelStart(fn, question) {
  for (var i = 1; i <= 5; i++) {
    var a = Math.floor(Math.random() * 20) + 1;
    var b = Math.floor(Math.random() * 20) + 1;
    var quest = question(a, b)
    let result = prompt(quest.frage);
    console.log(result);

    //Umwandlung in ganze Zahl
    result = parseInt(result, 10);
    if (result === fn(quest.zahl1, quest.zahl2)) {
      punkte++;
      alert("Richtig, deine Punktezahl: " + punkte);
    } else {
      alert("Falsch, deine Punktezahl: " + punkte);
    }
  }
  if (punkte >= 16){
    alert("Du hast es geschafft!");
  }
  else if(punkte >= 12){
    levelStart(div, createDivisionQuestion);
  }
  else if(punkte >= 8){
    levelStart(mul, createMultiplicationQuestion);
  } 
  else if(punkte >= 4) {
    levelStart(sub, createSubstractionQuestion);
  }  
  else {
    alert("Versuchs nochmal!");
  }
}

//Vergangener Versuch
//----------------------------- Level 2 Subtraktion-------------------------------
/*function levelSubtraktion(){
        alert("Naechstes Level: Subtraktion!")

        for(var i = 1; i <= 5; i++){
        var a = Math.floor(Math.random()*20)+1;
        var b = Math.floor(Math.random()*20)+1;
        
        //Große Zahl nach vorn, damit kein negatives Ergebnis entsteht
        if(a >= b){
            let result = prompt(`Wieviel ist ${a} - ${b}?`);
            result = parseInt(result, 10);
            //Ergebnisüberprüfung
                if(result === a - b){
                punkte++;
                alert("Richtig, deine Punktezahl: "+punkte);
                }
                else{
                alert("Falsch, deine Punktezahl: "+punkte);
                }
            }
        
        else{
            let result = prompt(`Wie viel ist ${b} - ${a}`);
            result = parseInt(result, 10);
            //Ergebnisüberprüfung
                if(result === b - a){
                punkte++;
                alert("Richtig, deine Punktezahl: "+punkte);
                }
                else{
                alert("Falsch, deine Punktezahl: "+punkte);
                }
        }
    }
    if (punkte>=8)
{
    levelMultiplikation();
}
else{
    alert("Versuchs nochmal!")
}
}

//----------------------------- Level 3 Multiplikation-------------------------------
function levelMultiplikation(){
    alert("Naechstes Level: Multiplikation!")
    for(var i = 1; i <= 5; i++){

        var a = Math.floor(Math.random()*20)+1;
        var b = Math.floor(Math.random()*20)+1;
        let result = prompt(`Wieviel ist ${a} * ${b}?`);
        result = parseInt(result, 10)
        if(result === a * b){
            punkte++;
            alert("Richtig, deine Punktezahl: "+punkte);
        }
        else{
            alert("Falsch, deine Punktezahl: "+punkte);
        }

    }
    if (punkte>=8)
{
    levelDivision();
}
else{
    alert("Versuchs nochmal!");
}
}

//----------------------------- Level 4 Division-------------------------------
function levelDivision(){
    alert("Naechstes Level: Division!");
    for(var i = 1; i <= 5; i++){
        var a = Math.floor(Math.random()*20)+1;
        var b = Math.floor(Math.random()*20)+1;
        let result = prompt(`Wie viel ist ${a*b} : ${a}?`);
        result = parseInt(result, 10);
        if(result === (a*b)/a){
            punkte++;
            alert("Richtig, deine Punktzahl: "+punkte+". Du hast es geschafft.");
        }
        else{
            alert("Falsch, deine Punktzahl: "+punkte);
        }
}}*/