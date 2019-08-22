import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../models/menu';
import { FavouriteMenuService } from '../../services/favourite-menu.service';

@Component({
  selector: 'app-topbar-dropmenu',
  templateUrl: './topbar-dropmenu.component.html',
  styleUrls: ['./topbar-dropmenu.component.css']
})
export class TopbarDropmenuComponent implements OnInit {

  public favouriteMenus: Menu[] = [];

  constructor(private favouriteMenuService: FavouriteMenuService) { }

  ngOnInit() {
    this.favouriteMenuService.favouriteMenuEvent$
      .subscribe(menu => {
        if (!this.favouriteMenus.some(m => m.label == menu.label))
          this.favouriteMenus.push(menu);
      });
  }

}
