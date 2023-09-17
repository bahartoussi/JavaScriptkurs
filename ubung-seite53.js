let i=0;
let quadrate1=0;
let quadrate2=0;
let j=0;
document.write("for loop---------",'</br>');
for(i=1;i<11;i++)
{
	quadrate1=i*i;
	document.write( "quadrate "+ i,'=',quadrate1 ,'</br>');
	
}
document.write("do-while loop:--------------------",'</br>')
do
{
		quadrate2=j*j;
		document.write( "quadrate "+ j,'=',quadrate2 ,'</br>');
		j++;

}
while (quadrate2<500);

