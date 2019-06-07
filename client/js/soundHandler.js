import {SoundSource} from './soundSource.js';
import {Howl, Howler, Spatial} from 'howler';
import {speech} from './tts';
import {so} from './soundObject.js';

class SoundHandler {
	constructor(directional = false, lx = 0, ly = 0) {
	this.pitchIsHandled=true;
		this.lx = lx;
		this.ly = ly;
		this.staticSounds = [];
		this.dynamicSounds = [];
		this.currentDynamicSound = 0;
		this.maxDynamicSounds = 512;
		this.currentStaticSound = 0;
		this.maxStaticSounds = 512;
		this.reuseSounds = false;
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.directional = directional;
		this.currentDynamicSound = 0;
		//steps
		this.panStep = 10;
		this.volumeStep = 5;
		this.pitchStep = 2;
			}

	playStatic(file, loop = 1, slot = -1, stream = false) {
		if (slot = -1) {
			slot = this.findFreeStaticSlot();
		}

		this.staticSounds[slot] = new SoundItem(file, this.directional);
		if (loop == 1) {
			this.staticSounds[slot].sound.loop = true;
		}
		this.staticSounds[slot].sound.play();
		return slot;
	}

	findFreeStaticSlot() {
		for (let i = 0; i < this.maxStaticSounds; i++) {
			if (this.staticSounds[i] == -1 || typeof this.staticSounds[i] === 'undefined') {
				return i;
			}
		}

		if (this.currentStaticSound < this.maxStaticSounds) {
			this.currentStaticSound++;
			return this.currentStaticSound;
		}

		this.currentStaticSound = 0;
		return this.currentStaticSound;
	}

	findFreeDynamicSlot() {
		for (let i = 0; i < this.maxDynamicSounds; i++) {
			if (this.dynamicSounds[i] == -1 || typeof this.dynamicSounds[i] === 'undefined') {
				return i;
			}
		}

		if (this.currentDynamicSound < this.maxDynamicSounds) {
			this.currentDynamicSound++;
			return this.currentDynamicSound;
		}

		this.currentDynamicSound = 0;
		return this.currentDynamicSound;
	}

	findDynamicSound(file) {
		for (let i = 0; i < this.dynamicSounds.length; i++) {
			if (this.dynamicSounds[i].file == file) {
				return i;
			}
		}

		return -1;
	}

	play(file, threed = false, loop = true) {
		let slot = 0;

		let reuse = 0;
		if (this.reuseSounds) {
			slot = this.findDynamicSound(file);
			reuse = true;
		}

		if (slot == -1 || this.reuseSounds == false) {
			slot = this.findFreeDynamicSlot();
			reuse = false;
		}

		if (typeof this.dynamicSounds[slot] === 'undefined') {
			if (reuse == false) {
				this.dynamicSounds[slot] = new SoundItem(file, threed);
			}
		} else if (reuse == false) {
			this.dynamicSounds[slot].sound.destroy();
			this.dynamicSounds[slot] = new SoundItem(file, threed);
		}
this.dynamicSounds[slot].panStep=this.panStep;
this.dynamicSounds[slot].volumeStep=this.volumeStep;
this.dynamicSounds[slot].pitchStep=this.pitchStep;
this.dynamicSounds[slot].lx = this.lx;
this.dynamicSounds[slot].ly = this.ly;
console.log("no three d");
this.dynamicSounds[slot].pitchIsHandled = this.pitchIsHandled;
if (!threed) {
this.dynamicSounds[slot].position2d(this.lx, this.ly, this.x, this.y, this.panStep, this.volumeStep, this.pitchStep);	
}
		this.dynamicSounds[slot].sound.play();
		this.dynamicSounds[slot].sound.loop = true;
		return this.dynamicSounds[slot];
	}

	update(x,y=0,z=0) {
			for (let i = 0; i < this.dynamicSounds.length; i++) {
				if (this.dynamicSounds[i].threeD) {
					this.dynamicSounds[i].listenerPos(x, y, z);
					continue;
				}

				if (!this.dynamicSounds[i].threeD) {
					this.dynamicSounds[i].updateListener(x,y);
					console.log("updated listener "+x);
				}
			}
	}

	destroy() {
		for (var i = 0; i < this.dynamicSounds.length; i++) {
			this.dynamicSounds[i].destroy();
			this.dynamicSounds.splice(i, 1);
			i--;
		}

		for (var i = 0; i < this.staticSounds.length; i++) {
			this.staticSounds[i].destroy();
			this.staticSounds.splice(i, 1);
			i--;
		}
	}
}
class SoundItem {
	constructor(file, threeD = false) {
		this.file = file;
		this.threeD = threeD;
		if (this.threeD == true) {
			this.sound = new SoundSource(file, 0, 0, 0);
		} else {
			this.sound = so.create(file);
		}

		this.startPitch = 100;
	}

	position2d(listener_x, listener_y, source_x, source_y, panStep = 1, volumeStep = 1, pitchStep = 1) {
		let delta_x = 0;
		let delta_y = 0;
		let final_pan = 0;
		let final_volume = 100;
		let final_pitch = this.startPitch;
		// First, we calculate the delta between the listener && the source.
		if (source_x < listener_x) {
			delta_x = listener_x - source_x;
			final_pan -= (delta_x * panStep);
			final_volume -= (delta_x * volumeStep);
		}

		if (source_x > listener_x) {
			delta_x = source_x - listener_x;
			final_pan += (delta_x * panStep);
			final_volume -= (delta_x * volumeStep);
		}

		if (source_y < listener_y) {
			delta_y = listener_y - source_y;
			final_volume -= (delta_y * volumeStep);
			final_pitch -= (delta_y * pitchStep);
		}

		if (source_y > listener_y) {
			delta_y = source_y - listener_y;
			final_volume -= (delta_y * volumeStep);
			final_pitch += (delta_y * pitchStep);
		}
		console.log(final_volume);
if (final_volume<0) {
	final_volume=0;
}
if (final_pan<-100) final_pan=-100;
if (final_pan>100) final_pan=100;

		this.sound.pan = final_pan / 100;
		this.sound.volume = final_volume / 100;
		 if (this.pitchIsHandled) this.sound.pitch = final_pitch / 100;
	}
listenerPos(x,y,z) {
	Howl.pos(x,y,z);
}

	update(x, y=0) {
		this.x = x; this.y = y;
		this.position2d(this.lx, this.ly, this.x, this.y, this.panStep, this.volumeStep, this.pitchStep);
		console.log("updated",this.x,this.lx);
	}
	updateListener(x, y=0) {
			this.lx = x; this.ly = y;
this.position2d(this.lx, this.ly, this.x, this.y, this.panStep, this.volumeStep, this.pitchStep);
		}
		
get loop() {
	return this.sound.loop;
}
set loop(v) {
	return this.sound.loop=v;
}

	destroy() {
		this.sound.destroy();
	}
}

export {SoundHandler};
