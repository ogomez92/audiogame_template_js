'use strict';
import {utils} from './utilities';
import {ScrollingText} from './scrollingText';
import {speech} from './tts';
import {son} from './sonoObject';
import {version,version2,save,data,browseAch,editPack,minituts,minigames,buySafeguards} from './main';
import {langs, lang} from './main';
import {st} from './stateMachine';
import {strings} from './strings';
import {MenuItem} from './menuItem';
import {pack, packdir, rebuildHashes, downloadPacks} from './main';
import {KeyboardInput} from './input.js';
import {KeyEvent} from './keycodes';
import {Menu} from './menu';
export async function mainMenu() {
const fs=require('fs');
		const items = new Array();
			items.push(new MenuItem(0, strings.get( 'mStart')));
			if (version2!="" && version!=version2) {
				items.push(new MenuItem(-1000,strings.get("newUpdate",[version,version2])));
			}
		if (speech.webTTS) items.push(new MenuItem(33,strings.get("mReader")));
				if (!speech.webTTS) items.push(new MenuItem(34,strings.get("mSapi")));
if (speech.webTTS) items.push(new MenuItem(32,strings.get("mRate")));
		items.push(new MenuItem(13, strings.get( 'mRev')));
	items.push(new MenuItem(8, strings.get( 'mSafeguards',[data.safeguards])));
	
items.push(new MenuItem(1, strings.get( 'mLearn')));
items.push(new MenuItem(12, strings.get( 'mAch')));
items.push(new MenuItem(11, strings.get( 'mEdit')));
	items.push(new MenuItem(9, strings.get( 'mGames',)));
		
items.push(new MenuItem(2, strings.get( 'mBrowse',[data.beatcoins])));
items.push(new MenuItem(5, strings.get( 'mBrowseUnlocked')));
items.push(new MenuItem(7, strings.get( 'mBrowseIncompleted')));
items.push(new MenuItem(4, strings.get( 'mDownload')));
items.push(new MenuItem(6, strings.get( 'mUnlocked',[data.unlocks[pack]["level"]])));
items.push(new MenuItem(10, strings.get( 'mGameTuts',)));
items.push(new MenuItem(3, strings.get( 'mHashes')));
son.directory = './sounds/';
const mainMenu = new Menu(strings.get("mainmenu"), items);
so.directory = '';
mainMenu.music = packdir + 'loop';
if (fs.existsSync(packdir + 'select.ogg')) {
	mainMenu.sndChoose.unload();
	mainMenu.sndChoose = so.create(packdir + 'select');
}
	mainMenu.run(async s => {
		son.directory = './sounds/';
		mainMenu.destroy();
		switch (s.selected) {
			case 32:
			changeRate();
			break;
			case 33:
				if (process.platform=='darwin') await new ScrollingText(strings.get("macwarning"));
			speech.webTTS=false;
			st.setState(2);
			break;
			case 34:
			speech.webTTS=true;
			st.setState(2);
			break;

			case 0: st.setState(3); break;
			case 1: st.setState(4); break;
			case 2:
		st.setState(5); break;
			case 3: rebuildHashes(); break;
			case 4: downloadPacks(); break;
			case 5:
		st.setState(6); break;
		case 6:
		st.setState(7); break;
		case 7:
		st.setState(8); break;
		case 8: buySafeguards(); break;
			case 9: minigames(); break;
			case 10: minituts(); break;
			case 11:
			const electron = require('electron')
const remote = electron.remote
const {dialog} = require('electron').remote
let stuff=dialog.showOpenDialog({
title:strings.get("selectPack"),
    properties: ['openDirectory']
  },function(path){
  editPack(path);
    }); 
			break;
			case 12:
			browseAch();
			break;
			case 13:
			st.setState(21);
			break;
		}
	});
}
export async function changeRate() {
	let rate=speech.rate;
	let inp=new KeyboardInput();
	inp.init();
	strings.speak("rating");
	while (!inp.isJustPressed(KeyEvent.DOM_VK_RETURN)) {
	await utils.sleep(5);	
	if (inp.isJustPressed(KeyEvent.DOM_VK_RIGHT)) {
rate=rate+0.25;
speech.rate=rate;
		strings.speak("newRate");
	}
	if (inp.isJustPressed(KeyEvent.DOM_VK_LEFT)) {
rate=rate-0.25;
speech.rate=rate;
		strings.speak("newRate");
	}
}
data.rate=speech.rate;
save();
st.setState(2);
}