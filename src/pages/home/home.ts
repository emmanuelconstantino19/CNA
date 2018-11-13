import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { SocioDemogPage } from '../../pages/socio-demog/socio-demog';
import { AlertController, ModalController} from 'ionic-angular';
import { File } from '@ionic-native/file';

//for teting purposes only
import { KccPage } from '../../pages/kcc/kcc';
import { ComPlatAPage } from '../../pages/com-plat-a/com-plat-a';
import { WtpPage } from '../../pages/wtp/wtp';
import { FarmRelCharPage } from '../../pages/farm-rel-char/farm-rel-char';

declare let cordova: any;

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  basic = {};
  evaluated = false;
  // dataReset = false;
  
  constructor(private file: File, public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
  	this.reset();
    // this fileWrite is here just to request permisison for memory
    this.file.writeFile(cordova.file.externalApplicationStorageDirectory, "test.txt", "THIS FILE IS HERE TO CATCH ACCESS TO MEDIA", { replace: false });
  }


  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
    this.basic['qCode'] = "";
    this.basic['date'] = "";
    this.basic['enumName'] = "";
    this.basic['name'] = "";  
    this.basic['address'] = "";
    this.basic['age'] = "";
    this.basic['sex'] = "";
    this.basic['civil'] = "";
    this.basic['contact'] = "";


    this.evaluated = false;
  }

  checkValidity(){
    // if(this.basic['qCode'] == "")
    //   return false;
    // if(this.basic['date'] == "")
    //   return false;
    // if(this.basic['enumName'] == "")
    //   return false;
    // if(this.basic['name'] == "")
    //   return false;
    // if(this.basic['address'] == "")
    //   return false;
    // if(this.basic['age'] == "")
    //   return false;
    // if(this.basic['sex'] == "")
    //   return false;
    // if(this.basic['civil'] == "")
    //   return false;
    // if(this.basic['contact'] == "")
    //   return false;
    return true;
  }

  ammendData(){
  	if(this.checkValidity() == false){
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
	  	this.navCtrl.push(SocioDemogPage);
      // this.navCtrl.push(ComPlatAPage);
      // this.navCtrl.push(WtpPage);


      // this.file.writeFile(cordova.file.externalRootDirectory + '/Download/', "SARAI_RECORDS.csv", this.data.headers.toString() + "," + "Notes" + "\n", {replace: false });	
  	    
      }
    }


  checkValue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
  	return this.evaluated;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
  }
 
}
