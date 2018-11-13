import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { FarmRelChar3Page } from '../../pages/farm-rel-char3/farm-rel-char3';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the FarmRelChar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farm-rel-char2',
  templateUrl: 'farm-rel-char2.html',
})
export class FarmRelChar2Page {

  basic = {};
  evaluated = false;
  // dataReset = false;
  
  constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }
  
  reset(){
    this.basic['FRC_dSPHL'] = "";
    this.basic['FRC_dSPFL'] = "";
    this.basic['FRC_dSPMA'] = "";
    this.basic['FRC_dSPIQ'] = "";
    this.basic['FRC_dSPWage'] = "";
    this.basic['FRC_dSPAmount'] = "";
    this.basic['FRC_dSPMF'] = "";
    this.basic['FRC_dLPHL'] = "";
    this.basic['FRC_dLPFL'] = "";
    this.basic['FRC_dLPMA'] = "";
    this.basic['FRC_dLPIQ'] = "";
    this.basic['FRC_dLPWage'] = "";
    this.basic['FRC_dLPAmount'] = "";
    this.basic['FRC_dLPMF'] = "";
    this.basic['FRC_dSBPHL'] = "";
    this.basic['FRC_dSBPFL'] = "";
    this.basic['FRC_dSBPMA'] = "";
    this.basic['FRC_dSBPIQ'] = "";
    this.basic['FRC_dSBPWage'] = "";
    this.basic['FRC_dSBPAmount'] = "";
    this.basic['FRC_dSBPMF'] = "";
    this.basic['FRC_dLvLHL'] = "";
    this.basic['FRC_dLvLFL'] = "";
    this.basic['FRC_dLvLMA'] = "";
    this.basic['FRC_dLvLIQ'] = "";
    this.basic['FRC_dLvLWage'] = "";
    this.basic['FRC_dLvLAmount'] = "";
    this.basic['FRC_dLvLMF'] = "";
    this.basic['FRC_dTHL'] = "";
    this.basic['FRC_dTFL'] = "";
    this.basic['FRC_dTMA'] = "";
    this.basic['FRC_dTIQ'] = "";
    this.basic['FRC_dTWage'] = "";
    this.basic['FRC_dTAmount'] = "";
    this.basic['FRC_dTMF'] = "";
    this.basic['FRC_dBAHL'] = "";
    this.basic['FRC_dBAFL'] = "";
    this.basic['FRC_dBAMA'] = "";
    this.basic['FRC_dBAIQ'] = "";
    this.basic['FRC_dBAWage'] = "";
    this.basic['FRC_dBAAmount'] = "";
    this.basic['FRC_dBAMF'] = "";
    this.basic['FRC_dWHL'] = "";
    this.basic['FRC_dWFL'] = "";
    this.basic['FRC_dWMA'] = "";
    this.basic['FRC_dWIQ'] = "";
    this.basic['FRC_dWWage'] = "";
    this.basic['FRC_dWAmount'] = "";
    this.basic['FRC_dWMF'] = "";
    this.basic['FRC_dPMHL'] = "";
    this.basic['FRC_dPMFL'] = "";
    this.basic['FRC_dPMMA'] = "";
    this.basic['FRC_dPMIQ'] = "";
    this.basic['FRC_dPMWage'] = "";
    this.basic['FRC_dPMAmount'] = "";
    this.basic['FRC_dPMMF'] = "";
    this.basic['FRC_dFAHL'] = "";
    this.basic['FRC_dFAFL'] = "";
    this.basic['FRC_dFAMA'] = "";
    this.basic['FRC_dFAIQ'] = "";
    this.basic['FRC_dFAWage'] = "";
    this.basic['FRC_dFAAmount'] = "";
    this.basic['FRC_dFAMF'] = "";
    this.basic['FRC_dMonHL'] = "";
    this.basic['FRC_dMonFL'] = "";
    this.basic['FRC_dMonMA'] = "";
    this.basic['FRC_dMonIQ'] = "";
    this.basic['FRC_dMonWage'] = "";
    this.basic['FRC_dMonAmount'] = "";
    this.basic['FRC_dMonMF'] = "";
    this.basic['FRC_dMarHL'] = "";
    this.basic['FRC_dMarFL'] = "";
    this.basic['FRC_dMarMA'] = "";
    this.basic['FRC_dMarIQ'] = "";
    this.basic['FRC_dMarWage'] = "";
    this.basic['FRC_dMarAmount'] = "";
    this.basic['FRC_dMarMF'] = "";
    this.basic['FRC_DRYsubTotal'] = "";
    this.basic['FRC_DRYTotal'] = "";
    this.basic['FRC_DRYCpK'] = "";
    this.basic['FRC_DRYnetRet'] = "";

    this.evaluated = false;
  }

  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmRelChar2Page');
  }

  ammendData(){
  	if(Object.keys(this.basic).length < 81){
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
	  	this.navCtrl.push(FarmRelChar3Page);	
  	}
  	
  }

}
