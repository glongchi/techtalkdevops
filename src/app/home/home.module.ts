import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { WelcomeComponent } from "./welcome/welcome.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: "home",
        component: HomePage,
      },

      {
        path: "",
        redirectTo: "/welcome",
        pathMatch: "full",
      },
    ]),
  ],
  declarations: [HomePage, WelcomeComponent],
})
export class HomePageModule {}
