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
import { ContactusComponent } from '../Public/ContactUs/contactus.component';
import { SideNavigationComponent } from '../Sheared/SideNavigation/side_navigation.component';
import { CalendarComponent } from '../Secure/Calendar/calendar.component';
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
        PublicComponent,
        ContactusComponent,
        SideNavigationComponent,
        CalendarComponent
    ],
    bootstrap:[AppComponent]

})


export class AppModule{}