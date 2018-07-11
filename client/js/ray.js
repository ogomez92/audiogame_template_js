class Ray {
	constructor(player) {
	this.result={
	distance:0,
	x:0,
	y:0,
	z:0,
	}
	this.player=player;
		this.x = this.player.x;
		this.y = this.player.y;
						this.z = this.player.z;
		this.alpha = this.player.alpha;
			}
	get position() {
		return [this.x, this.y, this.z];
	}

	set position(pos) {
		this.x = pos[0];
		this.y = pos[1];
		this.z = pos[2];
	}

	scanWall(amount=100,alpha=0) {
	this.limit=amount;
	//this function moves a ray (shadow) of the player by x(amount) units.
	//it checks if a wall is there, if so it returns an object with the distance, x y and z of the wall.
	this.distanceToWall=0;
	this.alpha=alpha;
	let foundWall=false;
let count=0;
	this.result={};
	while (!foundWall && count<=amount) { //let's not create unending loops
	count++;
			this.x=this.x + (Math.sin(this.alpha));
		 this.z=this.z + (Math.cos(this.alpha));
this.distanceToWall++;	
	//the following if condition checks if either x or z are more than 0 or max grid size.
		if (this.x<1 || this.x>this.player.world.size || this.z<1 || this.z>this.player.world.size) {
	foundWall=true;
		this.result={
	distance:this.distanceToWall,
	x:this.x,
	y:this.y,
	z:this.z,
	}
						}
						else {
						}
					}
		return this.result;
		}
}
export {Ray}