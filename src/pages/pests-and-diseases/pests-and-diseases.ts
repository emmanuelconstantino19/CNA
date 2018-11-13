import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { ComPlatAPage } from '../../pages/com-plat-a/com-plat-a';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the PestsAndDiseasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pests-and-diseases',
  templateUrl: 'pests-and-diseases.html',
})
export class PestsAndDiseasesPage {
  basic = {};
  evaluated = false;
  
  constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
    this.basic['PAD_PAD1'] = "";
    this.basic['PAD_PAD1Stage'] = "";
    this.basic['PAD_PAD1Control'] = "";
    this.basic['PAD_PAD1Expenses'] = "";

    this.basic['PAD_PAD2'] = "";
    this.basic['PAD_PAD2Stage'] = "";
    this.basic['PAD_PAD2Control'] = "";
    this.basic['PAD_PAD2Expenses'] = "";

    this.basic['PAD_PAD3'] = "";
    this.basic['PAD_PAD3Stage'] = "";
    this.basic['PAD_PAD3Control'] = "";
    this.basic['PAD_PAD3Expenses'] = "";

    this.basic['PAD_PAD4'] = "";
    this.basic['PAD_PAD4Stage'] = "";
    this.basic['PAD_PAD4Control'] = "";
    this.basic['PAD_PAD4Expenses'] = "";

    this.basic['PAD_PAD5'] = "";
    this.basic['PAD_PAD5Stage'] = "";
    this.basic['PAD_PAD5Control'] = "";
    this.basic['PAD_PAD5Expenses'] = "";
    
    this.basic['PAD_LumalapitSaEksperto'] = "";
    this.basic['PAD_LumalapitKelan'] = "";

    this.evaluated = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PestsAndDiseasesPage');
  }

  ammendData(){
  	if(Object.keys(this.basic).length < 22){
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
  		if(this.evaluated== false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ComPlatAPage);
    }
  }
}
