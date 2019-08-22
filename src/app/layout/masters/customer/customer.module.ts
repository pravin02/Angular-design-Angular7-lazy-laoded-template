import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerComponent } from './customer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CustomerComponent, data: { title: 'Customer' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CustomerListComponent, data: { title: 'List' } },
      { path: 'add', component: CustomerAddComponent, data: { title: 'Add' } },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  declarations: [CustomerListComponent, CustomerAddComponent, CustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerModule { }
