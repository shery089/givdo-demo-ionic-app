import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BadgesServiceProvider } from '../../providers/badges-service/badges-service';

/**
 * Generated class for the BadgesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badges',
  templateUrl: 'badges.html',
})
export class BadgesPage {

  badges_obj: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private badgeService: BadgesServiceProvider, public loading: LoadingController) {
  }

  ionViewDidLoad() {
    this.getAllBadges();
  }

  getAllBadges() {
    let loader = this.loading.create({
      spinner: 'bubbles',
      content: 'Loading <strong>Badges</strong>',
      duration: 3000
    });

    loader.present();
    return this.badgeService.getAllBadges().subscribe(response => {
          this.badges_obj = response.data;
          loader.dismiss();
        },
        error => {
          console.log(error.status);
        });
  }

}
