import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ArianeModule } from './ariane/ariane.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(ArianeModule);