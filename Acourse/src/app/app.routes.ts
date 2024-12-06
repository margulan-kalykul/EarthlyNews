import { Routes } from '@angular/router';
import { MainWaveComponent } from './main-wave/main-wave.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseFilesComponent } from './course-files/course-files.component';
import { FilePdfComponent } from './file-pdf/file-pdf.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainWaveComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'courses', component: CoursesListComponent},
    {path: 'course/:name', component: CourseFilesComponent},
    {path: 'course/:name/:file_name', component: FilePdfComponent},
    {path: 'account', component: AccountComponent},
];
