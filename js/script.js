// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice="";
var computerChoice ="";
var winner ="";

var randomNumber = 0;

$("#shoot").click(function(){
  
 userChoice=  $("#input").val();
      console.log(userChoice);
    $("#userChoice").text(userChoice);
    
    randomNumber= Math.random();
    
    if(randomNumber<0.333) {
        computerChoice= "rock";
      
  
   }else if (randomNumber<0.6666) {
       computerChoice="paper";
       
   }else { computerChoice="scissors";
    }
   
   if (userChoice === "rock"){
       if(computerChoice==="rock") {
           winner="tie";
       }
       
       if(computerChoice==="paper") {
           winner="computer";
       }   
       if(computerChoice==="scissors") {
           winner="user";
       }   
   } else if (userChoice === "paper"){
       if(computerChoice==="paper") {
           winner="tie";
       }
        
           
            if (computerChoice === "scissors"){
           winner="computer";
            }
           
        
       if(computerChoice==="rock") {
           winner="user";
       }
       
   }
   
   else {
        if(computerChoice==="paper") {
           winner="user";
       }
        
           
            if (computerChoice === "scissors"){
           winner="tie";
            }
           
        
       if(computerChoice==="rock") {
           winner="computer";
       }  
    
       
   }
       
    alert(winner)  
       
       
       
       
           
         
         
       
       
   
   
       
   });
    






