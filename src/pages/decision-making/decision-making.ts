import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { ExpoRiskPage } from '../../pages/expo-risk/expo-risk';
import { AlertController, ModalController} from 'ionic-angular';


/**
 * Generated class for the DecisionMakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decision-making',
  templateUrl: 'decision-making.html',
})
export class DecisionMakingPage {
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
    this.basic['DM_A1_Rainfall'] = false; 
    this.basic['DM_A1_Temp'] = false; 
    this.basic['DM_A1_Flood'] = false; 
    this.basic['DM_A1_Drought'] = false; 
    this.basic['DM_A2_Rainfall'] = false; 
    this.basic['DM_A2_Temp'] = false; 
    this.basic['DM_A2_Flood'] = false; 
    this.basic['DM_A2_Drought'] = false; 
    this.basic['DM_A3_Rainfall'] = false; 
    this.basic['DM_A3_Temp'] = false; 
    this.basic['DM_A3_Flood'] = false; 
    this.basic['DM_A3_Drought'] = false; 
    this.basic['DM_A4_Rainfall'] = false; 
    this.basic['DM_A4_Temp'] = false; 
    this.basic['DM_A4_Flood'] = false; 
    this.basic['DM_A4_Drought'] = false; 
    this.basic['DM_A5_Rainfall'] = false; 
    this.basic['DM_A5_Temp'] = false; 
    this.basic['DM_A5_Flood'] = false; 
    this.basic['DM_A5_Drought'] = false; 
    this.basic['DM_A6_Rainfall'] = false; 
    this.basic['DM_A6_Temp'] = false; 
    this.basic['DM_A6_Flood'] = false; 
    this.basic['DM_A6_Drought'] = false; 
    this.basic['DM_B1_ElNino'] = false; 
    this.basic['DM_B1_LaNina'] = false; 
    this.basic['DM_B1_Flood'] = false; 
    this.basic['DM_B1_Drought'] = false; 
    this.basic['DM_B2_ElNino'] = false; 
    this.basic['DM_B2_LaNina'] = false; 
    this.basic['DM_B2_Flood'] = false; 
    this.basic['DM_B2_Drought'] = false; 
    this.basic['DM_B3_ElNino'] = false; 
    this.basic['DM_B3_LaNina'] = false; 
    this.basic['DM_B3_Flood'] = false; 
    this.basic['DM_B3_Drought'] = false; 
    this.basic['DM_B4_ElNino'] = false; 
    this.basic['DM_B4_LaNina'] = false; 
    this.basic['DM_B4_Flood'] = false; 
    this.basic['DM_B4_Drought'] = false; 
    this.basic['DM_B5_ElNino'] = false; 
    this.basic['DM_B5_LaNina'] = false; 
    this.basic['DM_B5_Flood'] = false; 
    this.basic['DM_B5_Drought'] = false; 
    this.basic['DM_C1_LongTermTemp'] = false; 
    this.basic['DM_C1_LongTermRainfall'] = false; 
    this.basic['DM_C1_LongTermTropical'] = false; 
    this.basic['DM_C2_LongTermTemp'] = false; 
    this.basic['DM_C2_LongTermRainfall'] = false; 
    this.basic['DM_C2_LongTermTropical'] = false; 
    this.basic['DM_C3_LongTermTemp'] = false; 
    this.basic['DM_C3_LongTermRainfall'] = false; 
    this.basic['DM_C3_LongTermTropical'] = false; 

    this.evaluated = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecisionMakingPage');
  }

  ammendData(){

  		if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ExpoRiskPage);	
  	
  }	
}
