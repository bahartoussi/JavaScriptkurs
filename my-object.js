// Möglichkeiten der Objektdeklaration von 25.9.2023
function message(name){
    document.write(`hallo ${name}`);
}
const buch1={
	name:"Harry Potter",
	author:"J.K.Rolling",
	hauptfiguren:["Harry","Ron","Hermione"],
	kategorie:"Fantasie",
    message: function (name){
        document.write(`hallo ${name}`)
    },
    get fetchName() {
        return this.name;
    },
    set updateName(name){
        this.name=name;
    },
    getName: function(){
        return this.name; // Aufrufer dann das buch1 objekt 
    },
    getAuthor: ()=>{
        return this.author; // Aufrufer ist das window objekt bei einer lambda function
    }

};
buch1.message("bahareh");
console.log("Name is "+buch1.fetchName);
buch1.updateName="Bahareh";
console.log("Name is "+buch1.fetchName);
console.log(buch1.getName());
console.log("Author von buch1 "+buch1.getAuthor());
const buch2={
	name:"Inkheart",
	author:"Cornelia Funke",
	hauptfiguren:["Meggie","Moltimer","Dustfinger"],
	kategorie:"fantasie"
};
const buch3={
	name:"Inkspell",
	author:"Cornelia Funke",
	hauptfiguren:["Meggie","Moltimer","Dustfinger"],
	kategorie:"fantasie"
};
const buch4={
	name:"Inkdeath",
	author:"Cornelia Funke",
	hauptfiguren:["Meggie","Moltimer","Dustfinger"],
	kategorie:"fantasie"
};
let bibliothek=[buch1,buch2,buch3,buch4];
for(let i=0;i<bibliothek.length; i++) {
	document.write(bibliothek[i].name,'<br/>');
    bibliothek[i].verlag="Herdt"+(i+1);
}
    //console.log(bibliothek[i].name);
	/*bibliothek[i].kategorie="krimie";
for(let i=0;i<bibliothek.length; i++)
	console.log(bibliothek[i].kategorie);
	
	//document.write(bibliothek[i].name);*/
    console.log("Speicheradresse von buch1 "+buch1)
    buch1.author="Bahareh";
    console.log("Speicheradresse von buch1 "+buch1)
    buch1.verlag="Herdt";
    console.log("Verlag von buch3 ist "+ buch3.verlag);
    delete buch1.verlag;
    console.log("Verlag von buch1 ist "+ buch1.verlag);
    buch1.getName=function(){

    }

    const buch5={
        name:"",
        author:"hermine nachname",
        preis:0,

    };
    // Konstruktorfunktion , dann mit "new Buch(name,....)"" ausführen, nur bei einer Konstruktorfunktion machen 
    function Buch (name, author, hauptfiguren,kategorie, preis,year) {
       /* if(typeof(name)!="string " || typeof(author)!="string" || typeof(hauptfiguren)!="object" || typeof(kategorie)!="string" || typeof(preis)!="number"){
          console.log("Bla bla Fehler bei der Datentypenübergabe");
        }*/
        if(!name instanceof String || author instanceof String || hauptfiguren instanceof Array || kategorie instanceof String  || preis instanceof Number){
            console.log("Bla bla Fehler bei der Datentypenübergabe mit instanceof");
        }
        this.name=name;
        this.author=author;
        this.hauptfiguren=hauptfiguren;
        this.kategorie=kategorie;
        this.preis=preis;
        this.getAuthor=function(){
            return this.author;
        }
        
        

    }
    let buch6=new Buch("Harry Potter", "J.K Rolling",["Harry", "Ron", "Hermine"]);
    buch6.year=2023;
    console.log("buch6.kategorie "+buch6.kategorie)
    let buch7=new Buch("Harry Potter", "J.K Rolling",["Harry", "Ron", "Hermine"], "Fantasie", 70);
    let buch8=new Buch("","", "", "", 100);
    Buch.prototype.setVerlag= function(verlag){
        this.verlag=verlag;
    };
    Buch.prototype.getVerlag=function(){
        return this.verlag;
    }
    buch8.setVerlag("herdt");
    console.log(buch8.getVerlag());
    buch8.getAuthor();
    Buch.prototype.year=2023;
    console.log("buch7.year "+buch7.year);
    console.log(buch6);
    //buch5 kann man nicht neue Objektvariablen zuweisen , da buch5 const ist.
    //buch5=buch6;
    let tempbuch= buch8;
    buch8= buch5;
    console.log("buch8 ist jetzt "+buch8.author)
    // delete für die Property des Objekts
    //delete buch8;
    
    buch8=undefined;
    buch8=null;
    console.log("buch8 "+buch8);
    if(buch8== null){
        console.log("buch8 is null")
    }
    else{
        console.log(buch8.author);
    }
    let buch9=new Buch("","", [], "", 100);
    buch9="Buch9";
    if(buch9 instanceof Buch){
        console.log("Du hast ein Buchobjekt erstellt, Gut so!!")
    }
    else {
        console.log("Bitte ein Buchobjekt übergeben");
    }
    let name=prompt("Bitte übergebe den Namen des Buches");
    let author=prompt("Bitte übergebe den Author des Buches");
    let hauptfiguren=prompt("Bitte übergebe die Figuren des Buches. Gib nach jeder Figur ein Komma ein");
    let hauptfigurenarray=hauptfiguren.split(",");
    let kategorie=prompt("Bitte übergib die Kategorie des Buches");
    let preis=parseInt(prompt("Bitte übergib die Kategorie des Buches"));
    let year=parseInt(prompt("Bitte übergib das Jahr des Buches"));
    let buch10=new Buch(name,author,hauptfigurenarray, kategorie, preis, year);
    console.log("buch10 "+buch10);
    for (let eigenschaft in buch10){
        
        console.log(`Der Inhalt der Eigenschaft ${eigenschaft}  ist ${buch10[eigenschaft]}`);
        // buch10["author"] ist dasselbe wie buch10.author
    }

    




