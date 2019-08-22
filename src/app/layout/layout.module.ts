import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SkinToolboxComponent } from './shared/skin-toolbox/skin-toolbox.component';
import { TopbarDropmenuComponent } from './shared/topbar-dropmenu/topbar-dropmenu.component';
import { FavouriteMenuService } from './services/favourite-menu.service';
import { MenuService } from './services/menu.service';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'masters', loadChildren: './masters/masters.module#MastersModule' },
      { path: 'profiles', loadChildren: './profile/profile.module#ProfileModule' },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, LeftSidebarComponent, FooterComponent, SkinToolboxComponent, TopbarDropmenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [FavouriteMenuService, MenuService]
})
export class LayoutModule { }
