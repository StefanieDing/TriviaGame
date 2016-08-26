var triviaQuestions = [{
	question: "In what year was Pixar founded?",
	answerList: ["1979", "1986", "1995", "2000"],
	answer: 1
},{
	question: "Which tech mogul provided funding and became a co-founder of Pixar?",
	answerList: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
	answer: 0
},{
	question: "What was Pixar's first feature-length film that was released in 1995.",
	answerList: ["Toy Story", "A Bug's Life", "Monster's Inc", "Finding Nemo"],
	answer: 0
},{
	question: "Who was the first Pixar character added to the Disney Princess line-up?",
	answerList: ["Jessie", "Repunzel", "Merida", "Elsa"],
	answer: 2
},{
	question: "What's the name of Pixar's first short film, also known as their mascot?",
	answerList: ["Lampo", "Junior", "Pixie", "Luxo Jr."],
	answer: 3
},{
	question: "How many sequels does Pixar currently have released? (as of August 2016)",
	answerList: ["5", "3", "6", "7"],
	answer: 0
},{
	question: "Which film won Pixar's first Academy Award for Best Animated Feature?",
	answerList: ["Toy Story", "Finding Nemo", "Up", "Wall-E"],
	answer: 1
},{
	question: "Who directed Pixar's first three feature films?",
	answerList: ["Peter Docter", "Brad Bird", "John Lasseter", "Peter Sohn"],
	answer: 2
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8',]
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var wrong = false;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}
var seconds; var time; var answerTime; var answered; var userSelect;

$('#startBtn').on('click', function(){
	$(this).hide();
	newQuestion();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
});

function newQuestion(){
	seconds = 30;
	time = setInterval(countDown, 1000);
	answered = true;

	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	$('.question').html(triviaQuestions[currentQuestion].question);
	
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}

	$(document).on('click','.thisChoice', function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});

}

function countDown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds == 0){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	//$('.question-container').empty();

	if((userSelect == triviaQuestions[currentQuestion].answer) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != triviaQuestions[currentQuestion].answer) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer]);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer]);
		answered = true;
	}
	
	$('#gif').html('<img src = "assets/images/'+gifArray[currentQuestion]+'.gif width: 200px"/>');

	if(currentQuestion == triviaQuestions.length){
		answerTime = setInterval(scoreboard, 5000);
	}

	currentQuestion++;
	answerTime = setInterval(newQuestion, 5000);
}

function scoreboard(){
	$('#finalMessage').html(messages.finished);
	$('#correctedAnswer').html(correctAnswer);
	$('#incorrectedAnswer').html(incorrectAnswer);
	$('#unanswered').html(unanswered);

	$('#startOverBtn').html('<button> Start Over </button>');

}
