/*
 * Check for browser support
 */
var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
	supportMsg.innerHTML = 'Your device <strong>supports</strong> speech synthesis.';
} else {
	supportMsg.innerHTML = 'Sorry your device <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">a newer version of iOS</a>.';
	supportMsg.classList.add('not-supported');
}


// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
	var voices = speechSynthesis.getVoices();

  // Loop through each of the voices.
	voices.forEach(function(voice, i) {
    // Create a new option element.
		var option = document.createElement('option');

    // Set the options value and text.
		option.value = voice.name;
		option.innerHTML = voice.name;

    // Add the option to the voice selector.
		voiceSelect.appendChild(option);
	});
}

// Execute loadVoices.
loadVoices();
voiceSelect.value = "Samantha";

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	var msg = new SpeechSynthesisUtterance();

  // Set the text.
	msg.text = text;

  // Set the attributes.
	msg.volume = parseFloat(volumeInput.value);
	msg.rate = parseFloat(rateInput.value);
	msg.pitch = parseFloat(pitchInput.value);

  // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
	if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	}

  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}

// On Ready
// $( document ).ready(function() {
// 	if (speechMsgInput.value.length > 0) {
// 		voiceSelect.value = "Samantha";
// 		speak(speechMsgInput.value);
// 	}

// });


// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function(e) {
  	// Select samantha if available
	voiceSelect.value = "Samantha";
	if (speechMsgInput.value.length > 0) {
		speak(speechMsgInput.value);
	}
});

var info = document.getElementById('info');
var restroom = document.getElementById('restroom');

//The speak() method doesn't work with a String. I'm not sure what the input should be.

info.addEventListener('click', function(e) {
  speak("This is the information desk.");
});

restroom.addEventListener('click', function(e) {
  speak("This is a restroom.");
})
