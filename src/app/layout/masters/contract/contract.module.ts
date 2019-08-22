import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractAddComponent } from './contract-add/contract-add.component';
import { ContractComponent } from './contract.component';

const routes: Routes = [
  {
    path: '', component: ContractComponent, data : {title : 'Contract'},
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ContractListComponent, data: { title: 'List' } },
      { path: 'add', component: ContractAddComponent, data: { title: 'Add' } },
      { path: '**', redirectTo: 'list' }
    ]
  }
];
@NgModule({
  declarations: [ContractComponent, ContractListComponent, ContractAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ContractModule { }
