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

    $('button').removeClass('btn-success');
    // removing a class

    $('#target1').css({ 'color': 'white', backgroundColor: 'blue' });
    // applying custom css, targeting properties - wrapping the CSS in curly braces allws you to add more than one styling element

    $('#target2').prop('disabled', true);
    // disable a button by targeting the elements properties

    $('h1').html('Learning <strong>jQuery</strong> is so much fun!');
    // adding more text

    // $('h1').text('Learning <strong>jQuery</strong> is so much fun!');
    // can also use .text as shown (but this will include the <strong> markup tags etc)
});