import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { FarmRelCharPage } from '../../pages/farm-rel-char/farm-rel-char';
import { AlertController, ModalController} from 'ionic-angular';

/**
 * Generated class for the SocioDemogTable1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socio-demog-table1',
  templateUrl: 'socio-demog-table1.html',
})
export class SocioDemogTable1Page {
  basic={};
  evaluated = false;
  dataReset = false;

 constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }
  
  reset(){
    this.basic['SDP_mLandPrep'] = "";
    this.basic['SDP_fLandPrep'] = "";
    this.basic['SDP_mPlanting'] = "";
    this.basic['SDP_fPlanting'] = "";
    this.basic['SDP_mGrowing'] = "";
    this.basic['SDP_fGrowing'] = "";
    this.basic['SDP_mHarvesting'] = "";
    this.basic['SDP_fHarvesting'] = "";
    this.basic['SDP_mStoring'] = "";
    this.basic['SDP_fStoring'] = "";
    this.basic['SDP_mMarketing'] = "";
    this.basic['SDP_fMarketing'] = "";
    this.basic['SDP_mFerApp'] = "";
    this.basic['SDP_fFerApp'] = "";
    this.basic['SDP_mPaDM'] = "";
    this.basic['SDP_fPaDM'] = "";

    //SDP TABLE 2
    this.basic['SDP_mPlanning'] = "";
    this.basic['SDP_fPlanning'] = "";
    this.basic['SDP_mDecisionMaking'] = "";
    this.basic['SDP_fDecisionMaking'] = "";      
    this.basic['SDP_mBudgeting'] = "";
    this.basic['SDP_fBudgeting'] = "";
    this.basic['SDP_mFinancing'] = "";
    this.basic['SDP_fFinancing'] = "";
    this.basic['SDP_mPurchasing'] = "";
    this.basic['SDP_fPurchasing'] = "";
    this.basic['SDP_mAttending'] = "";
    this.basic['SDP_fAttending'] = "";
    this.basic['SDP_mPostHarvest'] = "";
    this.basic['SDP_fPostHarvest'] = "";
    this.basic['SDP_mOperating'] = "";
    this.basic['SDP_fOperating'] = "";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocioDemogTable1Page');
  }

  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }

  ammendData(){

  	if(Object.keys(this.basic).length < 32){
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
	  	this.navCtrl.push(FarmRelCharPage);	
  	}
  }
}
