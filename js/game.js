import { speech } from './tts';
import Timer from './timer';
import $ from 'jquery';
import { utils } from './utilities';
import { ScrollingText } from './scrollingText';
import { KeyboardInput } from './input.js';
import { KeyEvent } from './keycodes.js';
import { so } from './soundObject';

class Game {
	constructor() {
		this.input = new KeyboardInput();
		this.input.init();
		this.timer = Timer({
			update: () => this.update(),
			render: () => this.render()
		}, 1 / 60);
	}

	start() {
		this.sound = so.create("menu_music");
		this.sound.loop = true;
		this.sound.play();
		this.timer.start();
	}

	update(dt) {
		//here, the program runs this function every 1/60 of a second, as configured in the timer declaration.
		//this means 60 fps. The time it took to run is in the dt parameter.
		//the dt parameter is used for game timers to check when to do something, i.e let the player walk every 350ms.
		//you calculate by adding the latest dt to the elapsed dt, and reseting the action's dt value to 0 when it is completed, just like the old bgt timer.
		//the following is a random test.
		this.sound.playbackRate -= 0.0001;
		if (this.input.isJustPressed(KeyEvent.DOM_VK_UP)) {
			speech.speak("I pressed up arrow!");
		}
		if (this.input.isJustReleased(KeyEvent.DOM_VK_UP)) {
			//do nothing
		}
	}
	render() {
		//the screen is ready to update
		//here, in an audiogame, we normally update the panning positions of sounds that are currently playing as well as other miscellaneous data, though the majority of the game code happens in update, as render happens much more quickly than update which is unnecessary.
	}
}
export { Game }