import { Component, OnInit } from "@angular/core";
import { NavController, MenuController } from "@ionic/angular";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController
  ) {}

  /**use ionic lifecycle hook to update splitpane state for this specific page */
  public ionViewWillEnter(): void {
    this.menuCtrl.enable(false);
  }

  /**rollback your custom splitspane status when leaving page */
  public ionViewWillLeave(): void {
    // Enable it again when leaving the page
    this.menuCtrl.enable(true);
  }

  ngOnInit() {}

  goHome() {
    this.navCtrl.navigateRoot(["/home"]);
  }
}
