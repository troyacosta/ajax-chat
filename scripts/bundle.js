(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

	var inputBox = $('#inputBox');
	var newMessage = $('#newMessage');
	var message = null;

	// event listener function. Gets input data and posts to server

	$('form').submit(function (e) {
		e.preventDefault();
		message = inputBox.val();
		inputBox = inputBox.val('');

		$.post('http://tiyfe.herokuapp.com/collections/troy-messages', { message: message }, 'json');
	});
	// function that retrieves the data from the server

	setInterval(function () {
		$.get('http://tiyfe.herokuapp.com/collections/troy-messages', function (data) {
			newMessage.html('');
			data.forEach(function (chat) {
				newMessage.append('<p>' + chat.message + '</p>');
			});
		}, 'json');
	}, 500);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map