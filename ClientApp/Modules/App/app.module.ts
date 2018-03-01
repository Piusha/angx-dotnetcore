import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule }     from '@angular/http';



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
import { CustomTableComponent } from '../Sheared/Table/table.component';
import { ItemsComponent } from '../Secure/Items/items.component';

@NgModule({

    imports:[
        BrowserModule,
        routing,
        FormsModule, 
        ReactiveFormsModule,
        HttpModule

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
        CalendarComponent,
        CustomTableComponent,
        ItemsComponent
    ],
    bootstrap:[AppComponent]

})


export class AppModule{}