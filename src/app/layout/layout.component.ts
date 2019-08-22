import { Component, OnInit, Inject, AfterContentChecked, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Menu } from '../models/menu';
import { MenuService } from './services/menu.service';

declare var Core;
declare var Demo;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit, AfterContentInit {

  menues: Menu[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,
    private menuService: MenuService) { }

  ngOnInit() {
    this.menues = this.menuService.getMenues();
  }

  ngAfterContentInit() {
    this.document.body.className = "dashboard-page sb-l-o sb-r-c";
    setTimeout(() => {
      // Init Theme Core      
      Core.init();
      // Init Demo JS
      Demo.init();
    }, 100);
  }
}
