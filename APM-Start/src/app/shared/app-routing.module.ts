import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './../home/welcome.component';
import { NgModule } from '@angular/core';





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
