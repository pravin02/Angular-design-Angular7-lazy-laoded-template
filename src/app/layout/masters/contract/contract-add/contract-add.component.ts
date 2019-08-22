import { Component, OnInit } from '@angular/core';
import { FavouriteMenuService } from 'src/app/layout/services/favourite-menu.service';

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {

  public isFavourite: boolean;

  constructor(private favouriteMenuService: FavouriteMenuService) { }

  ngOnInit() {
  }

  public addToFavourite() {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite)
      this.favouriteMenuService.addToFavourite({ label: 'Contract Add', link: './masters/contract/add', icon: 'glyphicon glyphicon-book' });
  }
}
