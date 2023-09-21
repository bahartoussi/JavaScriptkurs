function birth_year(zahl1){
	let k=0;
	return k=2023-zahl1;
	console.log('you are: ',k);

}
//
console.log('birth_year '+ birth_year(1975));

function age2(functionname,year){
	
	if (year<2023)
		birth_year(year);
	else
		alert("wrong year");
} 
let year1=prompt('please write the year of your birthday: ');
age2(birth_year,parseInt(year1));
/*
let birth_year=function(zahl1){
	
	return 2023-zahl1;

}
console.log('birth_year '+ birth_year(1975));

function age2(functionname,year){
	
	if (year<2023)
		birth_year(year);
	else
		alert("wrong year");
} 
let year1=prompt('please write the year of your birthday: ');
let k=age2(birth_year,parseInt(year1));
	console.log('you are: ',k);
*/