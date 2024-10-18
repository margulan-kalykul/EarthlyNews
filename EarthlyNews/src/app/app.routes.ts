import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { SportComponent } from './sport/sport.component';
import { FinanceComponent } from './finance/finance.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'finance', component: FinanceComponent },
    { path: 'sport', component: SportComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
