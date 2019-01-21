'use strict';

(function mapClickHandler () {
	window.bigMap = document.querySelector('.big-map');
	var showBigMap = document.querySelector('.small-map');

	showBigMap.addEventListener('click', function () {
	bigMap.classList.remove('hidden');

	document.addEventListener('keydown', function (evt) {
		if (evt.keyCode === 27) {
			bigMap.classList.add('hidden');
		}
	});
});
}());

(function closeBigMap () {
	var closeBigMap = document.querySelector('.exit-button');
	closeBigMap.addEventListener('click', function () {
		bigMap.classList.add('hidden');
	});
}());

(function showSubmitButton () {
	var submitButton = document.querySelector('.search-button');
	var searchInput = document.querySelector('#search-input');

	searchInput.addEventListener('focus', function () {
		submitButton.classList.remove('hidden');
	});

	searchInput.addEventListener('focusout', function (evt) {
		submitButton.classList.add('hidden');
	});
}());