//make a game with multiple questions that each are answered in the form of mulitple guess.
//the whole game is timed and when the timer runs out the game is over or when the player answers all the questions
//at the end of the game display the score of correct and incorrect guesses


//setup for timer 
  function setup() {
    counter = 20;
    document.querySelector("#timer").innerHTML = "Time: " + counter;
    console.log('workin');
    setInterval(timeIt, 1000);

    
    function timeIt() {
        if (counter < 0) {
            console.log("stop")
           timoutBox();
        }
         else {
            document.querySelector("#timer").innerHTML = "Time: " + counter--;
            console.log('work')

         }
          
    };

   
    
};
//the other timer that i need
function secondary() {
    secondCount = 100;
    document.querySelector("#secondary").innerHTML = "Time: " + secondCount;
    $("#secondary").css({
        "opacity": "0"
    })
    console.log('second timer');
    setInterval(secondTime, 1000);

    
    function secondTime() {
        if (secondCount < 0) {
            console.log("second time")
            nextQuestion();
           
        }
         else {
            document.querySelector("#secondary").innerHTML = "Time: " + secondCount--;
            console.log('second')

         }
          
    };

   
    
};


//Setup for game
var counter;
var secondtime;
var timeIt;
var stepNumber = 0;
var right = 0;
var wrong = 0;
var timeUp = 0;
var x1, x2, x3, x4;
var x5;

var questions = [{
     q:"What is George's go-to alter ego?",
     a:"Art Vandelay",
     d1:"Rusty Shackleford", 
     d2:"Chuck Finley", 
     d3:"Seymour Butz",
     image:"assets/images/art-van-crop.png"
    },{
     q:"What is 'little Jerry'?",
     a:"A cockfighting chicken", 
     d1:"Jerry's son", 
     d2:"Kramers midget friend", 
     d3:"Jerry's dog",
     image: "assets/images/The_little_jerry.jpg"
    },{
     q:"What did Poppy do to Jerry's counch?", 
     a:"Sat on it and peed himself", 
     d1:"Wiped boogers on the armrest", 
     d2:"Spilled a drink", 
     d3:"Threw it out the window",
     image: "assets/images/poppy-pee.jpg"
    },{
     q:"Who was the man in the cape?", 
     a:"Frank's Lawyer", 
     d1:"Superman", 
     d2:"Larry David", 
     d3:"Lloyd Braun",
     image: "assets/images/Cape.jpg"
    },{
     q:"Where did J. Peterman go?", 
     a:"Burma", 
     d1:"Arazona", 
     d2:"Mexico", 
     d3:"Canada",
     image: "assets/images/myanmar.png"
    },{
     q:"Who stole Elaine's armoire", 
     a:"Gay street toughs", 
     d1:"Newman", 
     d2:"The Soup Nazi", 
     d3:"Russell Dowripple",
     image: "assets/images/gay-street.jpg"
    },{
     q:"What magizine was George looking at when his mom came home?", 
     a:"Glamour", 
     d1:"Mad", 
     d2:"Sports Illustrated", 
     d3:"TV guide",
     image: "assets/images/glamor.png"
    },{
     q:"What did Elaine call David Putty when he wore his fur coat?", 
     a:"Dr.Zaius", 
     d1:"Curt Russell", 
     d2:"Furbaby", 
     d3:"Boytoy",
     image: "assets\images\putty-fur.jpg"
    },{
     q:"What is Davids Putty's money with a hole in it?", 
     a:"Kroner", 
     d1:"Bitcoin", 
     d2:"Dinar", 
     d3:"Eurotrash",
     image: "assets/images/kroner.jpg"
    },{
     q:"What was on the $20 George thought the cashier stole?", 
     a:"Red lipstick on the president", 
     d1:"Lotto Number", 
     d2:"Uma Thurman's number", 
     d3:"A coffee stain",
     image: "assets/images/lipstick.jpg"
    },{ 
     q:"Who was not 'sponge-worthy'?", 
     a:"Jerry", 
     d1:"Newman", 
     d2:"Kramer", 
     d3:"David Putty",
     image: "assets\images\The_sponge.jpg"
    },{
     q:"What was Kenny Bania's favorite resturant?", 
     a:"Mendy's", 
     d1:"Applebees", 
     d2:"Monks", 
     d3:"Poconos Pizza",
     image: "assets/images/kenny-bania.jpg"
    }];

