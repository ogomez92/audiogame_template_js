'use strict';
import {utils} from './utilities';
const useWebTTS = true;
import {ttsVoice,ttsRate} from './main';
class TTS {
	constructor(webTTS = false) {
		this.synth = window.speechSynthesis;
		this.webTTS = webTTS;
		this.rate=1;
	}

	async speak(text) {
		if (this.webTTS) {
					const utterThis = new SpeechSynthesisUtterance(text);
						if (typeof ttsVoice!=="undefined") utterThis.voice=ttsVoice;
utterThis.rate=this.rate;
			this.synth.cancel();
	if (process.platform!='darwin') await utils.sleep(150);
			this.synth.speak(utterThis);
		} else {
			document.getElementById('speech').innerHTML = '';
			const para = document.createElement('p');
			para.appendChild(document.createTextNode(text));
			document.getElementById('speech').appendChild(para);
		}
	} // End speak()

	setWebTTS(tts) {
		this.webTTS = tts;
	}
} // End class
	var speech = new TTS(false);
	if (process.platform=='darwin') speech.webTTS=true;
export {TTS, speech};