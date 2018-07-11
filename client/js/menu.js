'use strict';
import {utils} from './utilities';
import {strings} from './strings';
import {speech} from './tts';
import $ from 'jquery';
import {son} from './sonoObject.js';
import {MenuTypes, MenuItem} from './menuItem';
import {KeyEvent} from './keycodes';
import {KeyboardInput} from './input';

class Menu {
	constructor(name, menuData, music) {
		this.menuData = menuData;
		this.first=true;
		this.cursor = 0;
		this.name = name;
		let dir=so.directory;
		son.directory="./sounds/";
		this.sndKeyChar = so.create('ui/keyChar');
		this.sndKeyDelete = so.create('ui/keyDelete');
		this.sndSliderLeft = so.create('ui/menuSliderLeft');
		this.sndSliderRight = so.create('ui/menuSliderRight');
		this.sndBoundary = so.create('ui/menuBoundary');
		this.sndChoose = so.create('ui/menuChoose');
		this.sndMove = so.create('ui/menuMove');
		this.sndOpen = so.create('ui/menuOpen');
		this.sndSelector = so.create('ui/menuSelector');
		this.sndWrap = so.create('ui/menuWrap');
				so.directory=dir;
		this.selectCallback = null;
		if (typeof music !== 'undefined') {
			this.music = music;
		}
		const id = document.getElementById('touchArea');
		// This.hammer = new Hammer(id);
	}

	nextItem() {
		if (!this.first) {
		if (this.cursor < this.menuData.length - 1) {
		this.sndMove.play();
		this.cursor++;
										}
															else {
					this.sndWrap.play();
					this.cursor=0;
					}
					}
				else {
				this.sndMove.play();
				this.first=false;
		}
		
		this.menuData[this.cursor].speak();
	}

	previousItem() {
	if (this.first) {
	this.first=false;
	this.sndMove.play();
	}
		if (this.cursor > 0) {
		this.sndMove.play();
			this.cursor--;
		}
		else {
		this.cursor=this.menuData.length-1;
		this.sndWrap.play();
					
		}
				this.menuData[this.cursor].speak();
	}

	increase() {
		if (this.menuData[this.cursor].type == MenuTypes.SLIDER || this.menuData[this.cursor].type == MenuTypes.SELECTOR) {
			this.menuData[this.cursor].increase();
			if (this.menuData[this.cursor].type == MenuTypes.SLIDER) {
				this.sndSliderRight.play();
			} else {
				this.sndSelector.play();
			}
		}
	}

	decrease() {
		if (this.menuData[this.cursor].type == MenuTypes.SLIDER || this.menuData[this.cursor].type == MenuTypes.SELECTOR) {
			this.menuData[this.cursor].decrease();
			if (this.menuData[this.cursor].type == MenuTypes.SLIDER) {
				this.sndSliderLeft.play();
			} else {
				this.sndSelector.play();
			}
		}
	}

	insertCharacter(char) {
		if (this.menuData[this.cursor].type == MenuTypes.EDIT) {
			this.menuData[this.cursor].addChar(String.fromCharCode(char));
			this.sndKeyChar.play();
		}
	}

	removeCharacter() {
		if (this.menuData[this.cursor].type == MenuTypes.EDIT) {
			this.menuData[this.cursor].removeChar();
			this.sndKeyDelete.play();
		}
	}

	handleInput(event) {
			this.insertCharacter(event.which);
	}

	destroySounds() {
		this.sndKeyChar.unload();
		this.sndKeyDelete.unload();
		this.sndSliderLeft.unload();
		this.sndSliderRight.unload();
		this.sndBoundary.unload();
		this.sndChoose.unload();
		this.sndMove.unload();
		this.sndOpen.unload();
		this.sndSelector.unload();
		this.sndWrap.unload();
		if (typeof this.music !== 'undefined') {
this.music.unload();
		}
	}

