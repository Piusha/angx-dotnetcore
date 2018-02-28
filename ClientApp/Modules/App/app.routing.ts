import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from '../Public/Signup/signup.component';
import { SigninComponent } from '../Public/Signin/signin.component';
import { SecureComponent } from '../Secure/secure.component';
import { SECURE_ROUTES } from '../Secure/secure.routes';
import { PublicComponent } from '../Public/public.component';
import { PUBLIC_ROUTES } from '../Public/public.routes';




const routes : Routes = [
    { 
        path:'', 
        redirectTo: 'signin', 
        pathMatch:'full'
    },
    { path: '', component: PublicComponent,  children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent,  children: SECURE_ROUTES },
]




export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
