// @ts-check

// NAME: numjump
// AUTHOR: KeeMeng
// DESCRIPTION: Jump to percent of song using number keys (like youtube)


(function numjump() {
	if (!Spicetify.Keyboard) {
		setTimeout(numjump, 1000);
	}


 	// [key, percentage]
 	const KEY_MAP = [
 		["0", "0.0"],
 		["1", "0.1"],
 		["2", "0.2"],
 		["3", "0.3"],
 		["4", "0.4"],
 		["5", "0.5"],
 		["6", "0.6"],
 		["7", "0.7"],
 		["8", "0.8"],
 		["9", "0.9"],
 	];

 	KEY_MAP.forEach(([key, percentage]) => {
 		Spicetify.Mousetrap.bind(
 			key,
 			(event) => {
 				Spicetify.Player.seek(percentage);
 			}
 		);
 	});

})();
