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
//console.log(land1);
land1.andernBevolk('10m');
//console.log(land1);
Land.prototype.president='alexander fan dev bellen';

function Bild(name,material,size,price,available){
	this.name=name,
	this.material=material,
	this.size=size,
	this.price=price;
	
	this.available=true;
	this.changeAvailable=function(available){
		this.available=available;
	},
    this.changePrice=function(newprice){
		this.price=newprice;
	}
}
function Künstler(name, ){

}
let bildarray=new Array();
let bildarray2=[];
/*let name=prompt('name')
let color= prompt("Bitte Farbe des Bildes")*/
let eigenschaftenText="";
while (eigenschaftenText=prompt("Bitte um Eingabe der Eigenschaften und bitte unbedingt in der Form \"name,farbe, grösse,preis,verfügbar\ und wenn Sie keine Daten für das Bild eingeben wollen, dann quit eingeben \" "))
{
    
    if(eigenschaftenText == "quit"){
        break;
    }
    let bildeigenschaften=eigenschaftenText.split(",");
    console.log(bildeigenschaften);
    let bild =new Bild();
    let i=0;
    for (let bildeigenschaft in bild){
        bild[bildeigenschaft]=bildeigenschaften[i];
        console.log(bildeigenschaft);
        if(i==4){
        break;
        }
        i++;

    }
    console.log(bild);
    bildarray.push(bild);
}
console.log(bildarray);




/*let künstlerarray=new Bild;
künstlerarray.push('name');

/*let bild1=new Bild('winter','watercolor','20*30','50 Euro','1');
//bildarray[0]=bild1;
let bild2=new Bild('wheat-field','watercolor','15*25','45 Euro','1');
//bildarray[1]=bild2;
let bild3=new Bild('violet-lake','watercolor','20*20','30 Euro','1');
let bild4=new Bild('sunset-river','watercolor','20*20','30 Euro','1');
console.log('price for bild 1 is: ', bild1.price);

bildarray.push(new Bild(name,color,'20*30','50 Euro','1'),new Bild('wheat-field','watercolor','15*25','45 Euro','1') ,new Bild('violet-lake','watercolor','20*20','30 Euro','1'), new Bild('sunset-river','watercolor','20*20','30 Euro','1'));
künstlerarray.push();
let bildname=prompt('please enter the name of the painting');

if (bildarray[0] instanceof Bild){
   console.log(bildarray[0].available);
}
for(let i=0; i<bildarray.length;i++){
    if (bildarray[i] instanceof Bild ){
        if (bildarray[i].name == bildname && bildarray[i].available){
            window.alert(`Das Bild mit dem Namen ${bildarray[i].name} ist verfügbar`);
            break;
        }
       
     }
}*/
/*if(.available==1){
	document.write(`the price for bild${i} is `,`bild${i}.price`);
}*/