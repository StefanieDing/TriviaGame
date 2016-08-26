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

var gifArray = ['question1.gif', 'question2.gif', 'question3.gif', 'question4.gif', 'question5.gif', 'question6.gif', 'question7.gif', 'question8.gif',]
var currentQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var right = false;
var wrong = false;
var unanswered = 0;
var userSelect;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	finished: "Alright! Let's see how well you did."
}
var seconds = 30; var time;

$('#startBtn').on('click', function(){
	$(this).hide();
	newQuestion();
});

function newQuestion(){
	time = setInterval(countDown, 1000);

	$('.question').html(triviaQuestions[currentQuestion].question);
	
	for(var i = 0; i < 4; i++){
		$('.answerList').append(triviaQuestions[currentQuestion].answerList[i]);
	}

	//listen for click set the selected value as userSelect --> answerPage()

}

function countDown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds == 0){
		clearInterval(time);
		answerPage();
	}
}

function answerPage(){

}
