import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TrilliangularModule}  from '@trilliangular/core';
import {TgInputsModule}  from '@trilliangular/inputs';
import {RuntimePixiModule} from '@trilliangular/runtime-pixi';

import {ArianeComponent} from './ariane.component';
import {BackgroundComponent} from '../background/background.component';

@NgModule({
	imports: [
		BrowserModule,
		TrilliangularModule,
		TgInputsModule,
		RuntimePixiModule
	],
	declarations: [
		ArianeComponent,
		BackgroundComponent
	],
	bootstrap: [ArianeComponent]
})
export class ArianeModule {
}