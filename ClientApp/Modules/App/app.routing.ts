import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from '../Signup/signup.component';



const routes : Routes = [
    { 
        path:'', 
        component: AppComponent, 
        pathMatch:'full'
    },
    { 
        path:'signup', 
        component: SignupComponent
    }
]




export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
