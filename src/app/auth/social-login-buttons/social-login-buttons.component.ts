import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { SocialLogin } from "../model/social.login";

@Component({
  selector: "app-social-login-buttons",
  template: `
    <div class="section row mn">
      <div class="col-sm-4" *ngFor="let sl of socialLoginTypes">
        <button
          (click)="clicked(sl)"
          class="button btn-social span-left mr5 btn-block"
          [ngClass]="sl.short"
        >
          <span> <i [ngClass]="sl.faIcon"></i> </span>{{ sl.name }}
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class SocialLoginButtonsComponent implements OnInit {
  @Input()
  public socialLoginTypes: SocialLogin[] = [];
  @Output()
  public socialButtonClicked: EventEmitter<SocialLogin> = new EventEmitter<
    SocialLogin
  >();
  constructor() {}

  ngOnInit() {}

  clicked(sl: SocialLogin) {
    this.socialButtonClicked.emit(sl);
  }
}
