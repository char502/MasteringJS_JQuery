// jQuery always starts with $
// start by calling the document object
// then call a function - everything within the function executes when the document is ready

$(document).ready(function () {
    $('button').addClass('animated bounce');
    // target all the elments in the DOM with the name of button
    $('.btn-success').addClass('shake');
    // target a button with a particular class
    $('#target6').addClass('fadeOut');
    // target a button with a particular ID
});