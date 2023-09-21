function flaeche(d){
	let PI= Math.PI;
	let a = Math.pow(d,2);
	return  PI/4*a;
	
}
for(i=0;i<2;i++){
let dlenght=prompt("please write 'd' in centimeter : ");
document.write(`Die flaeche fur ein kreisdurchmesser ${dlenght} ist ${flaeche(dlenght)} cm2`,'<br/>');
}