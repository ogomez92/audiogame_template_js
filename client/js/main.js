export var gameID="";
import {Game} from './game';
export var version="1.0";
export var version2="";

export var lang = 0;
export var ttsVoice;
export var ttsRate=1;
import $ from 'jquery';
export var vo=new NumberSpeaker();
vo.prepend="speaker_"+lang+"_num_";
vo.and=false;
if (lang==2) vo.and=true;

export async function speak(what) {
	let sl="speaker_"+lang+"_";
	let snd=so.create(sl+what);
	await snd.playSync();
	snd.destroy();
}
document.addEventListener('DOMContentLoaded', setup);
async function setup() {
//the below is an example of a new version notifier. The version2 variable can be used and compared inside a menu or wherever, and would contain the new version of your game based on what your server returns.
let prom=new Promise((resolve,reject)=> {
fetch('http://yourserver.com/versions.php?gameVersionRequest='+gameID)
						 .then(event => event.text()) //convert http response into text
			.then(data => {
				version2=data;
				resolve(data); //resolve promise let go.
			});
});
let langs=so.create("ui/lang_select");
langs.play();
let linput=new KeyboardInput();
linput.init();
while (lang==0) {
await utils.sleep(16);
if (linput.isJustPressed(KeyEvent.DOM_VK_1)) {
lang=1;
}
if (linput.isJustPressed(KeyEvent.DOM_VK_2)) {
lang=2;
}
}
langs.destroy();
vo.prepend="speaker_"+lang+"_num_";
vo.and=false;
if (lang==2) vo.and=true;
langs=so.create("ui/forms_"+lang);
await langs.playSync();
const game=new Game();
game.start();
console.log("Success!");
             	}
