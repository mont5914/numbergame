var count = 0;
var number;
var diff;

$(document).ready(function(){

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*-------------New Game Button------*/

	$('.new').click(function(){
        location.reload();
    });
	/*---Count number of guesses---*/
    $(".button").click(function(){
    	count++;
    	displayCount();
    });
    /*--Generate Number once----*/
    number=genNumber();
    console.log (number);
});  


  




/*------------Generate Random number-------------*/

function genNumber () {
		var randomNumber = Math.floor((Math.random() * 100) + 1);
		return randomNumber;
 		}

	



/*------------Display number of guesses---------*/
function displayCount () {
	$('#count').html(count);
}

	


/*----------Hot or Cold Functions---------------*/

function buttonPressed () {
	var text= document.getElementById('userGuess');
	var guessInt = parseInt(text.value, 10);
	console.log(guessInt);
	if (guessInt==number) {
		$('#feedback').text('Correct!');	
	} else if (guessInt > number) {
		diff = guessInt - number;
	} else if (guessInt < number) {
		diff = number - guessInt;
	}

	if (diff >= 1 && diff <= 5) {
		$('#feedback').text("Very Hot");
	} else if (diff < 10 && diff <= 20) {
		$('#feedback').text("Hot");
	} else if (diff < 15) {
		$('#feedback').text("Warm"); 
	} else if (diff < 30 && diff <= 50) {
		$('#feedback').text("Cold"); 
	} else if (diff > 50) {
		$('#feedback').text("Ice Cold");
	}


}

