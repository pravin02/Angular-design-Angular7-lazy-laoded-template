import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent, data: { title: 'Employee' },
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EmployeeListComponent, data: { title: 'List' } },
      { path: 'add', component: EmployeeAddComponent, data: { title: 'Add' } },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  declarations: [EmployeeComponent, EmployeeAddComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }
