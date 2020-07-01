import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { StudentComponent } from '../../components/student/student.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

import { AuthGuard } from "../../shared/guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'student', component: StudentComponent},
  { path: 'student/:id', component: StudentComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
