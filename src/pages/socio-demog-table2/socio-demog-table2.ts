import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { AlertController} from 'ionic-angular';

/**
 * Generated class for the SocioDemogTable2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socio-demog-table2',
  templateUrl: 'socio-demog-table2.html',
})
export class SocioDemogTable2Page {
	basic = {};
	evaluated = 0 ;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SocioDemogTable2Page');
  }

  ammendData(){
  	if(Object.keys(this.basic).length < 5){
  		let alert = this.alertCtrl.create({
	    title: 'Info',
	    message: 'Fill Everything First Before Proceeding',
	    buttons: [
	      {
	        text: 'OK',
	        role: 'cancel',
	        handler: () => {	        	
	        }
	      }
	    ]
	  });
	 alert.present();
  	}
  	else{
  		if(this.evaluated==0){
  			this.data.splitValues(this.basic);
  			this.evaluated = 1;
  		}
	  	// this.navCtrl.push(SocioD);	
  	}
  	
  }

}
