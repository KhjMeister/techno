import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthInterceptor } from './shared/auth.interceptor';
import { AlertifyService } from './shared/alertify.service';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { TopbarComponent } from './components/layouts/topbar/topbar.component';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    SidebarComponent,
    TopbarComponent,
    LandingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [
    AlertifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
