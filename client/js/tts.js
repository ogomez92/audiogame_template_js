import "babel-polyfill";
'use strict';
import {strings} from './strings';
import {utils} from './utilities'
import {lang,ttsVoice, ttsRate} from './main';
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes';
const useWebTTS = true;
import Speech from 'speak-tts' // es6
class TTS {
	constructor(webTTS = true) {
		this.ducking=false;

		if (lang==1) this.lang="en-us";
		if (lang==2) this.lang="es-es";
		this.webTTS = webTTS;
		this.synth=new Speech()
			this.rate=2;
		this.synth.init({
lang:this.lang,
rate:this.rate,
splitSentences:false,
})
.then((data) => {
		this.voices=data.voices;
		}).catch(e => {
			console.error("An error occured while initializing : ", e)
			})

}
setLanguage(lang) {
	if (lang==1) this.lang="en-us";
	if (lang==2) this.lang="es-es";
	this.synth.setLanguage(this.lang)
}
setRate(r) {
	let newRate=r;
	if (r<1) newRate==1;
	if (r>10) newRate=10;
	console.log("rate "+newRate)
		this.rate=newRate;
	this.synth.setRate(newRate);
}
queue(text) {
	if (this.webTTS) {

		this.synth.speak({
text:text,
queue:true,
listeners:{
	onstart: () => {
this.duck();
	},
	onend: () => {
		this.unduck();
	},
},
})
}
else {
	document.getElementById('speech').innerHTML = '';
	const para = document.createElement('p');
	para.appendChild(document.createTextNode(text));
	document.getElementById('speech').appendChild(para);
}
} // End speak()

speak(text) {
	if (this.webTTS) {
		this.synth.speak({
text:text,
queue:false,
listeners:{
	onstart: () => {
this.duck();
	},
	onend: () => {
		this.unduck();
	},
}

})
}
else {
	document.getElementById('speech').innerHTML = '';
	const para = document.createElement('p');
	para.appendChild(document.createTextNode(text));
	document.getElementById('speech').appendChild(para);
}
} // End speak()

setWebTTS(tts) {
	this.webTTS = tts;
}

stop() {
	if (this.webTTS) {
		this.synth.cancel();
	}
}
async changeRate() {
	let rate = speech.rate;
	const inp = new KeyboardInput();
	inp.init();
	strings.speak('rating');
	while (!inp.isJustPressed(KeyEvent.DOM_VK_RETURN)) {
		await utils.sleep(5);
		if (inp.isJustPressed(KeyEvent.DOM_VK_RIGHT)) {
			rate += 0.25;
			if (rate>10) rate=10;

			speech.setRate(rate)
				strings.speak('newRate');
		}
		if (inp.isJustPressed(KeyEvent.DOM_VK_LEFT)) {
			rate -= 0.25;
			if (rate<1) rate=1;
			speech.setRate(rate)
				strings.speak('newRate');
		}
	}
}

setVoice(cb) {
	//what language do we want?
	let wl="en";
	if (lang==1) wl="en";
	if (lang==2) wl="es";
	let voiceArray=[]
		for (var k in this.voices) {
			//get the first part of the voice languages
			let vl=this.voices[k].lang.split("-")[0]
				//do we want this language?
				if (vl==wl) {
					voiceArray.push(this.voices[k].name)
				}
		}
	speech.speak(strings.get("selectVoice",[voiceArray.length]));
	let input=new KeyboardInput()
		let selection=-1;
	input.init();
	input.justPressedEventCallback=((key)=> {
			if (key==KeyEvent.DOM_VK_DOWN) {
			selection++;
			if (selection>=voiceArray.length) selection=0;
			}
			if (key==KeyEvent.DOM_VK_UP) {
			selection--;
			if (selection<=-1) selection=voiceArray.length-1;
			}

			if (key!=KeyEvent.DOM_VK_RETURN && (key==KeyEvent.DOM_VK_UP || key==KeyEvent.DOM_VK_DOWN)) { //dirty hack
			this.synth.setVoice(voiceArray[selection]);
			console.log(voiceArray[selection]);
			speech.speak(voiceArray[selection])
			}
			else {
			//it is enter
			if (selection!=-1) { //don't crash if it's -1.
			input.destroy();
			if (typeof cb!=="undefined") {
			cb(voiceArray[selection])
			}
			return voiceArray[selection]
			}
			}//enter action
	});//callback

}//function
duck() {
	if (this.ducking) return;
	this.ducking=true;
	if (typeof this.ducker!=="undefined") this.ducker.duck();
}
unduck() {
	this.ducking=false;
	if (typeof this.ducker!=="undefined") this.ducker.unduck();
}

} // End class
const speech = new TTS(true);
//if (process.platform == 'darwin') {
//	speech.webTTS = true;
//}
export {TTS, speech};
