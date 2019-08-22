import { Injectable } from "@angular/core";
import { SocialLogin } from "../model/social.login";

@Injectable()
export class SocialButtonsProvider {
  private socialLoginTypes: SocialLogin[] = [];
  constructor() {
    this.socialLoginTypes.push({
      name: "Facebook",
      faIcon: "fa fa-facebook",
      short: "facebook"
    });

    this.socialLoginTypes.push({
      name: "Twitter",
      faIcon: "fa fa-twitter",
      short: "twitter"
    });

    this.socialLoginTypes.push({
      name: "GitHub",
      faIcon: "fa fa-github",
      short: "github"
    });
  }

  getSocialLoginTypes(): SocialLogin[] {
    return this.socialLoginTypes;
  }
}
