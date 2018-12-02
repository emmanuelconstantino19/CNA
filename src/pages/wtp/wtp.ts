import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { HomePage } from '../../pages/home/home';
import { AlertController, ModalController} from 'ionic-angular';

import { File } from '@ionic-native/file';
declare let cordova: any;
/**
 * Generated class for the WtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wtp',
  templateUrl: 'wtp.html',
})
export class WtpPage {
  basic = {};
  evaluated = false ;
  
  constructor(private file: File, public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
    this.reset();
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
  	this.basic['WTP_minCavKgContrib'] = "";
  	this.basic['WTP_maxCavKgContrib'] = "";
  	this.basic['WTP_minDaysContrib'] = "";
 	  this.basic['WTP_maxDaysContrib'] = "";
  	this.basic['WTP_mamahalaKolekta'] = "";
  	this.basic['WTP_buwanPinakatuyo'] = "";
  	this.basic['WTP_buwanNormal'] = "";
  	this.basic['WTP_buwanPinakamaulan'] = "";
  	this.basic['WTP_klasengImpormasyon']="";


  }

  checkValidity(){
  	// if(this.basic['WTP_minCavKgContrib'] == "")
  	// 	return false;
  	// if(this.basic['WTP_maxCavKgContrib'] == "")
  	// 	return false;
  	// if(this.basic['WTP_minDaysContrib'] == "")
  	// 	return false;
  	// if(this.basic['WTP_maxDaysContrib'] == "")
  	// 	return false;
  	// if(this.basic['WTP_mamahalaKolekta'] == "")
  	// 	return false;
  	// if(this.basic['WTP_buwanPinakatuyo'] == "")
  	// 	return false;
  	// if(this.basic['WTP_buwanNormal'] == "")
  	// 	return false;
  	// if(this.basic['WTP_buwanPinakamaulan'] == "")
  	// 	return false;
  	// if(this.basic['WTP_klasengImpormasyon'] == "")
  	// 	return false;

  	return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WtpPage');
  }

  ammendData(){
	if (this.checkValidity()== false) { 
		let alert = this.alertCtrl.create({
	    title: 'Info',
	    message: 'Fill everything first',
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
	} else {
		
  		if(this.evaluated== false){
        // this.data.headers = [];
  			this.data.splitValues(this.basic);
        // this.file.writeFile(cordova.file.externalRootDirectory + '/Download/', "SARAI_RECORDS.csv", this.data.headers.toString() + "\n", {replace: false }); 
  			this.evaluated = true;
  		}
	  
    
    this.data.writeData();  

		let alert2 = this.alertCtrl.create({
	    title: 'File written successfully',
	    message: 'Check Download directory to see output',
	    buttons: [
	      {
	        text: 'OK',
	        role: 'cancel',
	        handler: () => {	        	
	        }
	      }
	    ]
	  });
	 alert2.present();
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
	}
	}
}
