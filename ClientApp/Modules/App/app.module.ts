import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupComponent } from '../Signup/signup.component';

import { routing } from './app.routing';
@NgModule({

    imports:[
        BrowserModule,
        routing


    ],
    declarations:[
        AppComponent,
        SignupComponent
    ],
    bootstrap:[AppComponent]

})


export class AppModule{}