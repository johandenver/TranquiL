 // Survey Carousel Script
$(document).ready(function() {

    // ====== Carousel Functionality ======

    // controls carousel slider
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    noWrap: false
    });
    // controls next button on carousel
    $('.next').click(function() {
            $('.carousel.carousel-slider').carousel('next');
    });
    // controls back button on carousel
    $('.back').click(function() {
        $('.carousel.carousel-slider').carousel('prev');
    });
    
    // ====== Survey Score Logic ======

    // runs upon click of Submit Button
    $("#submit-survey").click(function() {
        event.preventDefault();

        // object for userInput values:
        var userInput = {
            data: []
        };

        // capture the number of current survey questions for future scaling
        var answerCount = document.getElementsByClassName("Survey-form").length;
        console.log("Total number of questions " + answerCount);

        // capture survey questions radio input
        $(".Survey-form").each(function() {
            // capture value of checked radio answers
            var userScore = $("input[name='group1']:checked", $(this)).val();
            // console.log(userScore);

            // capture the score of user from radios and push to data array within UserInput object
            userInput.data.push(userScore);
            
            // console.log(JSON.stringify(userInput));
            // console.log(userInput)
            // Post the UserInput object:
            $.post("/api/survey", userInput, function(data){
                console.log(userInput)
                console.log(data);
                // Route to the Results page:
                window.location.replace("/result");
            });
        });
    });

});

