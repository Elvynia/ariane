import {Component, ViewChild} from '@angular/core';

import {TrilliangularService} from '@trilliangular/core';
import {PixiSpineComponent} from '@trilliangular/runtime-pixi'

@Component({
	selector: 'ariane',
	templateUrl: '/views/ariane.template.html',
	styleUrls: ['../css/ariane.css'],
	providers: [TrilliangularService]
})
export class ArianeComponent {
	@ViewChild('player') playerComp: PixiSpineComponent;
	private backgroundOffset: number;
	private directions: [boolean, boolean];

	private get player(): PIXI.spine.Spine {
		return <PIXI.spine.Spine> this.playerComp.instance;
	}

	constructor() {
		this.backgroundOffset = 0;
		this.directions = [false, false];
	}

	private update(delta: number) {
		if (this.directions[0]) {
			this.backgroundOffset += delta;
			
		} else if (this.directions[1]) {
			this.backgroundOffset -= delta;
		}
	}

	private init() {
		this.player.stateData.setMixByName('run', 'idle', 0.4);
		this.player.stateData.setMixByName('idle', 'run', 0.2);
		this.player.stateData.setMixByName('jump', 'idle', 0.4);
		this.player.stateData.setMixByName('jump', 'run', 0.2);
		this.player.stateData.setMixByName('idle', 'jump', 0.2);
		this.player.stateData.setMixByName('run', 'jump', 0.2);
		this.player.state.setAnimationByName(0, 'idle', true);
	}

	private updateDirections(moving: boolean, right: boolean) {
		if (right) {
			this.directions[1] = moving;
			this.player.skeleton.flipX = false;
		} else {
			this.directions[0] = moving;
			this.player.skeleton.flipX = true;
		}
		if (moving) {
			this.player.state.setAnimationByName(0, 'run', true);
		} else {
			this.player.state.setAnimationByName(0, 'idle', true);
		}
	}

	private jump() {
		this.player.state.setAnimationByName(0, 'jump', false);
		if (this.directions[0] || this.directions[1]) {
			this.player.state.addAnimationByName(0, 'run', true, 1);
		} else {
			this.player.state.addAnimationByName(0, 'idle', true, 1);
		}
	}
}