var image = ["assets/images/wrong-anonc.png", "assets/images/timout.png"]


//calls and displays the question
function renderQuestion(stepNumber){
  
    var computerObject = questions[stepNumber];
    
     
    document.querySelector('#question').innerHTML = computerObject.q;
    
    
};

//scrambles answer choices
function randomAnswer(){
     randomNumber = Math.floor(Math.random() * 8) + 1;
     var computerObject = questions[stepNumber];
   
     if(randomNumber === 1){
         x1=computerObject.a;
         x2=computerObject.d1;
         x3=computerObject.d2;
         x4=computerObject.d3;
         x5=1;

     }
     if(randomNumber === 2){
        x1=computerObject.d1;
        x2=computerObject.a;
        x3=computerObject.d2;
        x4=computerObject.d3;
        x5=2;

    }
    if(randomNumber === 3){
        x1=computerObject.d1;
        x2=computerObject.d2;
        x3=computerObject.a;
        x4=computerObject.d3;
        x5=3;
    }
    if(randomNumber === 4){
        x1=computerObject.d1;
        x2=computerObject.d2;
        x3=computerObject.d3;
        x4=computerObject.a;
        x5=4;

    }
    if(randomNumber === 5){
        x1=computerObject.d2;
        x2=computerObject.d1;
        x3=computerObject.d3;
        x4=computerObject.a;
        x5=4;

    }
    if(randomNumber === 6){
        x1=computerObject.d2;
        x2=computerObject.d3;
        x3=computerObject.d1;
        x4=computerObject.a;
        x5=4;

    } if(randomNumber === 7){
        x1=computerObject.d3;
        x2=computerObject.d2;
        x3=computerObject.a;
        x4=computerObject.d1;
        x5=3;

    } if(randomNumber === 8){
        x1=computerObject.d1;
        x2=computerObject.d3;
        x3=computerObject.d2;
        x4=computerObject.a;
        x5=4;
        

    }
    //assigns answer slots on the html to the scramble
    document.querySelector('#choice1').innerHTML = x1;
    document.querySelector('#choice2').innerHTML = x2;
    document.querySelector('#choice3').innerHTML = x3;
    document.querySelector('#choice4').innerHTML = x4;
};
   

//how to select answers 
   $(document).on('click', '.option', function (){
    var computerObject = questions[stepNumber];
    
    console.log(this)

    //for right answers
    if(this.innerHTML === computerObject.a){
      right++;
      console.log("Right answers: " + right);
      $("#question").empty();
      winBox();
      
    }
    
    //for wrong answers
    else{
        wrong++
        console.log("Wrong Answers: " + wrong);
       $("#question").empty();
       loseBox();
       
        
    }
console.log(stepNumber);
    if(stepNumber === 11){
        
        endGame();
    }
    
    });
    

    function endGame(){
        
            $("#question").empty();
            $("#choice1").empty();
            $("#choice2").empty();
            $("#choice3").empty();
            $("#choice4").empty();
            $("#image-box").empty();
            var timout = 12-(right + wrong);
            $("#timer").css({
                "opacity": "0"
            });
            counter = 900000;
            secondCount = 900000;


            document.querySelector("#question").innerHTML = "Game Over!!!";
            document.querySelector("#choice1").innerHTML = "Your scores are";
            document.querySelector("#choice2").innerHTML = "Correct answers: " + right;
            document.querySelector("#choice3").innerHTML = "Incorrect answers: " + wrong;
            document.querySelector("#choice4").innerHTML = "Ran out of time: " + timout;
        
    };


