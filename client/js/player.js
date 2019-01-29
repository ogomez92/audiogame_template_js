class Player {
	this.speed=250;
	this.timer=new OldTimer(false);
	constructor(w) {
		this.world=w;
		this.y=20;
		this.x=this.world.size/2;
	}
}