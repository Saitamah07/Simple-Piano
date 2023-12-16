// Detect keyboard keydown event
document.addEventListener('keydown', function (event) {
	// Call the makeSound function with the pressed key as an argument
	makeSound(event.key);

	// Call the buttonAnimation function with the pressed key as an argument
	buttonAnimation(event.key);
});

// Function to play a sound based on the provided key
function makeSound(key) {
	// Define a mapping between keys and sound file names
	const soundMappings = {
		q: 'do.wav',
		w: 'fa.wav',
		e: 'la.wav',
		r: 'mi.wav',
		t: 're.wav',
		y: 'si.wav',
		u: 'sol.wav',
		i: 're.wav',
		o: 'si.wav',
		p: 'sol.wav',
	};

	// Get the file name from the mapping based on the provided key
	const fileName = soundMappings[key];

	// If a file name is found, create an Audio object and play the corresponding sound
	if (fileName) {
		const audio = new Audio(`./sounds/${fileName}`);
		audio.play();
	}
}

// Function to add a temporary 'pressed' class for animation to the clicked or pressed button
function buttonAnimation(currentKey) {
	// Select the element with the class matching the current key
	const activeButton = document.querySelector('.' + currentKey);

	// Add the 'pressed' class to the selected button
	activeButton.classList.add('pressed');

	// Set a timeout to remove the 'pressed' class after 100 milliseconds
	setTimeout(function () {
		activeButton.classList.remove('pressed');
	}, 100);
}
