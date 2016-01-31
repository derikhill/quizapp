$(document).ready(function() {

var quiz = [
	{
		question: "What is a microorganism found in sourdough bread?",
		choices: [
			'Pichia fermentans',
			'Lactobacillus sanfranciscensis', 
			'Acetobacter fabarum', 
			'Enteroccoccus faecalis'
			],
		answer: "1",
		fact: "Lactobacillus sanfranciscensis is a microorganism associated with the sourdough culture found in the commonly known San Francicso sourdough bread."
	},
	{
		question: "Which is a common method to knead dough?",
		choices: [
			'Do nothing', 
			'With a spoon', 
			'Stretch and fold', 
			'Singing songs to it'
			],
		answer: "2"
	},
	{
		question: "What are the most basic ingredients for making bread?",
		choices: [
			'FLour, water, salt', 
			'Flour, milk, yeast, salt, sugar', 
			'Water, flour, sugar, salt, yeast', 
			'Milk, flour, butter, eggs, sugar, salt, yeast'
			],
		answer: "0"
	},
	{
		question: "Name the final stage before shaping the dough?",
		choices: [
			'Proofing', 
			'Bench rest', 
			'Placing in a loaf tin', 
			'Mixing ingredients'
			],
		answer: "1"
	},
	{
		question: "How should you enjoy real bread?",
		choices: [
			'Staring and marveling at what you\'ve created', 
			'Spreading salted butter on it before devouring', 
			'As an accompaniment to anything else you are eating', 
			'All of the above'
			],
		answer: "3"	}
];

	currentQuestion = 0,
	score = 0,
	submit = true,
	chosen = 0;

function _(x) {
	return document.getElementById(x);
}	

function addChoices(choices) {
  choices = quiz[currentQuestion].choices;
	for (var i = 0; i < choices.length; i++) {
		_("choiceSection").innerHTML += "<li class='choiceItems'>" + choices[i] + "</li>";
  }
} 

function renderQuestion(question) {
	questionNumber = _("numberSection").innerHTML += "<p class='scoreKeeper'> Question " + (currentQuestion + 1) + " of " + quiz.length + "</p>";
	question = quiz[currentQuestion].question;
	_("questionSection").innerHTML += "<h2 class='questionLine'>" + question + "</h2></br>";
	addChoices();
	_("choiceSection").innerHTML += "<li class='checkAnswer'>Check Answer</li>";
	buttons();
}

$('.checkAnswer').on("click", function() {
	alert("Hi There");
	if(currentQuestion < quiz.length) {
		currentQuestion++;
		console.log(currentQuestion);
	} else {
		console.log("NO NO NO");
	}
	addChoices(quiz[currentQuestion].choices);
});

function buttons() {
	console.log('hello');
   $(".choiceItems").hover(function () {
    $(this).css('background-color','#e1e1e1');
   }, function() {
   	$(this).css('background-color', '#fff');
   }); $('.choiceItems').on('click', function() {
     $(this).css('background-color', '#676d7f');
   }); 
   $('.checkAnswer').on("click", function() {
      $(this).css('background-color','#366ed8');
      currentQuestion++;
      console.log(currentQuestion);
  }), function() {
  	$(this).css('background-color', '#b0c1e8');
  };
}

renderQuestion()

});
