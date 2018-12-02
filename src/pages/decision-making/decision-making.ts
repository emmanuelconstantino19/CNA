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
      this.data.cna61_ans = this.data.code + ',';

      var type = [
        'Rainfall',
        'Temp',
        'Flood',
        'Drought'
      ]

      var kw = 'DM_A';

      for(var i = 1 ; i <= 6; i++){
        for(var j = 0 ; j < type.length ; j++){
          if(this.basic[kw+(i).toString()+'_'+type[j]]){
            this.data.cna61_ans += '1,';            
          }else{
            this.data.cna61_ans += ',';  
          }
        }
      }

      this.data.cna61_ans += '\n';

      console.log(this.data.cna61_ans);

      this.data.cna62_ans = this.data.code + ',';

      var type2 =[
        'ElNino', 
        'LaNina', 
        'Flood', 
        'Drought'
      ]

      var kw2 = 'DM_B';

      for(var i = 1 ; i <= 5; i++){
        for(var j = 0 ; j < type2.length ; j++){
          if(this.basic[kw2+(i).toString()+'_'+type2[j]]){
            this.data.cna62_ans += '1,';            
          }else{
            this.data.cna62_ans += ',';  
          }
        }
      }

      this.data.cna62_ans += '\n';

      console.log(this.data.cna62_ans);

      this.data.cna63_ans = this.data.code + ',';

      var type3 = [
        'LongTermTemp', 
        'LongTermRainfall', 
        'LongTermTropical'
      ]
      
      var kw3 = 'DM_C';

      for(var i = 1 ; i <= 3; i++){
        for(var j = 0 ; j < type3.length ; j++){
          if(this.basic[kw3+(i).toString()+'_'+type3[j]]){
            this.data.cna63_ans += '1,';            
          }else{
            this.data.cna63_ans += ',';  
          }
        }
      }

      this.data.cna63_ans += '\n';

      console.log(this.data.cna63_ans);

  		if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ExpoRiskPage);	
  	
  }	
}
