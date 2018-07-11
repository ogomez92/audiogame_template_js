import {cars} from './main';
import uniqueRandom from 'unique-random';
import {speech} from './tts';
import {Car} from './car';
import {Ray} from './ray';
import {SoundHandler} from './soundHandler.js';
import {OldTimer} from './oldtimer';
export default class Player {
	constructor(world) {
		this.x = 0;
				this.radars=[];
		this.y = 0;
		this.zTimer=new OldTimer();
				this.z = 0;
		this.alpha = 0;
		this.speed =0.04;
				this.sounds = new SoundHandler(true);
		this.stepCounter = 0;
		this.nextStep = uniqueRandom(1, 1);
		this.world=world;
		this.x=this.world.size/2;
		this.z=this.world.size/2;
		this.y=0;
		this.car=new Car(this,cars.default.name,cars.default.gears,cars.default.maxSpeed);
			}

	get position() {
		return [this.x, this.y, this.z];
	}

	set position(pos) {
		this.x = pos[0];
		this.y = pos[1];
		this.z = pos[2];
		this.rx=Math.round(this.x);
				this.rz=Math.round(this.z);
	}

	update() {
	this.car.update();
						}
	move() {
		this.position = [this.x + (Math.sin(this.alpha) * (this.speed)), 0, this.z + (Math.cos(this.alpha) * (this.speed))];
				this.stepCounter += this.speed;
										this.checkWalls();
						for (const i of this.world.contents.static) {
	if (this.rx==i.x && this.rz==i.z) {
i.collide();
	}
	}
		if (this.stepCounter >= 1) {
						this.stepCounter = 0;
						//this.sounds.playStatic('tick',false);
								}
	}
	checkWalls() {
this.zWall=0;
this.xWall=0;
this.wallMultiplier=50;
this.frontRay=new Ray(this);
let result=this.frontRay.scanWall(100,this.alpha);
//speech.speak(result.distance);
/*
if (this.zWall>2 && this.zWall<11) {
if (this.zTimer.elapsed>this.zWall*this.wallMultiplier) {
//this.frontPan.setPosition(this.x,0,1);
//this.front.play();
speech.speak("ok");
this.zTimer.restart();
}
}
*/
	}
}
