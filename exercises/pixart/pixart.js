const $setColorButton = $('#set-color');
const $colorInput = $('#color-field');
const $brush = $('.brush');
const $body = $('body');
let colorSelected = '';

console.log($colorInput);

console.log($setColorButton);

$setColorButton.on('click', function(event) {
    event.preventDefault();

    const inputVal = $colorInput.val();

    console.log(inputVal);

    console.log('button was clicked');

    $brush.css('background-color', inputVal);

    colorSelected = inputVal;
});

// STEP 2

function createSquares(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const $square = $('<div />');
    $square.addClass('square');

    console.log($square);

    $body.append($square);
    }
    
}

createSquares(8000);

// STEP 3

// $body.on('click', '.square', function() {
//     $(this).css('background-color', 'green');
// })

// STEP 4

$body.on('click', '.square', function() {
    
    $(this).css('background-color', colorSelected);
})

// STEP 5

$body.on('mouseover', '.square', function() {
    
    $(this).css('background-color', colorSelected);
})