currentQuestion = 0;
score = 0;


function postQuestions() {
	$('#factSection, #nextQuestion').hide();
	if(currentQuestion < quiz.length) {
	// POST QUESTIONS
	question = quiz[currentQuestion].question;
	$("#questionSection").html("<h2 class='questionLine'>" + question + "</h2>");
	// POST CHOICES
	choices = quiz[currentQuestion].choices;
	choices.forEach(function(option) {
		$("#choiceSection").append("<li class='choiceItems'>" + option + "</li>");
	});
	// SUBMIT BUTTON
	$("#choiceSection").append("<li class='checkAnswer'>Check Answer</li>");
	buttons();
	currentQuestion++;
	}
}

function buttons() {
$(".checkAnswer").on("click", function() {
	$(this).css('background-color','#366ed8');
	$('#choiceSection').html('');
	facts();
	// postQuestions();
	console.log(currentQuestion);
});
$(".choiceItems").on("click",function () {
    $(this).css('background-color','#e1e1e1');
   });
}

function facts() {
	factsCount = 0;
	fact = quiz[factsCount].fact;
	$('.questionLine, .choiceItems, .checkAnswer').remove();
	if(factsCount < fact.length) {
		$("#factSection").html("<p class='fact'>" + fact + "</p>");
		$("#factSection").show();
		$("#nextQuestion").show();
	}
    // $('#factSection').append("<p class='fact'>" + fact + "</p>");
    $("#nextQuestion").on("click", function() {
    	// currentQuestion++;
     	console.log(quiz[factsCount].fact);  
    	postQuestions(); 

    });
}

var quiz = [
	{
		question: "What is a microorganism found in sourdough bread?",
		choices: [
			'Pichia fermentans',
			'Lactobacillus sanfranciscensis', 
			'Acetobacter fabarum', 
			'Enteroccoccus faecalis'
			],
		answer: 1,
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
		answer: 2,
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
		answer: 0,
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
		answer: 1,
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
		answer: 3,
		fact: "Why enjoy real bread with just one of these ways when you can enjoy it with all of these methods!",
	}
];

$(document).ready(function() {
$('#start').click(function() {
	$("#factSection, #startButton").hide();
	postQuestions();
});

});
