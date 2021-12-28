"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TakeasurveyComponent = void 0;
const { JSDocComment } = require("@angular/compiler");
var core_1 = require("@angular/core");
var TakeasurveyComponent = /** @class */ (function () {
    function TakeasurveyComponent() {
    }
    TakeasurveyComponent.prototype.ngOnInit = function () {
    };
    TakeasurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-takeasurvey',
            templateUrl: './takeasurvey.component.html',
            styleUrls: ['./takeasurvey.component.css']
        })
    ], TakeasurveyComponent);
    return TakeasurveyComponent;
}());
exports.TakeasurveyComponent = TakeasurveyComponent;

var myQuestions = [
	{
		question: "1.Describe your current mod?",
		answers: {
			a: '3',
			b: '5',
			c: '115',
            d: '7'
		},
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10',
            d: '8'
		},
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer==='a'){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            else if(userAnswer==='b'){
                numCorrect++;
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            else if(userAnswer==='c'){
                numCorrect++;
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            else if(userAnswer==='d'){
                numCorrect++;
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            // else{
            //     // color the answers red
            //     answerContainers[i].style.color = 'red';
            // }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