//clears previous info on page and calls next question to be displayed in its place
  function nextQuestion(){
    $("#question").empty();
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
    $("#image-box").empty();
    
    
    counter = 20;
    secondCount = 50;
    stepNumber = ++stepNumber;
    $(".option").css({
        "color": 'rgb(36, 26, 16)',
        "font-weight": 'normal'
    });
    $("#question").css({
        "color": 'rgb(36, 26, 16)',
        "font-weight": 'normal',
        "font-size": '32px'
    });
    $("#timer").css({
        "opacity": "1"
    });
    renderQuestion(stepNumber);
    randomAnswer(stepNumber);
    
  };

  function winBox(){
    
    computerObject = questions[stepNumber];
    $("#timer").css({
        "opacity": "0"
    });
    counter = 30;
    secondCount = 5;
    $("#question").css({
        "color": 'rgb(36, 9, 109)',
        "font-weight": 'bolder',
        "font-size": '60px'
    })
    document.querySelector("#question").innerHTML = "Correct";
   console.log(x5);
if(x5 === 1){
       $("#choice1").css({
           "color": 'green',
           "font-weight": 'bold'
       });
}
if(x5 === 2){
    $("#choice2").css({
        "color": 'green',
        "font-weight": 'bold'
    });
}
if(x5 === 3){
    $("#choice3").css({
        "color": 'green',
        "font-weight": 'bold'
    });
}
if(x5 === 4){
    $("#choice4").css({
        "color": 'green',
        "font-weight": 'bold'
    });
}

var check = $("<div>");
check.attr({
    "id": 'good'
});
check.css({
    "height": '200px',
    "width": '200px',
    "background-image":"url('" + questions[stepNumber].image + "')",
    "background-size":"cover",
    "background position": "center",
    "margin": '0% 45%'
});
$("#image-box").append(check);
    
    
  };


 
  function loseBox(){
     computerObject = questions[stepNumber];
     $("#timer").css({
        "opacity": "0"
    });
     counter = 30;
     secondCount = 5;
     
     $("#question").css({
         "color": 'red',
         "font-weight": 'bolder',
         "font-size": '60px'
     })
     document.querySelector("#question").innerHTML = "Wrong!!!";
    console.log(x5);
 if(x5 === 1){
        $("#choice1").css({
            "color": 'green',
            "font-weight": 'bold'
        });
 }
 if(x5 === 2){
     $("#choice2").css({
         "color": 'green',
         "font-weight": 'bold'
     });
 }
 if(x5 === 3){
     $("#choice3").css({
         "color": 'green',
         "font-weight": 'bold'
     });
 }
 if(x5 === 4){
     $("#choice4").css({
         "color": 'green',
         "font-weight": 'bold'
     });
 }

 var mark = $("<div>");
mark.attr({
    "id": 'bad'
});
mark.css({
    "height": '200px',
    "width": '200px',
    "background-image":"url('" + image[0] + "')",
    "background-size":"cover",
    "background-position": "center",
    "margin": '0% 45%'
});
$("#image-box").append(mark);
     
     
     
   };

   function timoutBox(){
     computerObject = questions[stepNumber];
     $("#timer").css({
        "opacity": "0"
    });
     counter = 30;
     secondCount = 5;
     $("#question").css({
         "color": 'red',
         "font-weight": 'bolder',
         "font-size": '60px'
     })
     document.querySelector("#question").innerHTML = "Your outta time!!!";
    console.log(x5);
 if(x5 === 1){
        $("#choice1").css({
            "color": 'green',
            "font-weight": 'bold'
        });
 }
 if(x5 === 2){
     $("#choice2").css({
         "color": 'green',
         "font-weight": 'bold'
     });
 }
 if(x5 === 3){
     $("#choice3").css({
         "color": 'green',
         "font-weight": 'bold'
     });
 }
 if(x5 === 4){
     $("#choice4").css({
         "color": 'green',
         "font-weight": 'bold'
     });
 }

 var outta = $("<div>");
outta.attr({
    "id": 'bad'
});
outta.css({
    "height": '200px',
    "width": '200px',
    "background-image":"url('" + image[1] + "')",
    "background-size":"cover",
    "background position": "center",
    "margin": '0% 45%'
});
$("#image-box").append(outta);
     
     
     
   };

  
 
 //this is where the game starts
$(document).on('click', '#startBtn', function(){
 renderQuestion(stepNumber);
 randomAnswer();
 setup();
 secondary();
 $("#startBox").hide();
 

});
 

