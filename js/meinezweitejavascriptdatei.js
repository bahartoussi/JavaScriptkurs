"use strict"

let zahl1=1;
zahl1=2;
let zahl2;
{
    let innerzahl1=2;
    zahl1=10;
    const PI=3.14;
    console.log(" Die Konstante PI ist "+PI);
    var globalinnervar=3;
    {
        let innerinnerzahl1=100;
        {
            console.log("Die Zahl innerinnerzahl1 "+innerinnerzahl1);
        }
        console.log("innerzahl1 "+innerzahl1);
    }
    console.log(innerinnerzahl1);

    
}
console.log("Die zahl1 ist "+zahl1);
console.log("Die globale Variable innervar "+globalinnervar);
console.log("zahl2 "+zahl2)
innerzahl1=4;
console.log("Die innerzahl1  ist "+innerzahl1);
console.log("aus der zweiten datei");
let vorname=10;
vorname="Bahareh";
