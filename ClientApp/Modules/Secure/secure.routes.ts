import { Routes } from "@angular/router";
import { DashboardComponent } from "./Dashboard/dashboard.component";

export const SECURE_ROUTES:Routes =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
]