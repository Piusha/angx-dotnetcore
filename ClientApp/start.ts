import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import { AppModule } from './Modules/App/app.module';
enableProdMode();
console.warn = function() {}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);