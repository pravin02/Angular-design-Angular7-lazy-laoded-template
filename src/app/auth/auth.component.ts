import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var Core;
declare var Demo;
declare var CanvasBG;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.className = "external-page sb-l-c sb-r-c";
  }

  ngOnInit() {
    // Init Theme Core
    Core.init();
    // Init Demo JS
    Demo.init();
    // Init CanvasBG and pass target starting location
    CanvasBG.init({
      Loc: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 3.3
      }
    });

  }
}
