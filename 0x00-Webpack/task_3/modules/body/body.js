import $ from 'jquery';

let count = 0;
$('body').html('<button id="btn">Click me</button>');
$('body').append('<p>Counter: <span id="counter">0</span></p>');

$('#btn').on('click', () => {
    count++;
    $('#counter').text(count);
});