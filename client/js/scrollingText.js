import "babel-polyfill";
'use strict';
import $ from 'jquery';
import {KeyEvent} from './keycodes';
import {so} from './soundObject';
import {speech} from './tts';
import copy from 'copy-to-clipboard';
if (runningText == undefined) {
	var runningText = 0;
}
class ScrollingText {
	constructor(text, delimiter = '\n', callback = 0) {
		this.callback = callback;

		this.text = text;
		this.delimiter = delimiter;
		this.splitText = this.text.split(delimiter);
		this.currentLine = 0;
		this.sndOpen = so.create('ui/textOpen');
		this.sndContinue = so.create('ui/textScroll');
		this.sndClose = so.create('ui/textClose');
		const id = document.getElementById('touchArea');
		// This.hammer = new Hammer(id);
		this.init();
		if (this.callback == 0) {
			return this.prom = new Promise(resolve => {
					this.res = resolve;
					});
		}
	}

	init() {
		const that = this;
		runningText = this;
		document.addEventListener('keydown', this.handleKeys);
		// This.hammer.on("swipeleft swiperight", function() { that.handleTap(0); });
		// this.hammer.on("tap", function() { that.handleTap(1); });
		this.sndOpen.play();
		this.currentLine = 0;
		this.readCurrentLine();
	}

	handleKeys(event) {
		switch (event.which) {
			case KeyEvent.DOM_VK_UP:
			case KeyEvent.DOM_VK_DOWN:
			case KeyEvent.DOM_VK_LEFT:
			case KeyEvent.DOM_VK_RIGHT:
				runningText.readCurrentLine();
				break;
				case KeyEvent.DOM_VK_C:
				runningText.copyCurrentLine();
				break;
			case KeyEvent.DOM_VK_RETURN:
				runningText.advance();
				break;
		}
	}

	handleTap(action) {
		if (action == 0) {
			this.readCurrentLine();
		}

		if (action == 1) {
			this.advance();
		}
	}

	readCurrentLine() {
		if (this.splitText[this.currentLine][0] == '!') {
			const str = this.splitText[this.currentLine].substr(1);
			const snd = so.create(str, true);
			snd.play();
			snd.sound.once('end', () => {
					this.advance();
					});
		} else {
			speech.speak(this.splitText[this.currentLine]);
		}
	}
copyCurrentLine() {
			copy(this.splitText[this.currentLine]);	
			this.advance();
}

	advance() {
		if (this.currentLine < this.splitText.length - 1) {
			this.currentLine++;
			this.sndContinue.play();
			this.readCurrentLine();
		} else {
			this.sndClose.play();
			this.sndClose.unload();
			this.sndOpen.unload();
			this.sndContinue.unload();
			document.removeEventListener('keydown', this.handleKeys);
			//			This.hammer.unload();
			if (this.callback != 0) {
				this.callback();
			} else {
				this.res();
			}
		}
	}
}
export {ScrollingText, speech};
