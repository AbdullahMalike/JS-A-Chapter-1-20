//CHAPTER 1

alert('greet');

alert('Error! please Enter a valid Password');

alert('Welcome to js Land \n Happy Coding!' );
 
alert('Welcome to js Land ' );
alert('Happy Coding !\n prevent this page from creating additional dialogs ' );


console.log('Java Script Alert \n Hello... I can run JS through my web browsers Console');



//CHAPTER 2


//Q1
var username;
//Q2
var myName="Abdullah";
//Q3
var message ="Hello World";
alert(message);
//Q4
var name ="JOHN DOE ";
var age ="15 years old";
var crs="Certified Mobile Application Development";
alert(name);
alert(age);
alert(crs);
 //Q5
    var pizza="pizza \n Pizz \n Piz \n Pi \n P";
    alert(pizza);
6
 var email="abdullahmalikae2002@gmail.com";
 alert("My Email is "+email);

 var book="A smarter way to learn JavaScript."
 alert("I am trying to learn from the Book "+book);
 document.write("Yah I can Write HTML content through Java Script"); 
 
 var a="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
 alert(a);
 document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");



//Chapter 5

//Q1


var a=3;
var b=5;
var c=b+a;
document.write("Summ of "+a+" and "+b+" is "+c);
// Q2

var d=b-a;
var m=b*a;
var di=(a/b);
document.write(" Subtraction of "+a+" and "+b+" is "+d);
document.write("Multiplication of "+a+" and "+b+" is "+m);
document.write("Division of "+a+" and "+b+" is "+di);



//Q3
var z;
document.write("value after variable declartion is::??"+z+"\n");
z=5;
document.write(" initial value: "+z);
z++;

document.write("  value after increment: "+z);
z=z+7;
document.write(" value after addition: "+z);
z--;
document.write(" value after decrement: "+z);
z=z%3;
document.write(" the reminder is: "+z);

//Q4

var ticket=600;
var cost=600*5;
document.write("total cost to buy 5 tickets to a movie is "+cost+" PKR");
//Q5

var table=5;
for(var a=1;a<=10;a++){

    document.write(5+"* "+a+" = "+table*a+"\n");
}


//Q6
 var temp =25;
 var Fare=(25*9/5)+32;
 document.write(temp+"C is "+Fare+" F");
 var temp2=70;
 var Celc=(temp2-32)*5/9;
 document.write(temp2+"F is "+Celc+" C");
//Q7
 var p1=650;
 var p2=100;
 var q1=2;
 var q2=2;
var sh=100;
 document.write('Price of item 1 is '+p1);
 document.write('Quantity of item 1 is '+q1);
 document.write('Price of item 2 is '+p2);
 document.write('Quantity of item 2 is '+q2);
 document.write('Shipping Charges 100');
 document.write("Total cost of your order is: "+(p1+p2+q1+q2+sh));

//Q8
var mark=980;
var obt=804;
var perce= (804/980)*100;
document.write("Total Marks :"+mark+"\n");
document.write("OBTAIN Marks :"+mark+"\n");
document.write("\nPercentage :"+perce);
// Q9
 

var us=10;
var S=25;
var total=(us*104.80)+(S*25);
document.write("total currency in PKR: "+total);

// Q10
var a=50;
var total=(a+5*10/2);
document.write(total);

// Q11

var Year=2022;
var Byear=2001;
document.write("Your Age is: "+Byear-Year);

// Q12

var R=20;
var crm=(2*3.14*R);

var area=(3.14*R*R);

document.write("Radius : "+R);
document.write("Circumference : "+crm);
document.write("Area: "+area);