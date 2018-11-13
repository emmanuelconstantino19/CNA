import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { PestsAndDiseasesPage } from '../../pages/pests-and-diseases/pests-and-diseases';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the FarmRelChar4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farm-rel-char4',
  templateUrl: 'farm-rel-char4.html',
})
export class FarmRelChar4Page {
  basic = {};
  evaluated = false;
  selectMul_4 = false;
  selectMul_6 = false;
  selectMul_7 = false;
  selectMul_8 = false;

  constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  selectAll(num){
    switch (num) {
      case 4:
          this.selectMul_4 = !(this.selectMul_4);
        break;
      case 6:
          this.selectMul_6 = !(this.selectMul_6);
        break;
      case 7:
          this.selectMul_7 = !(this.selectMul_7);
        break;
      case 8:
          this.selectMul_8 = !(this.selectMul_8);
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
    this.basic['FRC_Palengke'] = false;
    this.basic['FRC_Cooperative'] = false;
    this.basic['FRC_Trader'] = false;
    this.basic['FRC_SelfSell'] = false;
    this.basic['FRC_HouseFood'] = false;

    this.basic['FRC_LoanPaymentDetails'] = "";
    
    this.basic['FRC_Asawa'] = false;
    this.basic['FRC_Magulang'] = false;
    this.basic['FRC_Anak'] = false;
    this.basic['FRC_Kapatid'] = false;
    this.basic['FRC_Kamaganak'] = false;
    this.basic['FRC_Laborer'] = false;

    this.basic['FRC_Pests'] = false;
    this.basic['FRC_Storm'] = false;
    this.basic['FRC_Drought'] = false;
    this.basic['FRC_NoCapital'] = false;
    this.basic['FRC_NoLaborer'] = false;

    this.basic['FRC_mainWork'] = "";
    this.basic['FRC_InsuranceAmount'] = "";
    this.basic['FRC_nonInsuranceReason'] = "";
    this.basic['FRC_CropInsurancePerception'] = "";

  	this.evaluated = false;
  }

  checkvalue(){
  	if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }

  checkValidity(){
    // if(this.basic['FRC_LoanPaymentDetails'] == "")
    //   return false;
    // if(this.basic['FRC_mainWork'] == "")
    //   return false;
    // if(this.basic['FRC_InsuranceAmount'] == "")
    //   return false;
    // if(this.basic['FRC_nonInsuranceReason'] == "")
    //   return false;
    // if(this.basic['FRC_CropInsurancePerception'] == "")
    //   return false;

    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmRelChar4Page');
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
	  	this.navCtrl.push(PestsAndDiseasesPage);	
  	}
  	
  }
}
