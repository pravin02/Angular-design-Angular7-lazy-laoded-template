import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandOwnerComponent } from './land-owner.component';
import { Routes, RouterModule } from '@angular/router';
import { LandOwnerListComponent } from './land-owner-list/land-owner-list.component';
import { LandOwnerAddComponent } from './land-owner-add/land-owner-add.component';

const routes: Routes = [
  {
    path: '', component: LandOwnerComponent, data: { title: 'Land Owner' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: LandOwnerListComponent, data: { title: 'List' } },
      { path: 'add', component: LandOwnerAddComponent, data: { title: 'Add' } },
      { path: '**', redirectTo: 'list' }
    ]
  }
];
@NgModule({
  declarations: [LandOwnerComponent, LandOwnerListComponent, LandOwnerAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandOwnerModule { }
