import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { FarmRelChar4Page } from '../../pages/farm-rel-char4/farm-rel-char4';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the FarmRelChar3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farm-rel-char3',
  templateUrl: 'farm-rel-char3.html',
})
export class FarmRelChar3Page {
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
  	this.basic['FRC_wSPHL'] = "";
    this.basic['FRC_wSPFL'] = "";
    this.basic['FRC_wSPMA'] = "";
    this.basic['FRC_wSPIQ'] = "";
    this.basic['FRC_wSPWage'] = "";
    this.basic['FRC_wSPAmount'] = "";
    this.basic['FRC_wSPMF'] = "";
    this.basic['FRC_wLPHL'] = "";
    this.basic['FRC_wLPFL'] = "";
    this.basic['FRC_wLPMA'] = "";
    this.basic['FRC_wLPIQ'] = "";
    this.basic['FRC_wLPWage'] = "";
    this.basic['FRC_wLPAmount'] = "";
    this.basic['FRC_wLPMF'] = "";
    this.basic['FRC_wSBPHL'] = "";
    this.basic['FRC_wSBPFL'] = "";
    this.basic['FRC_wSBPMA'] = "";
    this.basic['FRC_wSBPIQ'] = "";
    this.basic['FRC_wSBPWage'] = "";
    this.basic['FRC_wSBPAmount'] = "";
    this.basic['FRC_wSBPMF'] = "";
    this.basic['FRC_wLvLHL'] = "";
    this.basic['FRC_wLvLFL'] = "";
    this.basic['FRC_wLvLMA'] = "";
    this.basic['FRC_wLvLIQ'] = "";
    this.basic['FRC_wLvLWage'] = "";
    this.basic['FRC_wLvLAmount'] = "";
    this.basic['FRC_wLvLMF'] = "";
    this.basic['FRC_wTHL'] = "";
    this.basic['FRC_wTFL'] = "";
    this.basic['FRC_wTMA'] = "";
    this.basic['FRC_wTIQ'] = "";
    this.basic['FRC_wTWage'] = "";
    this.basic['FRC_wTAmount'] = "";
    this.basic['FRC_wTMF'] = "";
    this.basic['FRC_wBAHL'] = "";
    this.basic['FRC_wBAFL'] = "";
    this.basic['FRC_wBAMA'] = "";
    this.basic['FRC_wBAIQ'] = "";
    this.basic['FRC_wBAWage'] = "";
    this.basic['FRC_wBAAmount'] = "";
    this.basic['FRC_wBAMF'] = "";
    this.basic['FRC_wWHL'] = "";
    this.basic['FRC_wWFL'] = "";
    this.basic['FRC_wWMA'] = "";
    this.basic['FRC_wWIQ'] = "";
    this.basic['FRC_wWWage'] = "";
    this.basic['FRC_wWAmount'] = "";
    this.basic['FRC_wWMF'] = "";
    this.basic['FRC_wPMHL'] = "";
    this.basic['FRC_wPMFL'] = "";
    this.basic['FRC_wPMMA'] = "";
    this.basic['FRC_wPMIQ'] = "";
    this.basic['FRC_wPMWage'] = "";
    this.basic['FRC_wPMAmount'] = "";
    this.basic['FRC_wPMMF'] = "";
    this.basic['FRC_wFAHL'] = "";
    this.basic['FRC_wFAFL'] = "";
    this.basic['FRC_wFAMA'] = "";
    this.basic['FRC_wFAIQ'] = "";
    this.basic['FRC_wFAWage'] = "";
    this.basic['FRC_wFAAmount'] = "";
    this.basic['FRC_wFAMF'] = "";
    this.basic['FRC_wMonHL'] = "";
    this.basic['FRC_wMonFL'] = "";
    this.basic['FRC_wMonMA'] = "";
    this.basic['FRC_wMonIQ'] = "";
    this.basic['FRC_wMonWage'] = "";
    this.basic['FRC_wMonAmount'] = "";
    this.basic['FRC_wMonMF'] = "";
    this.basic['FRC_wMarHL'] = "";
    this.basic['FRC_wMarFL'] = "";
    this.basic['FRC_wMarMA'] = "";
    this.basic['FRC_wMarIQ'] = "";
    this.basic['FRC_wMarWage'] = "";
    this.basic['FRC_wMarAmount'] = "";
    this.basic['FRC_wMarMF'] = "";
    this.basic['FRC_WETsubTotal'] = "";
    this.basic['FRC_WETTotal'] = "";
    this.basic['FRC_WETCpK'] = "";
    this.basic['FRC_WETnetRet'] = "";

    this.evaluated = false;
  }


  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmRelChar3Page');
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
	  	this.navCtrl.push(FarmRelChar4Page);	
  	}
  	
  }

}
