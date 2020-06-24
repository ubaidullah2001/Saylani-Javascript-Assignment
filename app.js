// ********************Chapter#21-25***************************


// Task 1

//  var num1 = prompt("Enter First Name:");
//  var num2 = prompt("Enter Last Name:");
// var sum = num1 + num2;
//  alert( sum );


// Task 2

// var str = prompt("your favorite mobile phone model");
// document.write("<br> My Favorite Phone Is:", str);
// document.write("<br> Length Of String:",  str.length);


// Task 3

// var text = 'pakistani';
// document.write("<br> String : ", text);
// newtext = text.indexOf("n");
// document.write("<br> index of 'n' :  ",  newtext);


// Task 4

// var text = 'Hello World';
// document.write("<br> String : ", text );
// newtext = text.lastIndexOf("l");
// document.write("<br> Last index of 'l' : ",  newtext);







// Task 7

// var city = 'Hyderabad';
// document.write("<br> City : ", city )
// newcity = city.replace("Hyder","Islam");
// document.write("<br> After replacement : ",  newcity);





// Task 8

//  var text = 'Ali and Sami are best friends .They play cricket and football together';
//  for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 3) === "and") {
//         text = text.slice(0, i) + "&" + text.slice(i + 3);
//     document.write(text) 
//     }

//     }



// Task 10

// var str = prompt("Enter Text");
// var firstchar = str.slice(0);
// firstchar = firstchar.toUpperCase()
// document.write("<br>  User input :", str);
// document.write("<br> Upper case :", firstchar );



// Task 11

// var str = prompt("Enter Text");
// var firstchar = str.slice(0,1);
// firstchar = firstchar.toUpperCase()
// var otherchar = str.slice(1);
// otherchar = otherchar.toLowerCase()
// var sum = firstchar + otherchar;
// document.write("<br> Users input :", str);
// document.write("<br> Title case : ", sum);

// Task 16

// var message = "University Of Karachi";
// var reverseStr = function(str){
//    return[...str]
// };
// document.write(reverseStr(message)); 



// Task 17

// var name = prompt("Enter Text");
// document.write("<br> User Input : ", name ); 
// var lastChar = name.charAt(name.length - 1);
// document.write("<br> Last character of input : ",  lastChar);



// *****************************Chapter# 26-30*****************************************


// Task 1

//  var num = prompt("Enter positive integers");{
//      if( num === " - " );
//      alert("Enter positive integers");
//      var num = prompt("Enter positive integers");
//  }

//  document.write("<br> Number : ", num);
//  var num1 = Math.round(num);
//  document.write( "<br> Round Off Value : ", num1);
//  var num2 = Math.floor(num);
//  document.write("<br> Floor Value : ", num2 );
//  var num3 = Math.ceil(num);
//  document.write("<br> Ceil Value : ", num3 );


// Task 2

//  var num = prompt("Enter Negative Integers");{
//     if( num === " + " );
//     alert("Enter Negative integers");
//     var num = prompt("Enter Negative integers");
//  }
//  document.write("<br> Number : ", num );
//  var num1 = Math.round(num);
//  document.write("<br> Round Off Value : ", num1 );
//  var num2 = Math.floor( num);
//  document.write("<br> Floor Value : ", num2);
//  var num3 = Math.ceil(num);
//  document.write("<br> Ceil Value : ", num3);

// Task 3

// var num = prompt("Enter Integers");
// var answer;
// answer = Math.abs(num);
// document.write(  " The  Absolute Value of  "  +   num  +   " is "  +   answer  );


// Task 4

// var irandomnumber;
// irandomnumber = Math.ceil(Math.random()*6);
// document.write( "Random Dice Value Is : ", irandomnumber);



// Task 5

// var irandomnumber;
// irandomnumber =Math.ceil(Math.random() * 2) ;

// if(irandomnumber === 2){
//     document.write(irandomnumber);
//     document.write("<br> randon coin value : Heads");
// }else{
//     document.write(irandomnumber);
//     document.write("<br> random coin value : Tails");
// }



// Task 6

// var irandomnumber;
// irandomnumber = Math.ceil(Math.random()*100);
// document.write( "Random number between 1 and 100 : ", irandomnumber);

// Task 7

// var weight = prompt("Enter Your Weight In Kilograms ");
// document.write( "  <br>   The Weight Of User Is  " ,  weight  );


// Task 8

// var num = 7;
// var num1 = prompt("Enter integers between 1 and 10");
// if(num1 === "7" ){
//     document.write("Congratulation");
// }else{
//     alert("Try Again\nPrevent this page from additional dialogs");
// }




