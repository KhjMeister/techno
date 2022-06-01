import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AfterLoginService } from './shared/after-login.service';
import { BeforeLoginService } from './shared/before-login.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent,canActivate:[BeforeLoginService] },
  { path: 'register', component: SignupComponent,canActivate:[BeforeLoginService] },
  { path: 'profile', component: UserProfileComponent,canActivate:[AfterLoginService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}