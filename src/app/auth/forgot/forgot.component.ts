import { Component, OnInit } from '@angular/core';
import { SocialLogin } from '../model/social.login';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SocialButtonsProvider } from '../services/social-buttons.provider';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public socialLoginTypes: SocialLogin[] = [];
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  /**
   *
   * @param socialButtonsProvider the service will provide the available constant list of social buttons
   */
  constructor(private socialButtonsProvider: SocialButtonsProvider) { }

  ngOnInit() {
    this.socialLoginTypes = this.socialButtonsProvider.getSocialLoginTypes();
  }

  get username(): AbstractControl {
    return this.loginForm.get("username");
  }

  get password(): AbstractControl {
    return this.loginForm.get("password");
  }

  /**
   *
   * @param sl emitted event will a type of SocialLogin
   */
  socialButtonClicked(sl: SocialLogin) {
    console.log("ForgotPasswordComponent: socialButtonClicked: ", sl);
    if (sl.short == "googleplus") { this.googleLogin(); }
    if (sl.short == "github") { this.githubLogin(); }
    else if (sl.short == "facebook") { this.facebookLogin(); }
    else if (sl.short == "twitter") { this.twitterLogin(); }
  }

  private githubLogin() {
    alert("ForgotPasswordComponent:socialButtonClicked: github login clicked ");
  }

  private googleLogin() {
    alert("ForgotPasswordComponent:socialButtonClicked: google login clicked ");
  }

  private facebookLogin() {
    alert("ForgotPasswordComponent:socialButtonClicked: facebook login clicked ");
  }

  private twitterLogin() {
    alert("ForgotPasswordComponent:socialButtonClicked: twitter login clicked ");
  }

  /**
   * 
   * @param loginForm a form group can be use for validation and data extraction inputted by users
   */
  public login(loginForm: FormGroup) {
    console.log(loginForm.valid);
    console.log(loginForm.value);
  }
}
 