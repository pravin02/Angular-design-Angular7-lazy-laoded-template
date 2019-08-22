import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'company-profile', pathMatch: 'full' },
      { path: 'company-profile', component: CompanyProfileComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'update-password', component: UpdatePasswordComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  declarations: [ProfileComponent, CompanyProfileComponent, UserProfileComponent, UpdatePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
