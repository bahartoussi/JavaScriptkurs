function Land(name,hauptstadt,kontinet,bevolkerung){
	this.name=name;
	this.hauptstadt=hauptstadt;
	this.kontinet=kontinet;
	this.bevolkerung=bevolkerung;
	this.andernBevolk=function(anzahl){
		this.bevolkerung=anzahl;
	}
	
}
let land1=new Land('Austria','Vienna','europa','9m');
console.log(land1);
land1.andernBevolk('10m');
console.log(land1);
Land.prototype.president='alexander fan dev bellen';

function Bilder(name,material,size,price,available){
	this.name=name,
	this.material=material,
	this.size=size,
	this.price=price;
	this.changePrice=function(newprice){
		this.price=newprice;
	}
	this.available=1;
	this.changeAvailable=function(number){
		this.available=number;
	}
}
let bild1=new Bilder('winter','watercolor','20*30','50 Euro','1');
let bild2=new Bilder('wheat-field','watercolor','15*25','45 Euro','1');
let bild3=new Bilder('violet-lake','watercolor','20*20','30 Euro','1');
let bild4=new Bilder('sunset-river','watercolor','20*20','30 Euro','1');
console.log('price for bild 1 is: ', bild1.price);
let num1=prompt('please enter the number of painting');
if(bild`${i}`.available==1){
	document.write(`the price for bild${i} is `,`bild${i}.price`);
}