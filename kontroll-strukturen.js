console.log("hello");
let gewicht=67;
let color="red";
let i=0;
let j=0;
if (gewicht<60)
{
	for (i=0; i<3; i++)
		
		{
			document.write("you are fit.your weight is: ",gewicht,'<br/>');
		}
}
else
	while(j<3)
{
document.write("you should do more exercise.your weight is: ",gewicht,'<br/>');
j++;
}
switch (color)
{
	case "red": document.write("you love color : ",color,'<br/>'); break;
	case "green":document.write("yoy love color : ",color,'<br/>');break;
	default:document.write("yoy love color : ",color,'<br/>');break;
}
document.write(navigator.appCodeName);
