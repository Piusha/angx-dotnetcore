import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { routing } from './app.routing';

import { SigninComponent } from '../Public/Signin/signin.component';
import { SignupComponent } from '../Public/Signup/signup.component';
import { HeaderComponent } from '../Sheared/Header/header.component';
import { SecureComponent } from '../Secure/secure.component';
import { DashboardComponent } from '../Secure/Dashboard/dashboard.component';
import { PublicComponent } from '../Public/public.component';
@NgModule({

    imports:[
        BrowserModule,
        routing


    ],
    declarations:[
        AppComponent,
        SigninComponent,
        SignupComponent,
        HeaderComponent,
        SecureComponent,
        DashboardComponent,
        PublicComponent
    ],
    bootstrap:[AppComponent]

})


export class AppModule{}