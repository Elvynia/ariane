import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
	selector: 'background',
	templateUrl: '/views/background.template.html'
})
export class BackgroundComponent implements OnChanges {
	@Input() position: number;
	private scale: PIXI.Point;
	private posLayer5: PIXI.Point;
	private posLayer4: PIXI.Point;
	private posLayer3: PIXI.Point;
	private posLayer2: PIXI.Point;
	private posLayer1: PIXI.Point;

	constructor() {
		this.position = 0;
		this.scale = new PIXI.Point(0.5, 0.42);
		this.posLayer5 = new PIXI.Point();
		this.posLayer4 = new PIXI.Point();
		this.posLayer3 = new PIXI.Point();
		this.posLayer2 = new PIXI.Point();
		this.posLayer1 = new PIXI.Point();
	}

	ngOnChanges(changes: {[key: string]: SimpleChange}) {
		if (changes['position']) {
			let prevOffset = changes['position'].previousValue;
			let delta = changes['position'].currentValue - (typeof prevOffset === 'number' ? prevOffset : 0);
			this.posLayer5.x += delta / 10;
			this.posLayer4.x += delta / 8;
			this.posLayer3.x += delta / 6;
			this.posLayer2.x += delta / 3;
			this.posLayer1.x += delta / 2;
		}
	}
}