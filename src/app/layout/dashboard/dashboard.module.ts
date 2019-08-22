import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './services/dashboard.service';
import { PanelModule } from '../../components/panels/panel.module';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    PanelModule
  ],
  exports: [RouterModule],
  providers: [DashboardService]

})
export class DashboardModule { }
