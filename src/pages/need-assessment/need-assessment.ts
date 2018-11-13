import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { DecisionMakingPage } from '../../pages/decision-making/decision-making';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the NeedAssessmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-need-assessment',
  templateUrl: 'need-assessment.html',
})
export class NeedAssessmentPage {
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
    this.basic['NA_FerCom'] = false;
    this.basic['NA_AEW'] = false;
    this.basic['NA_SemTraining'] = false;
    this.basic['NA_OldMethod'] = false;
    this.basic['NA_SelfExp'] = false;
    this.basic['NA_OtherFert'] = false;

    this.basic['NA_CropForm'] = false;
    this.basic['NA_LandForm'] = false;
    this.basic['NA_Permit'] = "";
    this.basic['NA_Trad'] = "";
    this.basic['NA_IrrigOther'] = false;

    this.basic['NA_TypeLand'] = "";
    this.basic['NA_MarketPrice'] = "";

    this.basic['NA_Rainfall'] = false;
    this.basic['NA_OtherPlantDate'] = false;
    this.basic['NA_TargetMarketDate'] = false;
    this.basic['NA_PermitDate'] = "";
    this.basic['NA_TradDate'] = false;
    this.basic['NA_OthersDate'] = "";

    this.basic['NA_Consult'] = "";
    this.basic['NA_Harvest'] = false;
    this.basic['NA_PermiBWeather'] = false;
    this.basic['NA_TradBWeather'] = false;
    this.basic['NA_None'] = false;
    this.basic['NA_OtherBWeather'] = "";
    this.basic['NA_Report'] = "";

    this.basic['NA_Barangay'] = false;
    this.basic['NA_AEW2'] = false;
    this.basic['NA_Leader'] = false;
    this.basic['NA_OtherFarmers'] = false;
    this.basic['NA_OtherInquiry'] = "";

    this.basic['NA_ReceiveInfo'] = "";
    this.evaluated=false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NeedAssessmentPage');
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
  		if(this.evaluated==false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(DecisionMakingPage);	
  	}
  	
  }
}
