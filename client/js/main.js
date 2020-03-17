export var gameID = "";
import { speech } from './tts'
import { LanguageSelector } from './languageSelector'
import { Game } from './game';
export var version = "1.0";
export var version2 = "";

export var lang = 0;
export var ttsVoice;
export var ttsRate = 1;
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', setup);
async function setup() {
	document.getElementById("app").focus();
	//the below is an example of a new version notifier. The version2 variable can be used and compared inside a menu or wherever, and would contain the new version of your game based on what your server returns.
	let prom = new Promise((resolve, reject) => {
		fetch('http://yourserver.com/versions.php?gameVersionRequest=' + gameID)
			.then(event => event.text()) //convert http response into text
			.then(data => {
				version2 = data;
				resolve(data); //resolve promise let go.
			});
	});
	let langs = new LanguageSelector("langSelect", (result) => {
		lang = result;
		speech.setLanguage(lang);

		const game = new Game();
		game.start();
		console.log("Success!");
	});
}
