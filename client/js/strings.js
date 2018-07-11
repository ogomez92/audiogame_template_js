'use strict';
import {lang} from './main';
import {utils} from './utilities';
import {speech} from './tts';
import {ScrollingText} from './scrollingText';
class Strings {
	constructor() {
		this.strings = {};
this.strings[1] = {
	newUpdate:"There is a new version available! You have version %1, version %2 is available.",
	macwarning:"Warning: On a mac, please press vo left arrow followed by vo right arrow, or you will have no speech.",
	mSapi:"Use text to speech for the game",
	mReader:"Use your screen reader for the game",

	newRate:"This is a text to speech rate test. Please press enter when done",
	rating:"Press right and left arrow keys to change the rate. Press enter when done",
	mRate:"Change speech rate",

tutslot:`Welcome!
Evil slots is very evil indeed.
This game uses the action sounds from your pack to play a 3 wheel slot machine.
If the pack you are currently playing has more than 5 actions, don't worry only the first 5 will be used.
The first thing you will need to do is place a bet. The minimum is 5000 beatcoins. When you place a bet, those beatcoins will be deducted from your current beatcoins.
Once you have done that, a wheel will spin, and 3 action sounds will play.
If you get 3 of different types, you lose beatcoins based on your bet and how much you still have. If you have 0, of course nothing will happen.
!slot_lose_2
If you get 2 of the same type and 1 of a different type, you will get your bet back, but nothing more.
!slot_lose_1
If the first 2 are of the same type, there is a small chance that the third one will be the quiet action (the action of the pack where you must not press any key). If this happens you will get around 25% of your bet back. Because I am evil.
!slot_lose_3
However, if you get 3 of the same type, you will win your bet + 80 to 100 percent of the original bet!
!slot_win_3
Have fun playing evil slots!`,

introQuestion:"Do you want a quick tutorial?",
introTut:`Welcome to the beatstar tutorial!
I will explain to you how to play beatstar.
It is a very simple game, although very adictive and fun!
In this game, your rhythm skills will be tested as well as your ability to react quickly.
Each soundpack consists of levels divided in different music segments.
You will hear a sound, and you will have to press a different key depending on the sound you heard.
Each pack usually has 5 different sounds, with some other packs having more, which are actions for the arrow keys.
There is also a sound which indicates that you need to stay quiet and not press any key.
For example, on the default soundpack, when you hear this sound, it means that you should press tab.
!a3
You need to press the tab key when the time is right.
!o3
This is the sound for the tab key.
To find out when the right time would be, think of the game having different cycles.
A cycle is the time between one action sound and the other, and the right time is always 50% of a cycle.
You know the length of a cycle because at the beginning of each level there is always a silent cycle.
Let me show you with a sound.
!tutorial
As you could hear from this sound, I waited half a cycle to press the tab key. This will earn me the highest possible score for that action!
Did you hear the little horn sound and that I didn't press any key?
The horn sound, in this pack, is the quiet action, also called freeze or stop action.
It means that if you press any key, you will fail!
!cling
Did you hear this cling?
!cling
Keep this cling in your head because, the higher pitched this cling is, the better was your score for that action.
At the end of each level, you earn beatcoins based on your performance. Beatcoins are used to unlock more packs and minigames.
If you find that you cannot beat the higher levels, try buying some safeguards before playing. Safeguards are free fails, which means that failing will have no effect once for each safeguard.
The game can be paused by pressing p and you can quit the game at any time by pressing q.
You can exit most menus in the game by pressing either left arrow or q.
When you are bored of the default pack, you should go to the download packs option and... Maybe download everything?
Have fun!`,
tuthighlow:`Welcome to higher or lower!
This is the typical higher or lower game. You will get a card, and you will have to guess whether the next card will be higher or lower than the one you got.
The values are ace, numbers 2 to 10, jack, queen, king.
Each time you get a card right, you will get more beatcoins, but if you lose you will not get anything!
Good luck!`,
tutfootball:"This game is self explanatory. Just follow the audio instructions!",
tutdouble:"This game is 100% random and it is based purely on a 50/50 chance. Will you win or lose? Let's find out!",
tutcode:`Welcome to beat the code!
In this game, you will have to break a series of codes which use the sounds from your pack.
To play the game, you use the normal keys you would use during the game tab, space, enter and backspace.
You will first hear an announcement saying the number of keys in the code. Then, you can start figuring out the code by pressing keys.
For example, if you press space and hear this,
!code_wrong
it means that the key you pressed was the wrong one.
However, if you hear this,
!code_ok
it means that the key was ok. So the code begins with space.
If you then press the tab key and hear the code wrong sound, you need to begin the code again by pressing space.
You know that the first key is space and the second one is not tab, so try guessing other keys until the code is complete.
Each time you get a code right, the number of keys in the code will increase as well as the amount of time you have to discover it.
Keys can repeat, but all of them will always be present.
For example, it is not possible for a code to be tab enter space enter tab, but it could be tab tab space enter backspace.
A word of caution:
If your pack uses the arrow keys as actions, the game will be a lot harder because these will be included in the code as well, so keep it in mind if you want to play much harder games!
Have fun!`,
mAchTuts:"Achievement spoilers",
	mRev:"Beat Reverse",
football:"soccer kick",
achfw:"Premier League Team",
achhfw:"Obtained by winning a game of football kick",
achfl:"Bad loser: You suck!",
achhfl:"Obtained by losing at football kick",
achidle:"Pay attention",
achhidle:"Pause the game (press p while playing) for more than 60 seconds",
saveFeature:`Congratulations, you have unlocked the saved games feature!
Press the s key for save during a game to save its current state so that you can continue later.
Note that this is not like the old insurance. The state is only saved until you win or fail, and you will destroy your save if you play minigames, buy packs or safeguards.
Have fun!`,
saved:"Game saved!",
killSave:"This will destroy your save file for the pack %1 at level %2. Continue?",
achdl:"Loser times 2",
achhdl:"Lose at double or nothing",
achdw:"winner times 2!",
achhdw:"Win at double or nothing",
double:"Double or nothing",
newach:"You have obtained the achievement: %1",
achMenu:"Achievements: Use arrows to browse your achievements and enter to play one. You can interrupt a playing achievement by pressing q.",
noach:"You have no achievements yet. Go get some!",
mAch:"Browse achievements",
//the following are achievements
achw1:"beat newbie",
achhw1:"Win a pack",
achw5:"it's time for a beer",
achhw5:"beat 5 different packs",
achw10:"time for another beer",
achhw10:"Beat 10 different soundpacks.",
achw25:"25 makes 7",
achhw25:"Beat 25 different packs.",
achw50:"addicted to beatstar",
achhw50:"Beat 50 different packs",
achusepinky:"Just using my pinky",
achhusepinky:"Win a soundpack without using any safeguards",
achlactions:"Go learn the actions",
achhlactions:"Fail at level 1",
achfingr:"Rhythmical fingers",
achhfingr:"Stay on beat for more than 5 levels",
achbulk:"Vicious downloader",
achhbulk:"Click on download all uninstalled packs",
achintro:"Get to work",
achslotwin:"Slots winner",
achhslotwin:"get 3 in a row at beat slots",
achfrust:"Frustration unavoidable",
achhfrust:"Get 2 in a row + a different sound in beat slots",
achcatslots:"Slots catastrophe",
achhcatslots:"get 3 different sounds in slots",
achrobber:"Bank robber",
achhrobber:"Crack more than 4 codes in beat the code",
collect:"Collect beatcoins and leave",
highlow:"Higher or lower",
hw:"Welcome to high or low!",
yourCard:"Your card is the %1",
nextCard:"Will the next card be higher or lower than the %1? Current bet %2 beatcoins",
higher:"Higher",
lower:"Lower",

card:"%1 of %2",
K:"king",
		Q:"queen",
A:"ace",
		J:"jack",
		cspades:"spades",
		cdiamonds:"diamonds",
		cclubs:"clubs",
		chearts:"hearts",
dq:"This is a game of risk. You will risk losing %1 beatcoins. Continue?",
contPack:"Continue where you left off (level %1)",
mPackTut:"Pack making tutorial",
packtut:`Welcome to the pack editor!
First, thank you very much for wanting to create a pack.
It is very simple. You will be instructed to select whether you want to create a pack from the beginning or, if you already have a times file, called bpm.txt in your pack, you can change one of the levels by using the menu.
Once you have selected what to do, you will hear the music for the selected levels.
You will have to press the space bar at the speed you wish the level to go. Each press of the space bar is one cycle of the game, meaning that you have this amount of time to press the correct key
Hit q at any time to exit the pack editor and write your changes.
After you do this 10 times, the music will restart and you will hear your result.
You will hear a sound which will play on every cycle. Think of this cycle as if you were playing the game. Is this enough time for you to press the key? Is it in sync with the music?
If you are not satisfied with the result, you can press the space bar again to reset the time and start again.
Once you are satisfied, press enter. The next music will play.
Once all the levels are done, the file bpm.txt will be created (or voerwritten).
Note that you will have to put the pack in your user folder/beatpacks if you want to play it, and unlock it as normal.
You can upload your pack via the website by making a zip file of the pack's folder and sending it via the upload form.`,
startOver:"Start from the first level",
mSelectEdit:"Please select which level to edit, or start over",
selectPack:"Please select a pack to edit",
floop:"Music for the main menu",
fa1:"Sound for the freeze action, also known as quiet action or stop action. This has no o sound because no key is needed",
fa2:"Sound for the space key action instruction",
fo2:"Sound for the space key action",
fa3:"Sound for the tab key action instruction",
fo3:"Sound for the tab key action",
fselect:"Sound played when an action of the main menu is pressed",
fa4:"Sound for the enter key action instruction",
fo4:"Sound for the enter key action",
fa5:"Sound for the backspace key action instruction",
fo5:"Sound for the backspace key action",
fa6:"Sound for the up arrow key action instruction",
fo6:"Sound for the up arrow key action",
fa7:"Sound for the down arrow key action instruction",
fo7:"Sound for the down arrow key action",
fa8:"Sound for the right arrow key action instruction",
fo8:"Sound for the right arrow key action",
fa9:"Sound for the left arrow key action instruction",
fo9:"Sound for the left arrow key action",

fwin:"Sound played upon completing all levels",
fnlevel:"Sound which is played at the beginning of each level for which there is no pre sound. If neither pre nor nlevel are provided no extra sounds will be played before a level",
fpre1:"pre + a level's number (pre1,pre2) will be played before a level begins. Can be useful in certain situations. If neither pre nor nlevel.ogg is provided, the game will continue with the next level with no extra sounds.",
fcredits:"The credits are played only once, after playing the pack one time.",
missingFiles:"The following files are missing and must be added before your pack can be edited",
missingOptional:"The following files are missing from your pack, but are not strictly required to play. You can skip the arrow key actions, as most packs only have the usual 4 actions.",
fname:"File which contains the preview sound used in menus",
fboot:"This fail is played when the pack is ran for the first time, before reaching the main menu.",
ffail:"This file is played upon failing, when the game ends",
f1music:"Levels for the game. They must be loops so that the game can synchronize properly. At least 3 levels are required. The format is levelnumber+music, like 1music, 2music, 3music, 4music...",
f2music:"Levels for the game. They must be loops so that the game can synchronize properly. At least 3 levels are required. The format is levelnumber+music, like 1music, 2music, 3music, 4music...",
f3music:"Levels for the game. They must be loops so that the game can synchronize properly. At least 3 levels are required. The format is levelnumber+music, like 1music, 2music, 3music, 4music...",
safeget:"You get %1 safeguards... cool!",
lang:"English",
langs:"Select your language",
codescracked:"You managed to crack %1 codes, with %2 different actions!",
mEdit:"Pack Editor",
			"mFound":"Found %1 new packs: what do you wish to do?",
			mGames:"minigames",
			mGameTuts:"Minigame tutorials",
			sGames:"Select a minigame to play",
			sTuts:"Select a minigame to view help",
			cost:"Price",
			slot:"Evil slots",
			unlocked:"Already bought",
			buygame:"Do  you want to buy %1 for %2 beatcoins?",
			bet:"Please place your bet with the left and right arrow keys and press enter when you have decided.",
			nogame:"You don't have the required %1 beatcoins for this game, you only have %2.",
			mainmenu:"main menu",
			mSelect:"Please select",
			mSafeSelect:"Please select, with the right and left arrow keys, how many safeguards you want to buy and press enter.",
			level:"Level %1",
			codes:"Number of keys in the code: %1",
			packprice:"This pack costs %1 beatcoins, please confirm",
			mReady: 'Please wait...',
			code:"Beat the code",
			mDownloadAll: 'Download all uninstalled packs (size: %1 %2)',
			mUnlocked:"Listen to unlocked music for this pack (%1 levels)",
			mSafeguards:"Buy safeguards (now %1)",
			dfiles:"Downloading %1 files. Press any key to obtain percentage",
			packno:"Not enough beatcoins to get this pack, it costs %1.",
			retrieving:"Retrieving data ",
			nodown:"No downloads are available. So sorry! Check back soon",
			mDownloadList: 'List all new available packs (%1)',
			buy:"buy",
			"mBack":"go back",
			safequestion:"How many safeguards would you like? They cost %1 each. You have %2 beatcoins. You can get a maximum of %3. Remember, you can get a maximum of 100. If you want more, run me again.",
			mDownloadInstructions: 'Press arrow keys to browse packs, the space bar to select a pack, p to preview its sound, and enter to begin downloading selected packs. Press escape or the left arrow to cancel',
			mListen:"Ready: %1 levels unlocked. you can go back to the main menu with the left arrow key.",
			mStart: 'Start Game',
			mLearn: 'Learn the pack',
			mActions: 'This pack has %1 actions. Typical keys are space, tab, enter, backspace, and optionally arrows up, down, left, right. If you have mapped your keyboard differently, use your custom keys instead. To hear the stop action, press the period key (to the right of comma). To exit press Q',
			"yes":"Yes",
						noGameCash:"The minimum bet is %1 beatcoins, you don't have enough right now. Go play!",
						doublecash:"Double or nothing requires at least 5000 beatcoins. Sorry!",
			"no":"no",
			ok:"ok",
			
			dling: 'Downloading %2 packs please wait...',
			dlprog:"downloading pack %1 of %2...",
			dlingdone: 'Done! Rebuilding database...',
			keymapChoose: 'Press the key to replace this action: You can\'t use q, p, escape, enter or space.',
			packError: 'No packs were found on your computer. I will now proceed to download the default pack, please wait...',
			intro: 'Welcome to beatstar!\nThis is a world of music, fun and games.\nPlease read the online instructions to learn how to play.\nYou will now be put into the main menu, where you will find different options.\nI recommend you get some beatcoins by playing the default pack!\nIf you want to change the language, you will need to delete your save file found in your username folder/beatpacks/save.dat',
			keymapStart: 'We will now remap your keyboard. You will hear the sounds for the different actions, and you will be prompted to press the key you want to associate to the new actions.',
			tamperWarning: 'This pack has been tampered with and is no longer unlocked. Press enter to continue.',
			mNew: 'Get new packs',
			nopacks: 'No packs are available. If you think this is a bug, please contact me.',
			noGuardCash:"You need %1 beatcoins to buy one safeguard. You have %2.",
			mBrowse: 'buy new packs (You have %1 beatcoins )',
						mBrowseIncompleted: 'Browse uncompleted packs',
			mBrowseUnlocked:"Change to different unlocked pack",
			"youwin":"You win %1 coins!",
						"youlose":"You lose %1 coins.",
			
			mHashes: 'Rebuild packs folder',
			mDownload: 'Download new packs'
		};
		this.strings[2] = {
			newUpdate:"Hay una nueva versión disponible! Tienes la %1 y la %2 está disponible.",
			macwarning:"Atención: En un mac, por favor pulsa control opción  flecha izquierda seguido de control opción derecha o no tendrás voz.",
			mReader:"Usar tu lector de pantalla para el juego",
			mSapi:"Usar tts para el juego",
			newRate:"Esta es una prueba de la velocidad de la voz. Por favor, pulsa enter cuando hayas terminado",
			rating:"Pulsa las flechas izquierda y derecha para cambiar la velocidad. Pulsa Enter cuando hayas terminado.",
			mRate:"Cambiar velocidad de la voz",

				tutslot:`Bienvenidos!
El tragaperras de las tinieblas, es un juego muy maléfico.
Este juego usa los sonidos del pack com una máquina de 3 ruedas.
Si el pack que tienes tiene más de 5 sonidos de acción, solo se usan los primeros 5.
Lo primero que debes hacer es apostar. La apuesta mínima son 5000. Cuando hayas apostado, se descontarán de tus monedas.
Cuando hayas hecho esto, empezará a sonar una especie de rueda y se reproducirán 3 sonidos de acciones.
Si suenan 3 sonidos diferentes, perderás aún más monedas, basándote en las monedas que te quedan y en la apuesta que hiciste. No pasará nada si tienes 0.
!slot_lose_2
Si consigues 2 del mismo tipo y 1 de otro tipo, conseguirás tu apuesta de vuelta pero nada más.
!slot_lose_1
Si los 2 primeros son del mismo tipo, hay una pequeña oportunidad para que consigas el sonido de stop. Si esto pasa conseguirás alrededor del 25% de tu apuesta.
!slot_lose_3
Sin embargo, si consigues 3 iguales, ganarás tu apuesta, + casi el doble de lo que jugaste!
!slot_win_3
Disfruta!`,

		introQuestion:"Quieres un mini tutorial?",
introTut:`Bienvenido al tutorial de beatstar!
Voy a contarte cómo jugar a este gran juego.
Es un juego bastante simple, pero es muy adictivo y divertido!
En este juego, vamos a probar tus abilidades rítmicas así como tu velocidad de reacción.
Cada pack consiste en distintos niveles musicales.
Escucharás un sonido y deberás pulsar una tecla diferente dependiendo del sonido que escuchaste.
Cada pack tiene 5 sonidos, algunos tienen más de 5 que son acciones para las flechas.
También hay un sonido que indica que debes quedarte quieto, no pulsar ninguna tecla.
Por ejemplo, en el pack por defecto, este sonido indica que debes pulsar tabulador.
!a3
Deberás pulsar tabulador cuando llegue el tiempo adecuado.
!o3
Este es el sonido del tabulador.
Para saber cuándo hay que pulsar las teclas, piensa en que el juego tiene distintos ciclos.
Un ciclo es el tiempo entre un sonido de acción y el siguiente.
Sabes lo que tarda un ciclo porque al principo de cada nivel hay siempre un ciclo de silencio.
Déjame mostrártelo con un sonido.
!tutorial
Tal y como acabas de escuchar, he esperado medio ciclo a pulsar el tabulador en cada una de las acciones, porque eso me da la máxima puntuación!
Has oído el sonido del pitido y que no he pulsado ninguna tecla?
En este pack, este sonido es la acción de quieto, también se le llama congelar o stop.
Significa que si pulsas alguna tecla, fallarás.
!cling
Has oído esta campanita?
!cling
Estate atento a este sonido porque, cuanto más alto sea el tono de este sonido, más puntuación has conseguido!
Al final de cada nivel, conseguirás monedas dependiendo de tu rendimiento. Las monedas se utilizan para comprar packs, minijuegos y antifallos.
Si ves que no puedes ganar los niveles más altos, puedes comprar antifallos. Los antifallos son como vidas, es decir que por cada antifallo, podrás fallar una vez sin perder.
El juego se puede pausar con la p, y puedes salir del juego con la q.
Para salir de la mayoría de los menús, puedes pulsar la flecha izquierda o la q.
Cuando te aburras del pack por defecto, podrías utilizar la opción descargar packs... y bajarlos todos!
Disfruta!`,

		tuthighlow:`Bienvenido a la carta más alta!
Este es el típico juego de cartas. Tienes una carta y tendrás que adivinar si la próxima será más alta o más baja que la anterior.
Los valores son: El as, números 2 a 10, la sota, la reina, y el rey.
Cada carta que aciertes, ganarás más monedas, pero si pierdes y te arriegas no ganarás nada!
Suerte!`,
		tutdouble:"Este juego es 100% aleatorio y hay una oportunidad del 50/50. Ganarás o perderás? A ver a ver...",
		tutfootball:"Este juego se explica por sí solo. Escucha las instrucciones durante el juego!",
		tutcode:`Bienvenido a rompecódigos!
En este juego, tendrás que romper unos códigos que usan los sonidos de tu pack.
Para jugar, se utilizan las teclas que usas normalmente durante el juego (espacio, tab, enter y retroceso).
Primero escucharás el número de teclas que hay en el código. Entonces podrás comenzar a descubrir el código pulsando teclas.
Por ejemplo, si pulsas espacio y oyes esto:
!code_wrong
Significa que la tecla que pulsaste no era la correcta.
Sin embargo, si oyes esto:
!code_ok
Significa que es correcta. Así pues, el código comienza con espacio.
Si luego pulsas tabulador y oyes el sonido de incorrecto, sabes que la segunda tecla no es el tabulador. Tendrás que pulsar entonces la primera tecla del código, ya que cuando fallas tienes que volver a empezar con el principio del código.
Sabrás que la primera es el espacio y la segunda no es el tabulador, así que intenta con otras teclas hasta que completes el código.
Cada vez que consigas un código correcto, el número de teclas y el tiempo que tienes para descubrirlas se incrementa. Las teclas pueden repetirse en cualquier momento, pero todas estarán siempre presentes.
Es decir, no es posible que un código sea espacio tab enter espacio espacio, pero sí espacio tab retroceso espacio enter.
Cuidado!
Si tu pack utiliza las flechas como acciones, ten cuidado porque también se incluirán en el código así que tenlo en cuenta si quieres jugar con códigos mucho más difíciles!
Disfruta!!`,
		mAchTuts:"Spoilers para logros",
			mRev:"beatrevés",
		football:"Lanzamiento de penaltis",
		doublecash:"El mínimo para jugar son 5000 monedas. Lo siento!",
		achfw:"Equipo de primera",
		achhfw:"Gana un partido de penaltis",
		achfl:"Equipo de segunda",
		achhfl:"Pierde un partido de penaltis",
		achidle:"Te has quedao empanao!",
		achhidle:"Pausa el juego (pulsa la p) y déjalo pausado 60 segundos",
		saveFeature:`Felicidades, has desbloqueado la opción guardar juego!
		Pulsa la s (de save, guardar en inglés) durante un juego para guardar el estado y el nivel actuales para que puedas continuar después.
Ten en cuenta que esto no es como el antiguo seguro, el estado se guarda solo hasta que ganes o falles. se perderá el juego si compras packs, antifallos o juegas algún minijuego.
A disfrutar!`,
saved:"Guardado!",
killSave:"Esto eliminará tu juego guardado para el pack %1. Estás en el nivel %2. Continuar?",
achdl:"Doble perdedor",
achhdl:"Pierde en doble o nada",
achdw:"Doble ganador!",
achhdw:"Gana en doble o nada",
double:"Doble o nada",
newach:"Has obtenido el logro: %1!",
noach:"No tienes logros... qué raro!",
mAch:"Ver tus logros",
achw1:"Novatillo",
achhw1:"Gana tu primer pack",
achw5:"Una cervecita",
achhw5:"Gana 5 packs",
achw10:"Otra cervecita",
achhw10:"Gana en 10 packs",
achw25:"25 son 7",
achhw25:"Gana 25 packs diferentes",
achw50:"Beatadicto",
achhw50:"Gana 50 packs diferentes",
achusepinky:"Sin fallos",
achhusepinky:"Gana un pack sin usar antifallos",
achlactions:"Vete a aprender las acciones",
achhlactions:"Falla en el nivel 1",
achfingr:"Al ritmo",
achhfingr:"Mantén el ritmo durante 5 niveles o más.",
achbulk:"Descargador Viciosillo",
achhbulk:"Utiliza la opción descargar todos los packs no instalados",
achintro:"A trabajar!",
achslotwin:"Ganador afortunado",
achhslotwin:"Gana en el juego de tragaperras",
achfrust:"Frustración inevitable",
achhfrust:"Pierde con 2 ruedas iguales en el tragaperras",
achcatslots:"tragaperras catastrófico",
achhcatslots:"Pierde con 3 ruedas distintas en el tragaperras",
achrobber:"Ladrón de bancos",
achhrobber:"Consigue 4 o más códigos en el rompecódigos",
highlow:"La carta más alta",
hw:"Bienvenido a la carta más alta!",
yourCard:"Tu carta es el %1",
nextCard:"Crees que la próxima carta será más alta o más baja que el %1?",
higher:"Más alta",
lower:"Más baja",
		collect:"Obtener monedas y salir",
		achMenu:"Logros: Pulsa las flechas para moverte por tus logros, enter para reproducir uno. Puedes detener la reproducción de un logro pulsando la q.",
		card:"%1 de %2",
K:"rey",
Q:"reina",
		A:"as",
J:"sota",
		cspades:"picas",
		cdiamonds:"diamantes",
		cclubs:"bastos",
		chearts:"corazones",
				dq:"Este es un juego de riesgo. Te arriesgas a perder %1 monedas. Continuar?",
		contPack:"Continuar donde lo dejaste (nivel %1)",
		mPackTut:"Tutorial de cómo hacer packs",
packtut:`Bienvenido al editor de packs!
Primero, darte las gracias por querer crear un pack.
Es muy fácil. Primero, deberás seleccionar si editar uno de los niveles (si ya existe un archivo de tiempos llamado bpm.txt) o empezar de 0.
Cuando hayas seleccionado qué hacer, escucharás la música de los niveles seleccionados.
Deberás pulsar la barra espaciadora a la velocidad que quieres que corra el nivel. Cada pulsación del espacio es un ciclo del juego, lo que significa que tienes esa cantidad de tiempo para pulsar la tecla correcta.
Cuando hayas hecho eso 10 veces, escucharás que la música se reinicia y tu resultado.
Escucharás un sonido que se reproducirá cada ciclo. Piensa en esos ciclos como si estuvieras jugando. ¿Está sincronizado con la música? ¿Tienes suficiente tiempo para pulsar la tecla correcta?
Si no estás satisfecho con el resultado, puedes pulsar de nuevo el espacio para reiniciar la música y comenzar de nuevo con el mismo nivel.
Cuando el resultado te parezca bien, pulsa enter. Si has seleccionado más de un nivel, este se reproducirá.
Cuando estén hechos todos los niveles, se creará automáticamente el archivo bpm.txt en el pack (o se reemplazará si ya existía).
Si quieres jugar, tendrás que ponerlo en tu carpeta de usuario/beatpacks, y desbloquearlo con beatcoins.
Puedes subirlo a la web haciendo un archivo zip de la carpeta del pack y enviándolo con el formulario de subida`,
		startOver:"Comenzar desde el primer nivel",
		mSelectEdit:"Por favor selecciona el nivel a editar, o empezar de 0",
		selectPack:"Selecciona un pack a editar",
		floop:"Música del menú",
		fa1:"Sonido para la acción freeze, también se le llama acción de quieto. No necesita sonido o ya que no hay tecla que pulsar",
fa2:"Sonido de indicación de la acción para el espacio o barra espaciadora",
fo2:"Sonido de la acción para el espacio o barra espaciadora",
fa3:"Sonido de indicación de la acción para el tabulador",
fo3:"Sonido para la acción del tabulador",
fselect:"Sonido que se reproduce cuando se selecciona una opción del menú",
fa4:"sonido para la acción de la tecla enter",
fo4:"sonido para la acción de la tecla enter",
fa5:"sonido para la acción de la indicación de la tecla borrar",
fo5:"sonido para la acción de la tecla borrar",
fa6:"sonido para la indicación de la acción de la flecha arriba",
fo6:"sonido para la acción de la flecha arriba",
fa7:"sonido para la indicación de la acción de la flecha abajo",
fo7:"sonido para la acción de la flecha abajo",
fa8:"Sonido para la indicación de la acción de la flecha derecha",
fo8:"sonido para la acción de la flecha derecha",
fa9:"sonido para la indicación de la acción de la flecha izquierda",
fo9:"Sonido para la acción de la flecha izquierda",

		fwin:"Sonido que se reproduce al completar todos los niveles",
		fnlevel:"Sonido que se reproduce al cambiar de nivel, si no existe un sonido pre para ese nivel. Si no se proporciona ni nlevel ni pre, se pasa al siguiente nivel sin sonidos extra.",
		fpre1:"Pre y el número de un nivel (como pre1.ogg o pre2.ogg), se reproduce antes de que comience un nivel. Si no se proporciona ni nlevel.ogg ni pre, el juego saltará al siguiente nivel sin más sonidos extra.",
		fcredits:"Los créditos se reproducen cuando el juego termina, solo una vez.",
		fname:"Archivo utilizado como vista previa en los menús",
fboot:"Archivo que se reproduce al abrir el pack por primera vez, antes de jugar",
ffail:"Archivo que se reproduce cuando termina el juego, al fallar",
f1music:"Los niveles del juego (se requieren al menos 3 para que un pack se considere válido y deben ser loops para que el juego se sincronice. Siguen el formato <númeroNivel>music, por ejemplo 1music, 2music, 3music.",
f2music:"Los niveles del juego (se requieren al menos 3 para que un pack se considere válido y deben ser loops para que el juego se sincronice. Siguen el formato <númeroNivel>music, por ejemplo 1music, 2music, 3music.",
f3music:"Los niveles del juego (se requieren al menos 3 para que un pack se considere válido y deben ser loops para que el juego se sincronice. Siguen el formato <númeroNivel>music, por ejemplo 1music, 2music, 3music.",
		missingFiles:"Los siguientes archivos no están presentes en el pack y son necesarios para poder editarlo:",
		missingOptional:"Los siguientes archivos son opcionales y no están presentes en el pack, pero no son estrictamente necesarios. Puedes saltarte las acciones de las flechas ya que la mayoría de packs solo tienen las 4 acciones básicas.",
		lang:"Español",
		
		langs:"Selecciona tu idioma",
			"mFound":"Hemos encontrado %1 packs nuevos: ¿Qué quieres hacer?",
			mReady: 'Espera, por favor...',
			mDownloadAll: 'Descargar todos los packs no instalados (tamaño: %1 %2)',
			level:"Nivel %1",
			nodown:"No hay descargas disponibles por el momento. prueba pronto!",
			mDownloadList: 'Lista todos los packs no instalados (%1 en total)',
			buy:"comprar",
			"mBack":"volver",
			mDownloadInstructions: 'Pulsa las flechas para moverte por los packs, barra espaciadora para seleccionar un pack, la p para previsualizarlo, y enter para empezar la descarga de los seleccionados. pulsa escape o la flecha izquierda para cancelar',
			mStart: 'jugar',
			mLearn: 'aprender el pack',
			mActions: 'Este pack tiene %1 acciones. Las teclas normales son espacio, tabulador, enter, retroceso/borrar, y opcionalmente las flechas. Si has cambiado la distribución del teclado puedes usarla. Para escuchar la acción de quedarse quieto, pulsa la tecla del punto. Para salir pulsa la q.',
			dling: 'Descargando %2 packs por favor espera...',
			dlingdone: '¡Hecho! Reconstruyendo base de datos...',
			keymapChoose: 'Pulsa la tecla que quieras que reemplace a No puedes usar la q, escape, enter o espacio.',
			packError: 'No hemos encontrado packs en tu pc, vamos a bajar el pack por defecto, espera por favor...',
			intro: 'Bienvenido a beat star!\nEste es un mundo de música y diversión!\nPor favor, lee el manual en internet para aprender a jugar.\nAhora te llevaré al menú principal, donde encontrarás diferentes opciones.\nTe recomiendo que consigas unas monedas jugando el pack por defecto!\nSi quieres cambiar el idioma del juego, deberás borrar tu archivo de datos que encontrarás en tu carpeta de usuario/beatpacks/save.dat',
						keymapStart: 'Vamos a cambiar la distribución del teclado. Vas a escuchar los sonidos de las acciones y vas a tener que pulsar la tecla que quieres que corresponda para la acción.',
			dlprog:"descargando pack %1 de %2...",
			tamperWarning: 'Este pack ha sido modificado y ya no está desbloqueado. Pulsa enter para continuar.',
			mUnlocked:"Escuchar la música desbloqueada de este pack (%1 niveles)",
			mBrowseIncompleted: 'Ver packs comprados no completados',
			"yes":"sí",
			"youwin":"Ganas %1 monedas!",
			noGuardCash:"No tienes suficientes monedas. Cada antifallo cuesta %1 y tienes %2.",
						"youlose":"Pierdes %1 monedas!",
			"no":"no",
			mNew: 'Conseguir nuevos packs',
			safeget:"Consigues %1 antifallos... Que guay!",
			nopacks: 'No hay packs disponibles. Si crees que hay un error en el juego, ponte en contacto conmigo.',
			codes:"Número de teclas en el código: %1",
			unlocked:"Ya lo has comprado",
			mBrowse: 'comprar un pack (tienes %1 monedas)',
			mBrowseUnlocked: 'Cambiar a otro pack comprado',
			mHashes: 'Reconstruir base de datos de packs',
			codescracked:"Has podido desbloquear %1 códigos, con %2 acciones diferentes!",
			mainmenu:"menú principal",
			mSelect:"Por favor selecciona",
			mSafeSelect:"Por favor selecciona, con las flechas izquierda y derecha, cuántos antifallos quieres y pulsa enter.",
			mSafeguards:"Comprar antifallos (ahora %1)",
			noGameCash:"Oooh, lo siento. La apuesta mínima es de %1 monedas, no tienes suficiente. Vete a jugar!",
			bet:"selecciona tu apuesta con las flechas izquierda y derecha. Cuando te hayas decidido, pulsa enter.",
			packprice:"Este pack cuesta %1 monedas, confirma que quieres comprarlo.",
			packno:"No tienes monedas suficientes para este pack, cuesta %1.",
			safequestion:"Cuántos antifallos quieres comprar? Cuestan %1 cada una y tienes %2 monedas. Puedes comprar %3. Recuerda que solo puedes comprar 100 de una tirada. Si quieres más, dale otra vez a la opción del menú.",
			code:"rompecódigos",
			mListen:"listo: %1 niveles desbloqueados, flecha izquierda vuelve al menú principal",
			dfiles:"Descargando %1 archivos. Pulsa cualquier tecla para obtener porcentaje",
			retrieving:"Recopilando datos ",
			mDownload: 'Descargar packs',
			ok:"ok",
			mEdit:"Editor de packs",
			mGames:"minijuegos",
			buygame:"Quieres comprar %1 por %2 monedas?",
			nogame:"No tienes las %1 monedas que necesitas para este juego, solo tienes %2",
			mGameTuts:"tutoriales de minijuegos",
			
			sGames:"Selecciona un minijuego:",
			sTuts:"Selecciona un minijuego para ver la ayuda",
			cost:"Precio",
			slot:"tragamonedas de las tinieblas",
			
		};
	
	}

	get(what, rep = []) {
		let str;
		if (typeof this.strings[lang][what] !== 'undefined') {
			str = this.strings[lang][what];
		} else if (typeof this.strings[1][what] !== 'undefined') {
			str = this.strings[1][what];
		} else {
			return what;
		}
	rep.forEach((v, i) => {
		const i1 = Number(i) + 1;
		str = str.replace('%' + i1, v);
	});
	return str;
	}
	speak(what, rep = []) {
		let str;
		if (typeof this.strings[lang][what] !== 'undefined') {
			str = this.strings[lang][what];
		} else if (typeof this.strings[1][what] !== 'undefined') {
			str = this.strings[1][what];
		} else {
			speech.speak(what);
		}
	rep.forEach((v, i) => {
		const i1 = Number(i) + 1;
		str = str.replace('%' + i1, v);
	});
	speech.speak(str);
	}
async check(lng) {
let len=utils.objSize(this.strings)-2;
for (let i in this.strings[1]) {
if (!this.strings[lng].hasOwnProperty(i)) {
await new ScrollingText(i+": "+this.strings[1][i]);
}
}
}
}
export var strings = new Strings();
