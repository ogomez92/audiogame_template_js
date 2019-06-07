import {Player} from './player';
import {so} from './soundObject';
class World {
	constructor() {
		this.size=10;
		this.player=new Player(this);
		
}