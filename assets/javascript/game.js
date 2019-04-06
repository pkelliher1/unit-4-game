$(document).ready(function(){

    
    // VARIABLES
    //method that generates a random number between 19 and 120
    var randomNumDisplay = Math.floor((Math.random() * 101) + 19);
    $("#randomNumber").append(randomNumDisplay);
    
    //assigns a hidden value of 1-12 behind crystals
    var crystalNum1 = Math.floor((Math.random() * 11) + 1);
    var crystalNum2 = Math.floor((Math.random() * 11) + 1);
    var crystalNum3 = Math.floor((Math.random() * 11) + 1);
    var crystalNum4 = Math.floor((Math.random() * 11) + 1);

    var match = 0;  //beginning total for each round
    $("#score").text(match); //
    var wins = 0; //points
    $("#points").append(wins);

    
    //a reset that adjusts randomDisplay and match after win lose
    //must occur after functions win lose to work
    function resetGame(){
        crystalNum1 = Math.floor((Math.random() * 11) + 1);
        crystalNum2 = Math.floor((Math.random() * 11) + 1);
        crystalNum3 = Math.floor((Math.random() * 11) + 1);
        crystalNum4 = Math.floor((Math.random() * 11) + 1);
        match = 0;
        wins= 0;
        $("#score").text(match);
        randomNumDisplay = Math.floor((Math.random() * 101) + 19);
        $("#randomNumber").text(randomNumDisplay);
    }
    
    function pointsUp(){
        wins++;
        $("#points").text(wins);
        resetGame()
    }
    function lose(){
        wins = 0;
        $("#points").text(wins);
        resetGame();
    }

    //a click event that tags crystal images with var crystalNum values
    $("#crystal-1").click(function(){
        match += crystalNum1;
        $("#score").text(match);
        // if else statement to win lose
        if (match === randomNumDisplay){
            pointsUp();
            wins++;             
            } else if 
                (match > randomNumDisplay){
                alert("You Lose.");
                alert("Your high score was: " + wins + "!");
                lose();  
            }
    })
    $("#crystal-2").click(function(){
        match += crystalNum2;
        $("#score").text(match);
            if (match === randomNumDisplay){
                pointsUp();
                wins++;          
            } else if 
                (match > randomNumDisplay){
                alert("You Lose.");
                alert("Your high score was: " + wins + "!");
                lose();
            }
    })
    $("#crystal-3").click(function(){
        match += crystalNum3;
        $("#score").text(match);
            if (match === randomNumDisplay){
                pointsUp();
                wins++;  
            } else if 
                (match > randomNumDisplay){
                alert("You Lose.");
                alert("Your high score was: " + wins + "!");
                lose();
            }
    })
    $("#crystal-4").click(function(){
        match += crystalNum4;
        $("#score").text(match);
            if (match === randomNumDisplay){
                pointsUp();
                wins++;          
            } else if 
                (match > randomNumDisplay){
                alert("You Lose.")
                alert("Your high score was: " + wins + "!");
                lose();
        }
    })
})  