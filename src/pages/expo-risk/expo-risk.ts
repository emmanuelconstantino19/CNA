import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { KccPage } from '../../pages/kcc/kcc';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the ExpoRiskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expo-risk',
  templateUrl: 'expo-risk.html',
})
export class ExpoRiskPage {

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
    this.basic['ER_StrongWind'] = "";
    this.basic['ER_Flood'] = "";
    this.basic['ER_Erosion'] = "";
    this.basic['ER_Storm'] = "";
    this.basic['ER_Drought'] = "";
    this.basic['ER_Rainfall'] = "";
    this.basic['ER_PriceVolatility'] = "";

    this.basic['AM_C11'] = false; 
    this.basic['AM_C12'] = false; 
    this.basic['AM_1_IfNotReason'] = "";
    this.basic['AM_C21'] = false; 
    this.basic['AM_C22'] = false; 
    this.basic['AM_2_IfNotReason'] = "";
    this.basic['AM_C31'] = false; 
    this.basic['AM_C32'] = false; 
    this.basic['AM_3_IfNotReason'] = "";
    this.basic['AM_C41'] = false; 
    this.basic['AM_C42'] = false; 
    this.basic['AM_4_IfNotReason'] = "";
    this.basic['AM_C51'] = false; 
    this.basic['AM_C52'] = false; 
    this.basic['AM_5_IfNotReason'] = "";
    this.basic['AM_C61'] = false; 
    this.basic['AM_C62'] = false; 
    this.basic['AM_6_IfNotReason'] = "";
    this.basic['AM_C71'] = false; 
    this.basic['AM_C72'] = false; 
    this.basic['AM_7_IfNotReason'] = "";
    this.basic['AM_C81'] = false; 
    this.basic['AM_C82'] = false; 
    this.basic['AM_8_IfNotReason'] = "";
    this.basic['AM_C91'] = false; 
    this.basic['AM_C92'] = false; 
    this.basic['AM_9_IfNotReason'] = "";
    this.basic['AM_C101'] = false; 
    this.basic['AM_C102'] = false; 
    this.basic['AM_10_IfNotReason'] = "";
    this.basic['AM_C111'] = false; 
    this.basic['AM_C112'] = false; 
    this.basic['AM_11_IfNotReason'] = "";
    this.basic['AM_C121'] = false; 
    this.basic['AM_C122'] = false; 
    this.basic['AM_12_IfNotReason'] = "";
    this.basic['AM_C131'] = false; 
    this.basic['AM_C132'] = false; 
    this.basic['AM_13_IfNotReason'] = "";
    this.basic['AM_C141'] = false; 
    this.basic['AM_C142'] = false; 
    this.basic['AM_14_IfNotReason'] = "";
    this.basic['AM_C151'] = false; 
    this.basic['AM_C152'] = false; 
    this.basic['AM_15_IfNotReason'] = "";
    this.basic['AM_C161'] = false; 
    this.basic['AM_C162'] = false; 
    this.basic['AM_16_IfNotReason'] = "";
    this.basic['AM_C171'] = false; 
    this.basic['AM_C172'] = false; 
    this.basic['AM_17_IfNotReason'] = "";
    this.basic['AM_C181'] = false; 
    this.basic['AM_C182'] = false; 
    this.basic['AM_18_IfNotReason'] = "";
    this.basic['AM_C191'] = false; 
    this.basic['AM_C192'] = false; 
    this.basic['AM_19_IfNotReason'] = "";
    this.basic['AM_C201'] = false; 
    this.basic['AM_C202'] = false; 
    this.basic['AM_20_IfNotReason'] = "";

    this.evaluated = false;
  }

  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpoRiskPage');
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
  		if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(KccPage);	
  	}
  }	
}
