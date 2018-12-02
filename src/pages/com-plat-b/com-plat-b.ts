import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { ComPlatCPage } from '../../pages/com-plat-c/com-plat-c';
import { AlertController, ModalController} from 'ionic-angular';

/**
 * Generated class for the ComPlatBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com-plat-b',
  templateUrl: 'com-plat-b.html',
})
export class ComPlatBPage {
  basic  = {};
  evaluated = false;
  selectMul_11 = false;
  selectMul_12 = false;
  selectMul_13 = false;

 constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  selectAll(num){
    switch (num) {
      case 11:
          this.selectMul_11 = !(this.selectMul_11);
        break;
      // case 12:
      //     this.selectMul_12 = !(this.selectMul_12);
      //   break;
      case 13:
          this.selectMul_13 = !(this.selectMul_13);
        break;
      default:
        // do nothing...
      break;
      
    }
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
    this.basic['CP_Ani'] = false; 
    this.basic['CP_TulongBabaGastos'] = false; 
    this.basic['CP_TulongBabaSayang'] = false; 
    this.basic['CP_Libre'] = false; 
    this.basic['CP_Mapagkakatiwalaan'] = false; 
    this.basic['CP_MadalingIntindi'] = false; 
    this.basic['CP_B1_11'] = false; 
    this.basic['CP_B2_11'] = false; 
    this.basic['CP_B3_11'] = false; 
    this.basic['CP_B4_11'] = false; 
    this.basic['CP_B5_11'] = false; 
    this.basic['CP_B6_11'] = false; 
    this.basic['CP_B7_11'] = false; 
    this.basic['CP_B8_11'] = false; 
    this.basic['CP_B9_11'] = false; 
    this.basic['CP_B10_11'] = false; 
    this.basic['CP_B11_11'] = false; 
    this.basic['CP_Pinagkakatiwalaan'] = "";
    this.basic['CP_MadalingIntindi2'] = false; 
    this.basic['CP_Eksperto'] = false; 
    this.basic['CP_Libre2'] = false; 
    this.basic['CP_Pinupunthan'] = false; 
    
    this.evaluated=false;
  }

 checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPlatBPage');
  }

  checkValidity(){
    // if(this.basic['CP_Pinagkakatiwalaan'] == "")
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
      this.data.cna42_ans = this.data.code + ',';

      var infosource = '';
      infosource += ((this.basic['CP_B1_11']) ? '1,':''); 
      infosource += ((this.basic['CP_B2_11']) ? '2,':'');
      infosource += ((this.basic['CP_B3_11']) ? '3,':''); 
      infosource += ((this.basic['CP_B4_11']) ? '4,':''); 
      infosource += ((this.basic['CP_B5_11']) ? '5,':''); 
      infosource += ((this.basic['CP_B6_11']) ? '6,':''); 
      infosource += ((this.basic['CP_B7_11']) ? '7,':''); 
      infosource += ((this.basic['CP_B8_11']) ? '8,':''); 
      infosource += ((this.basic['CP_B9_11']) ? '9,':''); 
      infosource += ((this.basic['CP_B10_11']) ? '10,':''); 
      infosource += ((this.basic['CP_B11_11']) ? '11,':'');

      this.data.cna42_ans += this.data.cleanString(infosource) + ','
      + this.data.cleanString(this.basic['CP_Pinagkakatiwalaan']) + ',';

      var reasonForTrust = '';

      reasonForTrust += ((this.basic['CP_MadalingIntindi2']) ? '1,':'');
      reasonForTrust += ((this.basic['CP_Eksperto']) ? '2,':''); 
      reasonForTrust += ((this.basic['CP_Libre2']) ? '3,':''); 
      reasonForTrust += ((this.basic['CP_Pinupunthan']) ? '4,':'');

      this.data.cna42_ans += this.data.cleanString(reasonForTrust) + '\n';

      console.log(this.data.cna42_ans);


  		if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ComPlatCPage);	
  	}	
  }
}
