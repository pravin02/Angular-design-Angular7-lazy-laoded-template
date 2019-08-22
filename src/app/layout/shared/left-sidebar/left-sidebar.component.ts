import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  @Input('menues')
  public menues: Menu[];

  constructor() { }

  ngOnInit() {
  }

}
