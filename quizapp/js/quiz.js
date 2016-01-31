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
		answer: "2",
		fact: "One of the easiest methods to knead dough is by stretching and folding it onto itself. This takes less effort and is easier on the dough.",
	},
	{
		question: "What are the most basic ingredients for making bread?",
		choices: [
			'FLour, water, salt', 
			'Flour, milk, yeast, salt, sugar', 
			'Water, flour, sugar, salt, yeast', 
			'Milk, flour, butter, eggs, sugar, salt, yeast'
			],
		answer: "0",
		fact: "The most basic list of ingredients to make bread is as simple as flour, water, & salt. Sourdough bread is leavened naturally using only flour and water.",
	},
	{
		question: "Name the final stage before shaping the dough?",
		choices: [
			'Proofing', 
			'Bench rest', 
			'Placing in a loaf tin', 
			'Mixing ingredients'
			],
		answer: "1",
		fact: "The bench rest is a very important step before shaping the loaf. It helps relax the gluten making the dough easier to handle",
	},
	{
		question: "How should you enjoy real bread?",
		choices: [
			'Staring and marveling at what you\'ve created', 
			'Spreading salted butter on it before devouring', 
			'As an accompaniment to anything else you are eating', 
			'All of the above'
			],
		answer: "3",
		fact: "Why enjoy real bread with just one of these ways when you can enjoy it with all of these methods!",
	}
];

currentQuestion = 0;
score = 0;

function _(x) {
	return document.getElementById(x);
}

function postQuestions() {
	$("#factSection").hide();
	if(currentQuestion < quiz.length) {
	// POST QUESTIONS
	question = quiz[currentQuestion].question;
	_("questionSection").innerHTML += "<h2 class='questionLine'>" + question + "</h2>";

	// POST CHOICES
	choices = quiz[currentQuestion].choices;
	for (var i = 0; i < choices.length; i++) {
		_("choiceSection").innerHTML += "<li class='choiceItems'>" + choices[i] + "</li>";
	}

	/*fact = quiz[currentQuestion].fact;
	for (var i = 0; i < fact.length; i++){
    _('factSection').innerHTML += "<p class='fact'>" + fact + "</p>";
	$(this).hide();
	}
*/
	// SUBMIT BUTTON
	_("choiceSection").innerHTML += "<li class='checkAnswer'>Check Answer</li>";
	buttons();
	
	}
}


function buttons() {
$(".checkAnswer").on("click", function() {
	$(this).css('background-color','#366ed8');
	facts();

});
$(".choiceItems").on("click",function () {
    $(this).css('background-color','#e1e1e1');
   });
}

function facts() {
	//if (quiz[currentQuestion].choices[])
	$(".questionLine").on("click").remove();
	$(".choiceItems").on("click").remove();
	$(".checkAnswer").on("click").remove();
	$("#factSection").show();
	$("#nextQuestion").show();

	fact = quiz[currentQuestion].fact;
	for (var i = 0; i < quiz.length; i++){
    _('factSection').innerHTML += "<p class='fact'>" + fact + "</p>";
//	$(this).hide();
}

    $("#nextQuestion").on("click", function() {
    	currentQuestion++;
     	console.log(currentQuestion);  
    	postQuestions(); 

    });
}


postQuestions();

});
