import { Component, OnInit } from '@angular/core';
import { Dashboard } from './models/dashboard.model';
import { DashboardService } from './services/dashboard.service';
import { finalize, delay } from 'rxjs/operators';
import { FavouriteMenuService } from '../services/favourite-menu.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isFavourite: boolean;
  public dashboard: Dashboard = new Dashboard();

  constructor(
    private dashboardService: DashboardService,
    private favouriteMenuService: FavouriteMenuService,
    private menuService: MenuService

  ) { }

  ngOnInit() {
    this.getDashboardData();
  }

  public getDashboardData() {
    this.dashboardService.getDashboard()
      //.pipe(finalize(() => console.log('API call completed')))
      .subscribe(response => {
        this.dashboard = response.data;
      }, error => {
        console.log('Dashboard Error ', error);
      });
  }

  public addToFavourite() {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite) {
      let menu = this.menuService.findMenu('Dashboard');
      this.favouriteMenuService.addToFavourite(menu);
    }
  }

}