	async fade() {
		for (let i = this.music.volume; i > 0; i -= 0.06) {
			this.music.volume = i;
			await utils.sleep(50);
		}
		this.music.unload();
		//this.destroy();
	}

destroy() {
			$(document).off('keydown');
		$(document).off('keypress');
		// This.hammer.destroy();
		const that = this;
		setTimeout(() => {
 that.destroySounds();
		}, 500);
	}

	handleKeys(event) {
		switch (event.which) {
			case KeyEvent.DOM_VK_RETURN:
					this.select();
				break;
			case KeyEvent.DOM_VK_PAGE_UP:
				this.music.volume += 0.03;
				break;
			case KeyEvent.DOM_VK_PAGE_DOWN:
				this.music.volume -= 0.03;
				break;
			case KeyEvent.DOM_VK_BACK_SPACE:
					this.removeCharacter();
				break;

			case KeyEvent.DOM_VK_DOWN:

					this.nextItem();
				break;
			case KeyEvent.DOM_VK_UP:
					this.previousItem();
				break;
			case KeyEvent.DOM_VK_RIGHT:

						this.increase();

				break;
			case KeyEvent.DOM_VK_LEFT:

						this.decrease();

				break;
		}
	}

	run(callback) {
		if (typeof this.music === 'object') {
			this.music.volume = 0.5;
			this.music.loop = true;
	this.music.play();
		} else if (typeof this.music === 'string') {
					this.music = son.create(this.music,true);
			this.music.volume = 0.5;
			this.music.loop = true;
	this.music.play();
		} else {
		}
		this.selectCallback = callback;
		const that = this;
		$(document).on('keypress', event => {
 that.handleInput(event);
		});
		$(document).on('keydown', event => {
 that.handleKeys(event);
		});
		/*
		This.hammer.on("swipeleft", function(event) { that.handleSwipe(0); });
		this.hammer.on("swiperight", function(event) { that.handleSwipe(1); });
		this.hammer.on("panup", function(event) { that.handleSwipe(3); });
		this.hammer.on("pandown", function(event) { that.handleSwipe(4); });
		this.hammer.on("tap", function(event) { that.handleSwipe(2); });
		*/
		speech.speak(this.name);
		this.sndOpen.play();
	}

	handleSwipe(action) {
		if (action == 3) {
			this.decrease();
		}
		if (action == 4) {
			this.increase();
		}

		if (action == 0) {
			this.previousItem();
		}
		if (action == 1) {
			this.nextItem();
		}
		if (action == 2) {
			this.select();
		}
	}

	select() {
		const selected = this.menuData[this.cursor].id;

		const items = [];
		for (let i = 0; i < this.menuData.length; i++) {
			let addItem = null;
			if (this.menuData[i].type == MenuTypes.SLIDER) {
										addItem = {
					id: this.menuData[i].id,
					value: this.menuData[i].currentValue,
					//name: this.menuData[i].options[this.menuData[i].currentValue]
				};
			}
			if (this.menuData[i].type == MenuTypes.EDIT) {
				addItem = {
					id: this.menuData[i].id,
					value: this.menuData[i].text

				};
			}
			if (this.menuData[i].type == MenuTypes.SELECTOR) {
				addItem = {
					id: this.menuData[i].id,
					value: this.menuData[i].currentOption,
					name: this.menuData[i].options[this.menuData[i].currentOption]
				};
			}
			items.push(addItem);
		}

		const toReturn = {
			selected,
			cursor: this.cursor,
			items
		};
		this.sndChoose.play();
		$(document).off('keydown');
		$(document).off('keypress');
		this.musicDuration=0;
		this.musicDuration=this.sndChoose.duration
		
		if (this.musicDuration>3000) this.musicDuration=3000;
						if (typeof this.music !== 'undefined') {
this.fade();
		}
		const that = this;
				setTimeout(() => {
that.selectCallback(toReturn);
				}, this.musicDuration);
	}
}
export {Menu};