// **************************************Chapter# 31-34**************************************

// Task 1

// var rightnow = new Date();
// document.write(rightnow);


// Task 2

// var monthnames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// var themonth = now.getMonth();
// var currentmonth = monthnames[themonth];
// document.write( "Current Month : ", currentmonth) 


// Task 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write( "Today is ", nameOfToday);


// Task 4
 
//  var dayNames = ["Fun day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Fun day"];
//   var now = new Date();
//   var theDay = now.getDay();
//   var nameOfToday = dayNames[theDay];
//  document.write("It's " , nameOfToday);

// Task 5

// if (current.getDate() <=15){
// document.write(" <br> first fifteen days of month");
// }
// else{
//     document.write("<br> last fifteen days of month ");
// }


// Task 6

// var rightnow = new Date();
// document.write("<br> Current Date : ", rightnow );
// var today = new Date();
// var todaymili = today.getTime();
// document.write( "<br> Elapsed miliseconds since January 1, 1970 : ", todaymili);
// var todayminutes = todaymili/(1000*60*60)
// document.write("<br> Elapsed minutes since January 1,1970 : ", todayminutes );

// Task 7

// if (current.getHour < 12){
//      document.write("<br> it's AM");
//  }
//  else{
//      document.write("<br> it's PM");
//      }

// Task 8

// var later = new Date(2020, 11, 31);
//  document.write("<br><br>Later date: " + later);

// Task 10

//  var start = new Date(2015, 0, 1);
//  var refDate = new Date(2015, 11, 5, 22, 16, 54);
//  document.write("<br><br>On reference date:" + refDate + " " + (refDate.getTime() - start.getTime()) + "seconds have passed since beginning of 2015");

// Task 11

// var current = new Date();
// var ahead = new Date();
// ahead.setHours(current.getHours() - 1);
// document.write("<br> current date : " + current + " 1 hour ago, it was " + ahead);

// Task 12

// var current = new Date();
// var ahead = new Date();
// ahead.setFullYear(current.getFullYear() - 100);
// document.write("<br> current date : " + current + "100 year back, it was " + ahead);

// Task 13

// var age = prompt("Enter Your Age","21");
// document.write("<br> Your age is : ",age);
// document.write( "<br> Your birth year is : ", 2020-age);

// Task 14

//heading is in HTML page

// var customer = "ABC customer";
// document.write("<br> Customer Name : ", customer );
// var month = "June";
// document.write("<br> Month : ", month);
// var units = "410";
// document.write("<br> Numbers of units : ",units);
// var charges = "16";
// document.write("<br> Charges per unit : ",charges);
// var netamount = "6560";
// document.write("<br> Net Amount Payable  (Within Due Date) : ", netamount);
// var latepayment = "350";
// document.write("<br> Late Payment Surcharges : ",latepayment);
// var grossamount = "6910";
// document.write("<br> Gross Amount Payable (After Due Date) : ",grossamount);



// ***********************************Chapter#35-38***************************************


// Task 1

// function currentDate() {
//  var date = new Date();
//  document.write(date);

// }
// currentDate();

// Task 2

// function greet() {

//     var first = prompt("Enter First Name ");
//     var last = prompt("Enter Last Name");
//     alert(" Hello " + first  +  " " + last );
 
// }
// greet();


// Task 3


// var num1 = +prompt("Enter First Number To Add");
// var num2 = +prompt("Enter Second Number To Add");
// var sum = add(num1,num2);
// alert("Your Total Sum Is " +  sum);
// function add(num1,num2){
// return num1 + num2;                                  

// }
 
// Task 4

// var num1 = +prompt("Enter First Number");
// var operator = prompt("Enter Operator");
// var num2 = +prompt("Enter Second Number");
// var ans = calc(num1,operator,num2)
// alert(ans);

// function calc(num1,operator,num2){

//     if( operator == "+"){
//     return num1 + num2;
// }

// else if(operator == "-"){
//     return num1 - num2;
// }

// else if (operator == "*"){
//     return num1 * num2;
// }

// else if(operator == "/"){
// return num1 / num2
// }
// else 
//    return "Illegal Operator"

// }

// Task 7

// var start = +prompt("Enter starting number");
// var end = +prompt("Enter end number");
// Counting(start,end);
// document.write("<br>");
// function Counting(start,end){
//     for(var i = start; i <= end; i++)
//     document.write(i,",");
// }



















