'use strict';
$(document).ready(function() {

var inputBox = $('#inputBox');
var newMessage = $('#newMessage');
var message = null;

// event listener function. Gets input data and posts to server

$('form').submit(function(e) {
	e.preventDefault();
	message = inputBox.val();
	inputBox = inputBox.val('');

		$.post('http://tiyfe.herokuapp.com/collections/troy-messages',
			{message: message},
			'json');
});
// function that retrieves the data from the server

setInterval(function() {
$.get('http://tiyfe.herokuapp.com/collections/troy-messages', function(data) {
	newMessage.html('');
	data.forEach(function(chat) {
		newMessage.append('<p>'+chat.message+'</p>');
	});	
},
	 'json');

}, 500);





});