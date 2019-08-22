import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NoPageComponent } from "./no-page/no-page.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: "layout", loadChildren: "./layout/layout.module#LayoutModule" },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [AppComponent, NoPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
