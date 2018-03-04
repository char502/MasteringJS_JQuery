// Handling events with jQuery

// targeting the button with 'question' class, on click event, run this function.
// function targets the empty paragraph with the classname of 'answer' and populates with html formatted text.
// $(document).ready(function () {
//     $('.question').on('click', function () {
//         $('.answer').html('jQuery is the best thing in the world!');
//     });


// add the html text when hovering the mouse over the // button
$(document).ready(function () {
    $('.question').on('mouseover', function () {
        $('.answer').html('jQuery is the best thing in the world!');
    });
});