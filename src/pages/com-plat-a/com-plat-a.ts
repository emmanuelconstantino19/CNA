import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { ComPlatBPage } from '../../pages/com-plat-b/com-plat-b';
import { AlertController, ModalController} from 'ionic-angular';


/**
 * Generated class for the ComPlatAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com-plat-a',
  templateUrl: 'com-plat-a.html',
})
export class ComPlatAPage {

  basic  = {};
  evaluated = false;
  selectMul_10 = false;

  constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  selectAll(){
      this.selectMul_10 = !this.selectMul_10;
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
    this.basic['CP_PDMsK']        = false;
    this.basic['CP_PDGsP']        = false;
    this.basic['CP_PDTmeLiness']  = "";
    this.basic['CP_PDGamit']      = false;
    this.basic['CP_PDRel']        = false;
    this.basic['CP_PDAdeq']= false;
    this.basic['CP_PDKsK']= "";
    this.basic['CP_WatManMsK']= false;
    this.basic['CP_WatManGsP']= false;
    this.basic['CP_WatManTmeLiness']= "";
    this.basic['CP_WatManGamit']= false;
    this.basic['CP_WatManRel']= false;
    this.basic['CP_WatManAdeq']= false;
    this.basic['CP_WatManKsK']= "";
    this.basic['CP_IrrigSchedMsK']= false;
    this.basic['CP_IrrigSchedGsP']= false;
    this.basic['CP_IrrigSchedTmeLiness']= "";
    this.basic['CP_IrrigSchedGamit']= false;
    this.basic['CP_IrrigSchedRel']= false;
    this.basic['CP_IrrigSchedAdeq']= false;
    this.basic['CP_IrrigSchedKsK']= "";
    this.basic['CP_FerAppMsK']= false;
    this.basic['CP_FerAppGsP']= false;
    this.basic['CP_FerAppTmeLiness']= "";
    this.basic['CP_FerAppGamit']= false;
    this.basic['CP_FerAppRel']= false;
    this.basic['CP_FerAppAdeq']= false;
    this.basic['CP_FerAppKsK']= "";
    this.basic['CP_PestAppMsK']= false;
    this.basic['CP_PestAppGsP']= false;
    this.basic['CP_PestAppTmeLiness']= "";
    this.basic['CP_PestAppGamit']= false;
    this.basic['CP_PestAppRel']= false;
    this.basic['CP_PestAppAdeq']= false;
    this.basic['CP_PestAppKsK']= "";
    this.basic['CP_IPMMsK']= false;
    this.basic['CP_IPMGsP']= false;
    this.basic['CP_IPMTmeLiness']= "";
    this.basic['CP_IPMGamit']= false;
    this.basic['CP_IPMRel']= false;
    this.basic['CP_IPMAdeq']= false;
    this.basic['CP_IPMKsK']= "";
    this.basic['CP_WeathFcastMsK']= false;
    this.basic['CP_WeathFcastGsP']= false;
    this.basic['CP_WeathFcastTmeLiness']= "";
    this.basic['CP_WeathFcastGamit']= false;
    this.basic['CP_WeathFcastRel']= false;
    this.basic['CP_WeathFcastAdeq']= false;
    this.basic['CP_WeathFcastKsK']= "";
    this.basic['CP_ICMMsK']= false;
    this.basic['CP_ICMGsP']= false;
    this.basic['CP_ICMTmeLiness']= "";
    this.basic['CP_ICMGamit']= false;
    this.basic['CP_ICMRel']= false;
    this.basic['CP_ICMAdeq']= false;
    this.basic['CP_ICMKsK']= "";
    this.basic['CP_RainFMsK']= false;
    this.basic['CP_RainFGsP']= false;
    this.basic['CP_RainFTmeLiness']= "";
    this.basic['CP_RainFGamit']= false;
    this.basic['CP_RainFRel']= false;
    this.basic['CP_RainFAdeq']= false;
    this.basic['CP_RainFKsK']= "";
    this.basic['CP_ThunWarnMsK']= false;
    this.basic['CP_ThunWarnGsP']= false;
    this.basic['CP_ThunWarnTmeLiness']= "";
    this.basic['CP_ThunWarnGamit']= false;
    this.basic['CP_ThunWarnRel']= false;
    this.basic['CP_ThunWarnAdeq']= false;
    this.basic['CP_ThunWarnKsK']= "";
    this.basic['CP_TropCycWarnMsK']= false;
    this.basic['CP_TropCycWarnGsP']= false;
    this.basic['CP_TropCycWarnTmeLiness']= "";
    this.basic['CP_TropCycWarnGamit']= false;
    this.basic['CP_TropCycWarnRel']= false;
    this.basic['CP_TropCycWarnAdeq']= false;
    this.basic['CP_TropCycWarnKsK']= "";
    this.basic['CP_WindSpdMsK']= false;
    this.basic['CP_WindSpdGsP']= false;
    this.basic['CP_WindSpdTmeLiness']= "";
    this.basic['CP_WindSpdGamit']= false;
    this.basic['CP_WindSpdRel']= false;
    this.basic['CP_WindSpdAdeq']= false;
    this.basic['CP_WindSpdKsK']= "";
    this.basic['CP_TempMsK']= false;
    this.basic['CP_TempGsP']= false;
    this.basic['CP_TempTmeLiness']= "";
    this.basic['CP_TempGamit']= false;
    this.basic['CP_TempRel']= false;
    this.basic['CP_TempAdeq']= false;
    this.basic['CP_TempKsK']= "";
    this.basic['CP_RelHumMsK']= false;
    this.basic['CP_RelHumGsP']= false;
    this.basic['CP_RelHumTmeLiness']= "";
    this.basic['CP_RelHumGamit']= false;
    this.basic['CP_RelHumRel']= false;
    this.basic['CP_RelHumAdeq']= false;
    this.basic['CP_RelHumKsK']= "";
    this.basic['CP_LeafWetMsK']= false;
    this.basic['CP_LeafWetGsP']= false;
    this.basic['CP_LeafWetTmeLiness']= "";
    this.basic['CP_LeafWetGamit']= false;
    this.basic['CP_LeafWetRel']= false;
    this.basic['CP_LeafWetAdeq']= false;
    this.basic['CP_LeafWetKsK']= "";
    this.basic['CP_SoilMoistMsK']= false;
    this.basic['CP_SoilMoistGsP']= false;
    this.basic['CP_SoilMoistTmeLiness']= "";
    this.basic['CP_SoilMoistGamit']= false;
    this.basic['CP_SoilMoistRel']= false;
    this.basic['CP_SoilMoistAdeq']= false;
    this.basic['CP_SoilMoistKsK']= "";
    this.basic['CP_FloodWarnMsK']= false;
    this.basic['CP_FloodWarnGsP']= false;
    this.basic['CP_FloodWarnTmeLiness']= "";
    this.basic['CP_FloodWarnGamit']= false;
    this.basic['CP_FloodWarnRel']= false;
    this.basic['CP_FloodWarnAdeq']= false;
    this.basic['CP_FloodWarnKsK']= "";
    this.basic['CP_ElniLaniMsK']= false;
    this.basic['CP_ElniLaniGsP']= false;
    this.basic['CP_ElniLaniTmeLiness']= "";
    this.basic['CP_ElniLaniGamit']= false;
    this.basic['CP_ElniLaniRel']= false;
    this.basic['CP_ElniLaniAdeq']= false;
    this.basic['CP_ElniLaniKsK']= "";
    this.basic['CP_BestFrmPrctMsK']= false;
    this.basic['CP_BestFrmPrctGsP']= false;
    this.basic['CP_BestFrmPrctTmeLiness']= "";
    this.basic['CP_BestFrmPrctGamit']= false;
    this.basic['CP_BestFrmPrctRel']= false;
    this.basic['CP_BestFrmPrctAdeq']= false;
    this.basic['CP_BestFrmPrctKsK']= "";
    this.basic['CP_NewFrmPrctMsK']= false;
    this.basic['CP_NewFrmPrctGsP']= false;
    this.basic['CP_NewFrmPrctTmeLiness']= "";
    this.basic['CP_NewFrmPrctGamit']= false;
    this.basic['CP_NewFrmPrctRel']= false;
    this.basic['CP_NewFrmPrctAdeq']= false;
    this.basic['CP_NewFrmPrctKsK']= "";
    this.basic['CP_NewFrmMachneMsK']= false;
    this.basic['CP_NewFrmMachneGsP']= false;
    this.basic['CP_NewFrmMachneTmeLiness']= "";
    this.basic['CP_NewFrmMachneGamit']= false;
    this.basic['CP_NewFrmMachneRel']= false;
    this.basic['CP_NewFrmMachneAdeq']= false;
    this.basic['CP_NewFrmMachneKsK']= "";
    this.basic['CP_CallForTrngMsK']= false;
    this.basic['CP_CallForTrngGsP']= false;
    this.basic['CP_CallForTrngTmeLiness']= "";
    this.basic['CP_CallForTrngGamit']= false;
    this.basic['CP_CallForTrngRel']= false;
    this.basic['CP_CallForTrngAdeq']= false;
    this.basic['CP_CallForTrngKsK']= "";
    this.basic['CP_CallForFrmersMtgMsK']= false;
    this.basic['CP_CallForFrmersMtgGsP']= false;
    this.basic['CP_CallForFrmersMtgTmeLiness']= "";
    this.basic['CP_CallForFrmersMtgGamit']= false;
    this.basic['CP_CallForFrmersMtgRel']= false;
    this.basic['CP_CallForFrmersMtgAdeq']= false;
    this.basic['CP_CallForFrmersMtgKsK']= "";
    this.basic['CP_OthersMsK']= false;
    this.basic['CP_OthersGsP']= false;
    this.basic['CP_OthersTmeLiness']= "";
    this.basic['CP_OthersGamit']= false;
    this.basic['CP_OthersRel']= false;
    this.basic['CP_OthersAdeq']= false;
    this.basic['CP_OthersKsK']= "";
    this.basic['CP_LeadTimeWeathFC']= "";
    this.basic['CP_LeadTimeSeasonalClimateFC']= "";
    this.basic['CP_LeadTimeLongTermClimProj']= "";
    this.basic['CP_AccuracyWeathFC']= "";
    this.basic['CP_LAccuracyeasonalClimateFC']= "";
    this.basic['CP_AccuracyLongTermClimProj']= "";
    this.basic['CP_FrequencyWeathFC']= "";
    this.basic['CP_FrequencySeasonalClimateFC']= "";
    this.basic['CP_FrequencyLongTermClimProj']= "";
    this.basic['CP_ReliabilityTimeWeathFC']= "";
    this.basic['CP_LeadReliabilitySeasonalClimateFC']= "";
    this.basic['CP_LeadReliabilityLongTermClimProj']= "";
    this.basic['CP_WeathFcastPrefLeadTime']= "";
    this.basic['CP_WeathFcastIdealAcc']= "";
    this.basic['CP_WeathFcastIdealAcc']= "";
    this.basic['CP_WeathFcastPrefFreq']= "";
    this.basic['CP_SeasonalFcastPrefLeadTime']= "";
    this.basic['CP_WeathFcastIdealAcc']= "";
    this.basic['CP_SeasonalFcastIdealAcc']= "";
    this.basic['CP_SeasonalFcastPrefFreq']= "";
    this.basic['CP_LongTrmClimPrjPrefLeadTime']= "";
    this.basic['CP_LongTrmClimPrjIdealAcc']= "";
    this.basic['CP_LongTrmClimPrjPrefFreq']= "";

    this.basic['CP_Ani'] = false; 
    this.basic['CP_TulongBabaGastos'] = false; 
    this.basic['CP_TulongBabaSayang'] = false; 
    this.basic['CP_Libre'] = false; 
    this.basic['CP_Mapagkakatiwalaan'] = false; 
    this.basic['CP_MadalingIntindi'] = false; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPlatAPage');
  }

   checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }
  
  ammendData(){
  	if(Object.keys(this.basic).length < 1){
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
  			this.data.splitValues(this.basic); //doesnt accept ""
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ComPlatBPage);	
  	}
  }	

}
