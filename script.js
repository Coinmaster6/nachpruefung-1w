import { read, print, exercise } from "./utils.js"

// Um eine neue Aufgabe zu erstellen, kopieren Sie einfach
// die Zeilen bis zum nächsten Abschnitt, ein Button wird 
// automatisch erstellt.
// Ändern Sie "Beispiel" zu "Aufgabe #" und ändern Sie den
// Code in der Funktion so dass das gewünschte Resultat 
// herauskommt.
exercise("Beispiel", function() {
  let input = read()
  if (input.length > 0) {
    print(input)
  }
})


//Wenn die EIngabe ein Leerzeichen hat, soll es das Leerzeichen löschen,
// wenn es keins hat, dann soll es diesen Text ausgeben.
function Aufgabe_b() {
  let input = read()
  if (input = "") {
    delete "";
    print(input) 
  } else {
    print("Es gibt keine Leerzeichen")
  }
}

function Aufgabe_c() {
  let num = parseInt(read())

  if (num < 50) {
    print("kleiner")
  } else if (num > 50) {
    print("grösser")
  } else {
    print("richtig")
  }

}
//Soll alle Zaheln von 1-5000 ausgeben.
function Aufgabe_d() {
  numbers = [1,2,3,4,5,6,7,8,9,10]

  for (let i = 0; i < 5000; 1++) {
    print(numbers[i])
  }
  //Wenn die Numer durch 7 teilbar ist, soll sie zu einer Liste gemacht werden
  //und dann durch ein "#" ersetzt werden. Nachdem wird es wieder als Zeichenkette
  //angegeben und zum Schluss werden alle Zahlen, die durch "#" ersetzt wurden
  //zusammengerechnet und dann ausgegeben.
  if(i = numbers/7) {
let numbersList = numbers.split("")
numbersList = ("#")
numbers = numbersList.join("")
print(Sum.numbersList)
  }
}



exercise("Aufgabe 2", function() {
  // Aufgabe 2 (b)
  // Das was man bei der Eingabe eingibt, soll gelesen werden und dann von einer Zeichenkette zu einer Liste transformiert werden. Für das benutzt man das "Split".
  let input = read().split("")

  // Aufgabe 2 (c)
  // Das ist eine neue, leere Liste. Hier werden die neue Zeichen angehängt.
  let res = []

  // Aufgabe 2 (d)
  // Das ist nun eine Schleife. Der erste Teil ist die Initialisierung, sie zeigt mit welcher Variable man arbeitet und wo diese beginnt. 
  //Der zweite Teil ist die Abbruchbedingung. Sie zeigt, dass diese Schleife so lange weitergeht, bis diese Bedingung erreicht wurde.
  //Der letzte Teil ist der Nachdurchlauf. Er zeigt, wie man mit der Variable arbeitet und was nach jedem Durchlauf mit ihr passiert.
  for (let i = 0; i < input.length; i++) {

    // Aufgabe 2 (e)
    // Das was man als i bekommen hat soll nun beim UpperCase angehängt werden.  
    res.push(input[i].toUpperCase())
  }

  // Aufgabe 2 (f)
  // Nun formiert man wieder die Liste mit der Funktion "join" zu einer Zeichenkette. Ausserdem wird diese dann so ausgegeben.
  print(res.join(""))
})