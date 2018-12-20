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

$("#shoot").click(function() {
    
    userChoice = $("input").val();
    $("#userChoice").text(userChoice);
    
    randomNumber= Math.random();
    
    if (randomNumber < 0.333) {
        computerChoice= "rock";
        $("#computerChoice").text("rock");
    } else if (randomNumber < 0.6666) {
        $("#computerChoice").text("paper");
        computerChoice="paper";
    } else {
       $("#computerChoice").text("scissors");
       computerChoice="scissors";
    }
   
    if (userChoice === computerChoice) {
        $("#result").text("tie");
        winner="tie"
    } else if (computerChoice==="rock") {
        
        if (userChoice === "paper") {
            winner = "user";
            $("#result").text("user");
        } else if (userChoice === "scissors") {
            winner = "computer";
            $("#result").text("computer");
        }

    } else if (computerChoice === "paper") {
        
        if (userChoice === "rock") {
            winner = "computer";
            $("#result").text("computer");
        } else if (userChoice === "scissors") {
            winner="user"; 
            $("#result").text("user"); 
        }
    } else if (computerChoice === "scissors") {
        
        if (userChoice === "rock") {
            winner = "user";
            $("#result").text("user");
        } else if (userChoice === "paper") {
            winner = "computer";
            $("#result").text("computer");
        }
        
    }
   
       
   });
    






