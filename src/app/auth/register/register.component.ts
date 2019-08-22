import { Component, OnInit } from "@angular/core";
import { SocialButtonsProvider } from "../services/social-buttons.provider";
import { SocialLogin } from "../model/social.login";
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public socialLoginTypes: SocialLogin[] = [];

  constructor(private socialButtonsProvider: SocialButtonsProvider) { }

  ngOnInit() {
    this.socialLoginTypes = this.socialButtonsProvider.getSocialLoginTypes();
  }

  /**
   *
   * @param sl emitted event will a type of SocialLogin
   */
  socialButtonClicked(sl: SocialLogin) {
    console.log("LoginComponent: socialButtonClicked: ", sl);
    if (sl.short == "googleplus") { this.googleLogin(); }
    else if (sl.short == "github") { this.githubLogin(); }
    else if (sl.short == "facebook") { this.facebookLogin(); }
    else if (sl.short == "twitter") { this.twitterLogin();}
  }

  private githubLogin() {
    alert("RegistrationComponent:socialButtonClicked: github login clicked ");
  }

  private googleLogin() {
    alert("LoginComponent:socialButtonClicked: google login clicked ");
  }

  private facebookLogin() {
    alert("LoginComponent:socialButtonClicked: facebook login clicked ");
  }

  private twitterLogin() {
    alert("LoginComponent:socialButtonClicked: twitter login clicked ");
  }

  /**
   * 
   * @param loginForm a form group can be use for validation and 
   * data extraction inputted by users
   */
  public registr(loginForm: FormGroup) {
    console.log(loginForm.valid);
    console.log(loginForm.value);

//    this.router.navigate(['../layout']);
  }
}
