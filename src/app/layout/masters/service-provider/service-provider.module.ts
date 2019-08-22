import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProviderComponent } from './service-provider.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ServiceProviderAddComponent } from './service-provider-add/service-provider-add.component';

const routes: Routes = [
  {
    path: '', component: ServiceProviderComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ServiceProviderListComponent },
      { path: 'add', component: ServiceProviderAddComponent }
    ]
  }
];

@NgModule({
  declarations: [ServiceProviderComponent, ServiceProviderListComponent, ServiceProviderAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServiceProviderModule { }
