import { SocialButtonsProvider } from "./services/social-buttons.provider";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { RouterModule, Route } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SocialLoginButtonsComponent } from "./social-login-buttons/social-login-buttons.component";
import { AuthheaderComponent } from './authheader/authheader.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

export const routes: Route[] = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent, data: { title: 'Login' } },
      { path: "register", component: RegisterComponent, data: { title: 'Register' } },
      { path: "forgot", component: ForgotComponent, data: { title: 'Forgot' } },
      { path: "**", redirectTo: "login" }
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    SocialLoginButtonsComponent,
    AuthheaderComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, HttpClientModule],
  exports: [RouterModule],
  providers: [SocialButtonsProvider, LoginService]
})
export class AuthModule { }
