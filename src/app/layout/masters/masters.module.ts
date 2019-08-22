import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersComponent } from './masters.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MastersComponent, data: { title: 'Master' },
    children: [
      { path: '', redirectTo: 'contract', pathMatch: 'full' },
      { path: 'contract', loadChildren: './contract/contract.module#ContractModule' },
      { path: 'land-owner', loadChildren: './land-owner/land-owner.module#LandOwnerModule' },
      { path: 'service-provider', loadChildren: './service-provider/service-provider.module#ServiceProviderModule' },
      { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
      { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
      { path: '**', redirectTo: 'contract' }
    ]
  }
];
@NgModule({
  declarations: [MastersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MastersModule { }
