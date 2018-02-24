import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({

    imports:[
        BrowserModule,

    ],
    declarations:[
        AppComponent
    ],
    bootstrap:[AppComponent]

})


export class AppModule{}