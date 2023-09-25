const buch1={
	name:"Harry Potter",
	author:"J.K.Rolling",
	hauptfiguren:["Harry","Ron","Hermione"],
	kategorie:"Fantasie"
};
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
for(let i=0;i<bibliothek.length; i++)
	//console.log(bibliothek[i].name);
	bibliothek[i].kategorie="krimie";
for(let i=0;i<bibliothek.length; i++)
	console.log(bibliothek[i].kategorie);
	
	//document.write(bibliothek[i].name);