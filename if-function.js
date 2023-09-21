
//make function depend on condition/////////////////////
/*
let i=parseInt(prompt('i'));//it is not working right////////////////////////////////
let j=parseInt(prompt('j'));
let fun=prompt('which operation do you want to execut?');

switch(fun){
case "add":function operation(zahl1,zahl2){return zahl1+zahl2;} 
case 'sub':function operation(zahl1,zahl2){return zahl1-zahl2;} 
case 'mul':function operation(zahl1,zahl2){return zahl1*zahl2;} 
case 'div':function operation(zahl1,zahl2){return zahl1/zahl2;} 
}
//let i=parseInt(prompt('i'));
//let j=parseInt(prompt('j'));
console.log(operation(i,j));
*/
let foo =prompt('number');
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1