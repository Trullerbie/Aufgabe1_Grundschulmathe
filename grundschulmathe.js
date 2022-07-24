//Aufgabe a
alert("Grundschulmathe");
alert("Erstes Level: Addition!")

//globale Variablen
var punkte = 0;
//-------------- Ablauf --------------
levelAddition();

//------------------------------Level 1 Addition -------------------------
function levelAddition(){
    for(var i = 1; i <= 5; i++){

        var a = Math.floor(Math.random()*20)+1;
        var b = Math.floor(Math.random()*20)+1;
        let result = prompt(`Wieviel ist ${a} + ${b}?`);

        //Umwandlung in ganze Zahl
        result = parseInt(result, 10)
        if(result === a + b){
            punkte++;
            alert("Richtig, deine Punktezahl: "+punkte);
        }
        else{
            alert("Falsch, deine Punktezahl: "+punkte);
        }

    }
    if (punkte>=4)
{
    levelSubtraktion();
}
else{
    alert("Versuchs nochmal!")
}
}

//----------------------------- Level 2 Subtraktion-------------------------------
function levelSubtraktion(){
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
}}