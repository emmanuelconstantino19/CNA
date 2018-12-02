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
    this.basic['NA_OtherFert'] = "";

    this.basic['NA_CropForm'] = false;
    this.basic['NA_LandForm'] = false;
    this.basic['NA_Permit'] = "";
    this.basic['NA_Trad'] = "";
    this.basic['NA_IrrigOther'] = "";

    this.basic['NA_TypeLand'] = "";
    this.basic['NA_MarketPrice'] = "";

    this.basic['NA_RainFall'] = false;
    this.basic['NA_OtherPlantDate'] = false;
    this.basic['NA_TargetMarketDate'] = false;
    this.basic['NA_PermitDate'] = "";
    this.basic['NA_TradDate'] = false;
    this.basic['NA_OthersDate'] = "";

    this.basic['NA_Consult'] = "";
    this.basic['NA_Harvest'] = false;
    this.basic['NA_PermitBWeather'] = false;
    this.basic['NA_TradBWeather'] = false;
    this.basic['NA_None'] = false;
    this.basic['NA_OtherBWeather'] = "";

    this.basic['NA_Report'] = "";
    this.basic['NA_ReportToWhom'] = "";

    this.basic['NA_Barangay'] = false;
    this.basic['NA_Org'] = false;
    this.basic['NA_AEW2'] = false;
    this.basic['NA_Leader'] = false;
    this.basic['NA_OtherFarmers'] = false;
    this.basic['NA_OtherInquiry'] = "";

    this.basic['NA_Received1'] = false;
    this.basic['NA_Received2'] = false;
    this.basic['NA_Received3'] = false;
    this.basic['NA_Received4'] = false;
    this.basic['NA_Received5'] = "";
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
      this.data.cna5_ans = this.data.code + ',';
      
      var ferKnowledge = '';
      ferKnowledge += ((this.basic['NA_FerCom']) ? '1,':'');
      ferKnowledge += ((this.basic['NA_AEW']) ? '2,':'');
      ferKnowledge += ((this.basic['NA_SemTraining']) ? '3,':'');
      ferKnowledge += ((this.basic['NA_OldMethod']) ? '4,':'');
      ferKnowledge += ((this.basic['NA_SelfExp']) ? '5,':'');
      if(this.data.cleanString(this.basic['NA_OtherFert']) != ""){
        ferKnowledge += '6 (' + this.basic['NA_OtherFert'] + ') ';
      }
      this.data.cna5_ans += this.data.cleanString(ferKnowledge) + ',';

      var needWater = '';
      needWater += ((this.basic['NA_CropForm']) ? '1,':'');
      needWater += ((this.basic['NA_LandForm']) ? '2,':'');
    
      if(this.data.cleanString(this.basic['NA_Permit']) != ""){
        needWater += '3 (' + this.basic['NA_Permit'] + ') ';
      }
      if(this.data.cleanString(this.basic['NA_Trad']) != ""){
        needWater += '4 (' + this.basic['NA_Trad'] + ') ';
      }
      if(this.data.cleanString(this.basic['NA_IrrigOther']) != ""){
        needWater += '5 (' + this.basic['NA_IrrigOther'] + ') ';
      }
      this.data.cna5_ans += this.data.cleanString(needWater) + ',';
      this.data.cna5_ans += this.data.cleanString(this.basic['NA_TypeLand']) + ',';
      this.data.cna5_ans += this.data.cleanString(this.basic['NA_MarketPrice']) + ',';

      var whenPlant = '';

      whenPlant += ((this.basic['NA_RainFall']) ? '1,':'');
      whenPlant += ((this.basic['NA_OtherPlantDate']) ? '2,':'');
      whenPlant += ((this.basic['NA_TargetMarketDate']) ? '3,':'');
      
      if(this.data.cleanString(this.basic['NA_PermitDate']) != ""){
        whenPlant += '4 (' + this.basic['NA_PermitDate'] + ') ';
      }

      whenPlant += ((this.basic['NA_TradDate']) ? '5,':'');

      if(this.data.cleanString(this.basic['NA_OthersDate']) != ""){
        whenPlant += '6 (' + this.basic['NA_OthersDate'] + ') ';
      }
      this.data.cna5_ans += this.data.cleanString(whenPlant) + ',';

      var riskAction = '';
      if(this.data.cleanString(this.basic['NA_Consult']) != ""){
        riskAction += '1 (' + this.basic['NA_Consult'] + ') ';
      }

      riskAction += ((this.basic['NA_Harvest']) ? '2,':'');
      riskAction += ((this.basic['NA_PermitBWeather']) ? '3,':'');
      riskAction += ((this.basic['NA_TradBWeather']) ? '4,':'');
      riskAction += ((this.basic['NA_None']) ? '5,':'');
      
      if(this.data.cleanString(this.basic['NA_OtherBWeather']) != ""){
        riskAction += '6 (' + this.basic['NA_OtherBWeather'] + ') ';
      }
      this.data.cna5_ans += this.data.cleanString(riskAction) + ',';

      console.log('Report: ' + this.basic['NA_Report'] + 'End of report');
      var report = '';
      if(this.basic['NA_Report'] == '1'){
        report = '1 (' + this.basic['NA_ReportToWhom'] + ') ';
      }
      else if(this.basic['NA_Report'] == '2'){
        report = '2';
      }

      this.data.cna5_ans += this.data.cleanString(report) + ',';

      var firstContact = '';

      firstContact += ((this.basic['NA_Barangay']) ? '1,':'');
      firstContact += ((this.basic['NA_Org']) ? '2,':'');
      firstContact += ((this.basic['NA_AEW2']) ? '3,':'');
      firstContact += ((this.basic['NA_Leader']) ? '4,':'');
      firstContact += ((this.basic['NA_OtherFarmers']) ? '5,':'');

      if(this.data.cleanString(this.basic['NA_OtherInquiry']) != ""){
        firstContact += '6 (' + this.basic['NA_OtherInquiry'] + ') ';
      }

      this.data.cna5_ans += this.data.cleanString(firstContact) + ',';

      var received = '';

      received += ((this.basic['NA_Received1']) ? '1,':'');
      received += ((this.basic['NA_Received2']) ? '2,':'');
      received += ((this.basic['NA_Received3']) ? '3,':'');
      received += ((this.basic['NA_Received4']) ? '4,':'');
      
      if(this.data.cleanString(this.basic['NA_Received5']) != ""){
        received += '5 (' + this.basic['NA_Received5'] + ') ';
      }

      this.data.cna5_ans += this.data.cleanString(received) + '\n';

      console.log(this.data.cna5_ans);

  		if(this.evaluated==false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(DecisionMakingPage);	
  	}
  	
  }
}
