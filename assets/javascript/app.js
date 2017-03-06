$(document).ready(function() {

    var questions = [{
        question: "The first Boston Marathon was in...",
        answers: ["1998", "1897", "1756"],
        correctAnswer: 1
    }, {
        question: "How many pairs of running shoes are sold worldwide every year?",
        answers: ["1 billion", "2 million", "3 billion"],
        correctAnswer: 0
    }, {
        question: "The average exercise life of a running show is...",
        answers: ["250 miles", "425 miles", "300 miles"],
        correctAnswer: 2
    }, {
        question: "Who is the oldest person to ever complete a full marathon?.",
        answers: ["Will Ferrell", "Fauja Singh", "Usain Bolt"],
        correctAnswer: 1
    }, {
        question: "The fastest land animal is the...",
        answers: ["Gazelle", "Cheetah", "Lion"],
        correctAnswer: 1
    }, {
        question: "Who was the first woman to (unofficially) complete the Boston Marathon?",
        answers: ["Nina Walters", "Oprah", "Roberta Gibbs"],
        correctAnswer: 2
    }, {
        question: "Physically active people lower their risk of Alzheimer's disease by...",
        answers: ["30%", "60%", "75%"],
        correctAnswer: 0
    }, {
        question: "The fastest mile ever run was in:",
        answers: ["3:43:13", "4:02:10", "3:30:09"],
        correctAnswer: 0
    }, {
        question: "Athletes dressed in this color are more likey to win events.",
        answers: ["blue", "purple", "red"],
        correctAnswer: 2

    }, {
        question: "Even a super-slow jogger will burn at least this many calories per minute of running.",
        answers: ["15", "30", "10"],
        correctAnswer: 2
    }];

    var score = 0;



    $(document).on('click', "#start", function() {
        console.log("start clicked");
        listQuestion();
        stopwatch.start();
        $(this).hide();

    });

    var intervalId;

    var stopwatch = {

        time: 30,

        reset: function() {

            stopwatch.time = 0;

            $("#counterDisplay").html("00:00");

        },
        start: function() {
            intervalId = setInterval(stopwatch.count, 1000);
            $("#counterDisplay").html("<h2> Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
        },

        stop: function() {

            clearInterval(intervalId);
        },

        count: function() {

            stopwatch.time--;
            $("#counter-number").html(stopwatch.time);
            if (stopwatch.time === 0) {
                showResults();
            }

        }
    }

    var listQuestion = function() {
        $("#div1").empty();
        for (var i = 0; i < questions.length; i++) {

            // Create element for new question
            var $newQuestion = $("<div>");
            // Create element for the question
            var $question = $("<h4>").text(questions[i].question);
            // Create element for fieldset
            var $fieldset = $("<fieldset>").attr("id", "question" + i);

            // Loop through answers
            for (var j = 0; j < questions[i].answers.length; j++) {
                // Create element for answers
                var $newAnswerLabel = $('<label>').attr("for", "question" + i)
                    .text(questions[i].answers[j]);

                var $newAnswerRadio = $('<input>').attr("type", "radio")
                    .attr("name", "question" + i)
                    .attr("value", j);
                // append them to fieldset
                $fieldset.append($newAnswerRadio, $newAnswerLabel);
            }

            // Append question and fieldset to #div1
            $newQuestion.append($question, $fieldset).appendTo('#div1');

        }

        $("<button>").text("Submit Answers")
            .appendTo("#div2")
            .on("click", showResults);
    };

    var showResults = function() {
        //stop timer
        stopwatch.stop();

        var triviaQuestions = $("#div1").children();

        $.each(triviaQuestions, function(index, question) {
            var theQuestion = $(question).find(":checked").attr('name');
            var answer = $(question).find(":checked").attr('value');

            if (questions[index].correctAnswer == answer) {
                console.log("You got question " + theQuestion + "right!")
            } //need a variable to collect data & reference it in a new div

        });

        //compare answer with correctAnswer & assign a point if it is

        //save answers

        //remove questions - empty page

        //display results

        //show start button

    }

});
