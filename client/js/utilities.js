'use strict';
class GameUtils {
	progressPan(current, max) {
		return ((current * 200 / max) - 100) / 100;
	}

	progressPitch(current, min, max, minPitch, maxPitch) {
		return (current / (min + max)) * (maxPitch - minPitch) + minPitch;
	}

	progressVolume(current, min, max, minVolume, maxVolume) {
		if (current > max) {
			return 0;
		}
		return (current / (min + max)) * (maxVolume - minVolume) + minVolume;
	}

	getProportion(current, min, max, minVolume, maxVolume) {
		if (current > max) {
			return 0;
		}
		return (current / (min + max)) * (maxVolume - minVolume) + minVolume;
	}

	distance3D(x1, y1, z1, x2, y2, z2) {
		return Math.sqrt((x2 - x1) * (x2 - x1) +
				(y2 - y1) * (y2 - y1) +
				(z2 - z1) * (z2 - z1));
	}

	distance(jx, jy, kx, ky) {
		// Return Math.hypot(jx-kx, jy-ky)
		return Math.sqrt(((jx - kx) * (jx - kx)) + ((jy - ky)) * (jy - ky));
	}

	calculateAngle(x1, y1, x2, y2) {
		let angle = Math.atan2((y2 - y1), (x2 - x1));
		angle = (angle >= 0) ? 0 : (2 * Math.PI) + angle;
		return angle;
		// Return Math.atan2((y2 - y1),(x2 - x1));
	}

	isCollide3D(a, b) {
		return (a.x <= (b.x + b.width) && (a.x + a.width) >= b.x) && (a.y <= (b.y + b.height) && (a.y + a.height) >= b.y) && (a.z <= (b.z + b.depth) && (a.z + a.depth) >= b.z);
	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	percent(int1, int2) {
		return int1 * 100 / int2;
	}

	percentOf(int1, int2) {
		return int2 * int1 / 100;
	}

	average(arr, startIndex = 0) {
		const len = arr.length;
		let val = 0;
		let average = 0;
		if (arr.length < startIndex) {
			return -1;
		}
		for (let i = startIndex; i < arr.length; i++) {
			val += arr[i];
		}
		average = val / (len - startIndex);
		return average;
	}

	averageInt(arr, startIndex = 0) {
		const len = arr.length;
		let val = 0;
		let average = 0;
		if (arr.length < startIndex) {
			return -1;
		}
		for (let i = startIndex; i < arr.length; i++) {
			val += arr[i];
		}
		average = val / (len - startIndex);
		return Math.floor(average);
	}

	neg(num) {
		return (num >= 0 ? (num == 0 ? 0 : 1) : -1);
	}

	numericSort(a, b) {
		return (a < b ? -1 : (a == b ? 0 : 1));
	}

	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	objSize(obj) {
		let size = 0;

		let key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				size++;
			}
		}
		return size;
	}
}
export var utils = new GameUtils();