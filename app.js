// Q1


var CityName = prompt("Enter your City Name")

if (CityName == "Karachi") {
     alert("Welcome to the City of Lights")
} 
else{
    alert("you are in the wrong place of planet earth")
}

// Q2

var Gender = prompt("Enter your Gender")
if (Gender == "male") {
    alert("Good Morning Sir")
}
else if (Gender == "female") {
    alert("Good morning Ma'am")
}

else {
    alert("correct it")
}


// Q3

var  color = prompt(" input color of road traffic signal")
if (color == "red") {
    alert("Must Stop")
    
} 
else if (color == "yellow") {
    alert("ready to move")
}
else if (color == "green") {
    alert("move now")
}


// Q4

var  RemainingFuel = +prompt("Input remaining fuel of your car")
if (RemainingFuel <= "0.25") {
    alert("Please refill the fuel in your car")
    
} 
else if (RemainingFuel >= "0.25") {
    alert("ready to move")
}

// // ----------------------------Q5-a------------------------------------


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// //----------------------------Q5-b------------------------------------

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// //----------------------------Q5-c-----------------------------------

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// // ----------------------------Q5-d------------------------------------


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// // ----------------------------Q5-e------------------------------------

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
   
//     // ----------------------------Q5-f-----------------------------------

if("car" < "cat"){
alert("car is smaller than cat");
}



// ----------------------------Q6-----------------------------------

var ObtainedMarks = +prompt("Enter Obtained Marks")

if (ObtainedMarks >= "80") {
    alert("TotalMarks=300\nGrade: A-One\nRemarks: Excellent\n")
} 
else if (ObtainedMarks >= "70") {
    alert("TotalMarks=300\nGrade: A\nRemarks: Good")
} 
else if (ObtainedMarks >= "60") {
    alert("TotalMarks=300\nGrade: B\nRemarks: You need to improve\n")
} 
else if (ObtainedMarks >= "50") {
    alert("TotalMarks=300\nGrade: Fail\nRemarks: Sorry\n")
} 


// ----------------------------Q7-----------------------------------

var Secretnumber = +prompt("Enter Secret Number")

if (Secretnumber == "5") {
    alert("Bingo! Correct answer")
} 
else if (Secretnumber == "1+5") {
    alert("Close enough to the correct answer")
 } 
else{
    alert("Wrong Answer")
}


// ----------------------------Q8-----------------------------------

var Number = +prompt("Enter  Number")

if (Number/3 === 0) {
    alert("Bingo! Correct answer")
} 
else{
    alert("Wrong Answer")
}


// ----------------------------Q10-----------------------------------

var Temperature = +prompt("Enter Temperature")

if (Temperature > 40 ) {
    alert("It is too hot outside")
} 

else if (Temperature > 30) {
    alert("The Weather today is Normal")
}

else if (Temperature > 20) {
    alert("Today’s Weather is cool")
}
else if (Temperature > 10) {
    alert("OMG! Today’s weather is so Cool")
}

