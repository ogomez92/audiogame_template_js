'use strict';
import {utils} from './utilities';
import {speech} from './tts';
import $ from 'jquery';
import {so} from './soundObject.js';
import {MenuTypes, MenuItem} from './menuItem';
import {KeyEvent} from './keycodes';
import {KeyboardInput} from './input';

class Menu {
	constructor(name, menuData, music) {
		this.fadeTime=800;
		this.menuData = menuData;
		let audio=name.split(" ");
		if (audio.length<2) this.isAudio=true;
		if (audio.length>=2) this.isAudio=false;
						this.silent=false;
			this.first=true;
			this.cursor = 0;
			this.name = name;
			let dir=so.directory;
			so.directory="./sounds/";
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
		//const id = document.getElementById('touchArea');
		// This.hammer = new Hammer(id);
	}
	
		nextItem() {
			if (!this.first) {
				if (this.cursor < this.menuData.length - 1) {
					if (!this.silent) this.sndMove.play();
						this.cursor++;
				}
				else {
					if (!this.silent) this.sndWrap.play();
						this.cursor=0;
				}
			}
			else {
				if (!this.silent) this.sndMove.play();
					this.first=false;
			}
			if (this.isAudio) {
				this.sndName.stop();
					for (let i=0;i<this.menuData.length;i++) {
						if (this.menuData[i].type==MenuTypes.AUDIO) this.menuData[i].snd.stop();
					}
			}		
			this.menuData[this.cursor].speak();
		}
	
		previousItem() {
			if (this.first) {
				this.first=false;
					if (!this.silent) this.sndMove.play();
			}
			if (this.cursor > 0) {
				if (!this.silent) this.sndMove.play();
					this.cursor--;
			}
			else {
				this.cursor=this.menuData.length-1;
					if (!this.silent) this.sndWrap.play();
					
			}
			if (this.isAudio) {
				this.sndName.stop();
					for (let i in this.menuData) {
						if (this.menuData[i].type==MenuTypes.AUDIO) this.menuData[i].snd.stop();
					}
			}		
			this.menuData[this.cursor].speak();
			if (typeof this.moveCallback!=="undefined") {
				this.moveCallback(this.menuData[this.cursor].id);
			}
		}
	
		increase() {
			if (this.menuData[this.cursor].type == MenuTypes.SLIDER || this.menuData[this.cursor].type == MenuTypes.SELECTOR) {
				this.menuData[this.cursor].increase();
					if (this.menuData[this.cursor].type == MenuTypes.SLIDER) {
						if (!this.silent) this.sndSliderRight.play();
					} else {
						if (!this.silent) this.sndSelector.play();
					}
			}
		}
	
		decrease() {
			if (this.menuData[this.cursor].type == MenuTypes.SLIDER || this.menuData[this.cursor].type == MenuTypes.SELECTOR) {
				this.menuData[this.cursor].decrease();
					if (this.menuData[this.cursor].type == MenuTypes.SLIDER) {
						if (!this.silent) this.sndSliderLeft.play();
					} else {
						if (!this.silent) this.sndSelector.play();
					}
			}
		}
	
		insertCharacter(char) {
			if (this.menuData[this.cursor].type == MenuTypes.EDIT) {
				this.menuData[this.cursor].addChar(String.fromCharCode(char));
					if (!this.silent) this.sndKeyChar.play();
			}
		}
	
		removeCharacter() {
			if (this.menuData[this.cursor].type == MenuTypes.EDIT) {
				this.menuData[this.cursor].removeChar();
					if (!this.silent) this.sndKeyDelete.play();
			}
		}
	
		handleInput(event) {
			this.insertCharacter(event.which);
		}
	
		destroySounds() {
			this.sndKeyChar.destroy();
				this.sndKeyDelete.destroy();
				this.sndSliderLeft.destroy();
				this.sndSliderRight.destroy();
				this.sndName.destroy();
				this.sndBoundary.destroy();
				this.sndChoose.destroy();
				this.sndMove.destroy();
				this.sndOpen.destroy();
				this.sndSelector.destroy();
				this.sndWrap.destroy();
				for (let i=0;i<this.menuData.length;i++) {
					if (this.menuData[i].type==MenuTypes.AUDIO) this.menuData[i].snd.destroy();
				}
			if (typeof this.music !== 'undefined') {
				this.music.destroy();
			}
		}
	
		
		destroy() {
			$(document).off('keydown');
				$(document).off('keypress');
				// This.hammer.destroy();
				const that = this;
				setTimeout(() => {
						that.destroySounds();
						}, this.fadeTime);
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
	async runSync() {
		return new Promise((resolve,reject)=> {
				this.run((s)=> {
						resolve(s.selected);
						this.destroy();
						});
				});
	}
	
		run(callback) {
			if (typeof this.music === 'object') {
				this.music.volume = 0.5;
					this.music.loop = true;
					this.music.play();
			} else if (typeof this.music === 'string') {
				this.music = so.create(this.music,true);
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
			if (this.isAudio) {
				this.sndName=so.create(this.name);
					this.sndName.play();
			}
			else {
				speech.speak(this.name);
			}
			if (!this.silent) this.sndOpen.play();
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
			//select function
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
			if (!this.silent) this.sndChoose.play();
				$(document).off('keydown');
				$(document).off('keypress');
				if (typeof this.music !== 'undefined') {
	this.music.sound.fade(music.volume,0,this.fadeTime);
}
				if (this.isAudio) {
					this.sndName.stop();
						for (let i=0;i<this.menuData.length;i++) {
							if (this.menuData[i].type==MenuTypes.AUDIO) this.menuData[i].snd.stop();
						}
				}		
					if (!this.silent) this.musicDuration=this.fadeTime;
					if (typeof this.music==="undefined" || this.silent) this.musicDuration=0;
					console.log("duration "+this.musicDuration);
			const that = this;
				setTimeout(() => {
						that.selectCallback(toReturn);
						}, this.musicDuration);
		}
}
export {Menu};
