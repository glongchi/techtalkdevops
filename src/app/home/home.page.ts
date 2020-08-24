import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title:"Patient & Episodes managment"
  constructor(public navCtrl: NavController) {}

  
  toPatient() {
    this.navCtrl.navigateForward(['/patients']);
  }
  toEpisode() {
    this.navCtrl.navigateForward(['/episodes']);
  }

  toFollowup() {
    this.navCtrl.navigateForward(['/followups']);
  }

}
