// jQuery always starts with $
// start by calling the document object
// then call a function - everything within the function executes when the document is ready

$(document).ready(function () {
    $('button').addClass('animated bounce');
    // target all the elments in the DOM with the name of button
    $('.btn-success').addClass('shake');
    // target a button with a particular class

    // $('#target6').addClass('fadeOut');
    // target a button with a particular ID

    $('button').removeClass('btn-success');
    // removing a class

    $('#target1').css({ 'color': 'white', backgroundColor: 'blue' });
    // applying custom css, targeting properties - wrapping the CSS in curly braces allws you to add more than one styling element

    $('#target2').prop('disabled', true);
    // disable a button by targeting the elements properties

    // ======
    // adding more text

    $('h1').html('Learning <strong>jQuery</strong> is so much fun!');


    // $('h1').text('Learning <strong>jQuery</strong> is so much fun!');
    // can also use .text as shown (but this will include the <strong> markup tags etc)

    // ======
    // removing an element


    // $('#target1').remove('');
    // removing an element using jQuery

    // ======
    // appendTo

    $('#target4').appendTo('.left');
    // move a button from the right colmn to the left column (one column given a class of 'left' the other given a class of right)

    // ======
    // clone and appendTo (chaining functions)

    $('.left').clone().appendTo('.right');
});