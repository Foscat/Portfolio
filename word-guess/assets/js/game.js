
var questions = [
    { q: "Life is like a box of _____ ", a: "chocolates" },
    { q: "What was first mate Dan's rank in the Army?", a: "lieutenant" },
    { q: "She tastes like _____", a: "cigarettes"},
    { q: " Well, you better tuck that in. Gonna get that caught on a _____", a: "tripwire"},
    { q: "What town in Alabama is Forrest from?", a: "greenbow"},
    { q: "What is Bubba's first name?", a: "benjamin"},
    { q: "Something jumped up and bit me right in the ___", a: "buttocks"},
    { q: "Me and Jenny goes together like peas and ___", a:"carrots"},
    { q: "There was Dallas, from ___", a:"phoenix"},
    

];

var underscoreArray = []
var score = 0;
var guesses = 9;
var wrongChar 
var myArray = [];
var myWrongCharacter =0;
var myWrongindex = 0;


  //Sets up base # for score and guesses leftjk

 document.querySelector("#score").innerHTML = "Score: " + score;
 document.querySelector("#let-guess").innerHTML = "Letters guessed:  " + myArray;
 document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;

    


 //Randomly selects a question randomly form the question array
  var computerObject = questions[Math.floor(Math.random() * questions.length)];
   renderQuestion()
  console.log(computerObject.q)
  console.log(computerObject.a)

  //setup for function on running through the whole array
   function renderQuestion(){
  document.querySelector('#question').innerHTML = computerObject.q;
  for (i=0; i<computerObject.a.length; i++) {
      underscoreArray.push(" _")
      
      
  };
  //Puts underscores in place makes sure there are no commas between 
  document.querySelector('#blank-word').innerHTML = underscoreArray.join("");
   }
  
  console.log(underscoreArray)
 
 

  //when the user presses a key, it does this 
  document.onkeyup = function(event) {
    //converts all input to lower case and changes underscores into letters when correct key is pressed
    var userInput = event.key.toLowerCase();
    for(var i=0; i<computerObject.a.length; i++ ) {
       if (computerObject.a[i] === userInput) {
           underscoreArray[i] = userInput
       }
    };
    console.log(underscoreArray);

      ////Wrong entry testing & duplicate wrong answer ///

    for(i=0; i<underscoreArray.length; i++) {
        if (underscoreArray[i] === userInput) {
        i = 100;}
        if (myArray[i] === userInput) {
        i = 101;}
        myWrongCharacter=i;
    };
    
    console.log(myWrongCharacter);

//Put wrong answers into  myArray
    if (myWrongCharacter < 100) {
        myArray[myWrongindex] = userInput;
        myWrongindex = ++myWrongindex;
        guesses = --guesses;
        console.log(guesses)
        document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
    }
   
    //If you run out of guesses it give a gome overe alert and restarts game
    if (guesses === 0) {
        alert("Stupid is as stupid does.");
        endGame();
        
    }
      console.log(myArray)
      
      document.querySelector("#let-guess").innerHTML = "Letters guessed:  " + myArray.join(" ");

    //puts the letters you type on the document where spaces were 
     document.querySelector('#blank-word').innerHTML = underscoreArray.join("");
    
     var string1 = underscoreArray.join("");
     console.log(string1)
     console.log(computerObject.a)
     if (string1 === computerObject.a){
     
     console.log("done")
     startover() }
     else {userInput}
     
    };
    
   
    
//to loop the questions once the answers match
    function startover(){console.log("startover")

    //every time the game resets due to a correct question the score goes up one
    
    guesses = 9;
    document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
    document.querySelector("#score").innerHTML = "Score: " + ++score
   
    //selects new random question and makes underscores associated with new question
     computerObject = questions[Math.floor(Math.random() * questions.length)];
     underscoreArray = [];
     myArray = [];
     myWrongindex = 0;
     
     document.querySelector("#let-guess").innerHTML = "Letters guessed:  " + myArray;
     renderQuestion()
    
       
       
  };

  //Setup for restarting the game
   function endGame(){
     score = 0; 
     guesses = 9;
     document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
     document.querySelector("#score").innerHTML = "Score: " + score
     computerObject = questions[Math.floor(Math.random() * questions.length)];
     underscoreArray = [];
     myArray = [];
     myWrongindex = 0;
       renderQuestion();

   }
  