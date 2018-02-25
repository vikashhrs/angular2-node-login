import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './../components/login.component/login.component';
import { RegistrationComponent } from './../components/registration.component/registration.component';
import { DashboardComponent } from './../components/dashboard.component/dashboard.component'
import { HomeComponent } from './../components/home.component/home.component'

const routes : Routes = [
    { 
        path: '', redirectTo: 'home', pathMatch: 'full' 
    },
    {
        path : 'home', component : HomeComponent
    },
    {
        path : 'login', component : LoginComponent
    },
    {
        path : 'register', component : RegistrationComponent
    },
    {
        path : 'dashboard', component : DashboardComponent
    }
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],

    exports : [
        RouterModule
    ]
})

export class AppRoutingModule{}

export const RoutingComponents = [LoginComponent, RegistrationComponent, DashboardComponent, HomeComponent]