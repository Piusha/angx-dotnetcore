import { Routes } from "@angular/router";
import { SignupComponent } from "./Signup/signup.component";
import { SigninComponent } from "./Signin/signin.component";
import { ContactusComponent } from "./ContactUs/contactus.component";


export const PUBLIC_ROUTES:Routes =[
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { 
        path:'signup', 
        component: SignupComponent
    },
    { 
        path:'signin', 
        component: SigninComponent
    },
    { 
        path:'contact-us', 
        component: ContactusComponent
    },
]