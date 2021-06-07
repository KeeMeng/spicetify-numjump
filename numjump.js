// @ts-check

// NAME: numjump
// AUTHOR: KeeMeng
// DESCRIPTION: Jumps to tenth of song using 0-9 keys, similar to youtube


(function numjump() {
	if (!Spicetify.Keyboard) {
		setTimeout(numjump, 1000);
	}

	Spicetify.Keyboard.registerShortcut(
		"0",
		(event) => {
			Spicetify.Player.seek("0.0");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"1",
		(event) => {
			Spicetify.Player.seek("0.1");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"2",
		(event) => {
			Spicetify.Player.seek("0.2");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"3",
		(event) => {
			Spicetify.Player.seek("0.3");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"4",
		(event) => {
			Spicetify.Player.seek("0.4");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"5",
		(event) => {
			Spicetify.Player.seek("0.5");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"6",
		(event) => {
			Spicetify.Player.seek("0.6");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"7",
		(event) => {
			Spicetify.Player.seek("0.7");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"8",
		(event) => {
			Spicetify.Player.seek("0.8");
		}
	);

	Spicetify.Keyboard.registerShortcut(
		"9",
		(event) => {
			Spicetify.Player.seek("0.9");
		}
	);

})();
