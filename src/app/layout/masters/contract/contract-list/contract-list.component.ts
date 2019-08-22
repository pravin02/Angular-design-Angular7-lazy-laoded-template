import { Component, OnInit } from '@angular/core';
import { FavouriteMenuService } from '../../../services/favourite-menu.service';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  public isFavourite: boolean;

  constructor(private favouriteMenuService: FavouriteMenuService,
    private menuService: MenuService) { }

  ngOnInit() {
  }

  public addToFavourite() {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite) {
      let menu = this.menuService.findMenu('Contract');
      console.log(menu);
      this.favouriteMenuService.addToFavourite(menu);
    }
  }
}