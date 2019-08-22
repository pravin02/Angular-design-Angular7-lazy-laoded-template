import { SocialButtonsProvider } from "./../services/social-buttons.provider";
import { SocialLogin } from "./../model/social.login";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  public socialLoginTypes: SocialLogin[] = [];
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl("ppp", Validators.required),
    password: new FormControl("ppp", Validators.required)
  });

  /**
   *
   * @param socialButtonsProvider the service will provide the available 
   * constant list of social buttons
   */
  constructor(
    private socialButtonsProvider: SocialButtonsProvider,
    private router: Router,
    private loginService: LoginService
  ) { }

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
    console.log("LoginComponent: socialButtonClicked: ", sl);
    if (sl.short == "googleplus") { this.googleLogin(); }
    else if (sl.short == "github") { this.githubLogin(); }
    else if (sl.short == "facebook") { this.facebookLogin(); }
    else if (sl.short == "twitter") { this.twitterLogin(); }
  }

  private githubLogin() {
    alert("LoginComponent:socialButtonClicked: github login clicked ");
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
  public login(loginForm: FormGroup) { 
    this.router.navigate(['../layout']); 
    console.log(loginForm.valid);
    console.log(loginForm.value);
   
    // this.loginService.login(loginForm.value.username, loginForm.value.password)
    //   .subscribe(response => {
    //     console.log('login response ', response);
    //     if (response.status) {          
    //       console.log('Login Success ', response.data);
    //       this.router.navigate(['../layout']);
    //     }
    //     else {
    //       alert('Login Failed ' + response.message);
    //     }
    //   }, error => {
    //     console.log('Login Error ', error);
    //   });   
  }
}
