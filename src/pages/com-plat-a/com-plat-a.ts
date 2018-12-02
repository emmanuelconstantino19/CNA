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
    this.basic['CP_PDKsK']= false;
    this.basic['CP_WatManMsK']= false;
    this.basic['CP_WatManGsP']= false;
    this.basic['CP_WatManTmeLiness']= "";
    this.basic['CP_WatManGamit']= false;
    this.basic['CP_WatManRel']= false;
    this.basic['CP_WatManAdeq']= false;
    this.basic['CP_WatManKsK']= false;
    this.basic['CP_IrrigSchedMsK']= false;
    this.basic['CP_IrrigSchedGsP']= false;
    this.basic['CP_IrrigSchedTmeLiness']= "";
    this.basic['CP_IrrigSchedGamit']= false;
    this.basic['CP_IrrigSchedRel']= false;
    this.basic['CP_IrrigSchedAdeq']= false;
    this.basic['CP_IrrigSchedKsK']= false;
    this.basic['CP_FerAppMsK']= false;
    this.basic['CP_FerAppGsP']= false;
    this.basic['CP_FerAppTmeLiness']= "";
    this.basic['CP_FerAppGamit']= false;
    this.basic['CP_FerAppRel']= false;
    this.basic['CP_FerAppAdeq']= false;
    this.basic['CP_FerAppKsK']= false;
    this.basic['CP_PestAppMsK']= false;
    this.basic['CP_PestAppGsP']= false;
    this.basic['CP_PestAppTmeLiness']= "";
    this.basic['CP_PestAppGamit']= false;
    this.basic['CP_PestAppRel']= false;
    this.basic['CP_PestAppAdeq']= false;
    this.basic['CP_PestAppKsK']= false;
    this.basic['CP_IPMMsK']= false;
    this.basic['CP_IPMGsP']= false;
    this.basic['CP_IPMTmeLiness']= "";
    this.basic['CP_IPMGamit']= false;
    this.basic['CP_IPMRel']= false;
    this.basic['CP_IPMAdeq']= false;
    this.basic['CP_IPMKsK']= false;
    this.basic['CP_WeathFcastMsK']= false;
    this.basic['CP_WeathFcastGsP']= false;
    this.basic['CP_WeathFcastTmeLiness']= "";
    this.basic['CP_WeathFcastGamit']= false;
    this.basic['CP_WeathFcastRel']= false;
    this.basic['CP_WeathFcastAdeq']= false;
    this.basic['CP_WeathFcastKsK']= false;
    this.basic['CP_ICMMsK']= false;
    this.basic['CP_ICMGsP']= false;
    this.basic['CP_ICMTmeLiness']= "";
    this.basic['CP_ICMGamit']= false;
    this.basic['CP_ICMRel']= false;
    this.basic['CP_ICMAdeq']= false;
    this.basic['CP_ICMKsK']= false;
    this.basic['CP_RainFMsK']= false;
    this.basic['CP_RainFGsP']= false;
    this.basic['CP_RainFTmeLiness']= "";
    this.basic['CP_RainFGamit']= false;
    this.basic['CP_RainFRel']= false;
    this.basic['CP_RainFAdeq']= false;
    this.basic['CP_RainFKsK']= false;
    this.basic['CP_ThunWarnMsK']= false;
    this.basic['CP_ThunWarnGsP']= false;
    this.basic['CP_ThunWarnTmeLiness']= "";
    this.basic['CP_ThunWarnGamit']= false;
    this.basic['CP_ThunWarnRel']= false;
    this.basic['CP_ThunWarnAdeq']= false;
    this.basic['CP_ThunWarnKsK']= false;
    this.basic['CP_TropCycWarnMsK']= false;
    this.basic['CP_TropCycWarnGsP']= false;
    this.basic['CP_TropCycWarnTmeLiness']= "";
    this.basic['CP_TropCycWarnGamit']= false;
    this.basic['CP_TropCycWarnRel']= false;
    this.basic['CP_TropCycWarnAdeq']= false;
    this.basic['CP_TropCycWarnKsK']= false;
    this.basic['CP_WindSpdMsK']= false;
    this.basic['CP_WindSpdGsP']= false;
    this.basic['CP_WindSpdTmeLiness']= "";
    this.basic['CP_WindSpdGamit']= false;
    this.basic['CP_WindSpdRel']= false;
    this.basic['CP_WindSpdAdeq']= false;
    this.basic['CP_WindSpdKsK']= false;
    this.basic['CP_TempMsK']= false;
    this.basic['CP_TempGsP']= false;
    this.basic['CP_TempTmeLiness']= "";
    this.basic['CP_TempGamit']= false;
    this.basic['CP_TempRel']= false;
    this.basic['CP_TempAdeq']= false;
    this.basic['CP_TempKsK']= false;
    this.basic['CP_RelHumMsK']= false;
    this.basic['CP_RelHumGsP']= false;
    this.basic['CP_RelHumTmeLiness']= "";
    this.basic['CP_RelHumGamit']= false;
    this.basic['CP_RelHumRel']= false;
    this.basic['CP_RelHumAdeq']= false;
    this.basic['CP_RelHumKsK']= false;
    this.basic['CP_LeafWetMsK']= false;
    this.basic['CP_LeafWetGsP']= false;
    this.basic['CP_LeafWetTmeLiness']= "";
    this.basic['CP_LeafWetGamit']= false;
    this.basic['CP_LeafWetRel']= false;
    this.basic['CP_LeafWetAdeq']= false;
    this.basic['CP_LeafWetKsK']= false;
    this.basic['CP_SoilMoistMsK']= false;
    this.basic['CP_SoilMoistGsP']= false;
    this.basic['CP_SoilMoistTmeLiness']= "";
    this.basic['CP_SoilMoistGamit']= false;
    this.basic['CP_SoilMoistRel']= false;
    this.basic['CP_SoilMoistAdeq']= false;
    this.basic['CP_SoilMoistKsK']= false;
    this.basic['CP_FloodWarnMsK']= false;
    this.basic['CP_FloodWarnGsP']= false;
    this.basic['CP_FloodWarnTmeLiness']= "";
    this.basic['CP_FloodWarnGamit']= false;
    this.basic['CP_FloodWarnRel']= false;
    this.basic['CP_FloodWarnAdeq']= false;
    this.basic['CP_FloodWarnKsK']= false;
    this.basic['CP_ElniLaniMsK']= false;
    this.basic['CP_ElniLaniGsP']= false;
    this.basic['CP_ElniLaniTmeLiness']= "";
    this.basic['CP_ElniLaniGamit']= false;
    this.basic['CP_ElniLaniRel']= false;
    this.basic['CP_ElniLaniAdeq']= false;
    this.basic['CP_ElniLaniKsK']= false;
    this.basic['CP_BestFrmPrctMsK']= false;
    this.basic['CP_BestFrmPrctGsP']= false;
    this.basic['CP_BestFrmPrctTmeLiness']= "";
    this.basic['CP_BestFrmPrctGamit']= false;
    this.basic['CP_BestFrmPrctRel']= false;
    this.basic['CP_BestFrmPrctAdeq']= false;
    this.basic['CP_BestFrmPrctKsK']= false;
    this.basic['CP_NewFrmPrctMsK']= false;
    this.basic['CP_NewFrmPrctGsP']= false;
    this.basic['CP_NewFrmPrctTmeLiness']= "";
    this.basic['CP_NewFrmPrctGamit']= false;
    this.basic['CP_NewFrmPrctRel']= false;
    this.basic['CP_NewFrmPrctAdeq']= false;
    this.basic['CP_NewFrmPrctKsK']= false;
    this.basic['CP_NewFrmMachneMsK']= false;
    this.basic['CP_NewFrmMachneGsP']= false;
    this.basic['CP_NewFrmMachneTmeLiness']= "";
    this.basic['CP_NewFrmMachneGamit']= false;
    this.basic['CP_NewFrmMachneRel']= false;
    this.basic['CP_NewFrmMachneAdeq']= false;
    this.basic['CP_NewFrmMachneKsK']= false;
    this.basic['CP_CallForTrngMsK']= false;
    this.basic['CP_CallForTrngGsP']= false;
    this.basic['CP_CallForTrngTmeLiness']= "";
    this.basic['CP_CallForTrngGamit']= false;
    this.basic['CP_CallForTrngRel']= false;
    this.basic['CP_CallForTrngAdeq']= false;
    this.basic['CP_CallForTrngKsK']= false;
    this.basic['CP_CallForFrmersMtgMsK']= false;
    this.basic['CP_CallForFrmersMtgGsP']= false;
    this.basic['CP_CallForFrmersMtgTmeLiness']= "";
    this.basic['CP_CallForFrmersMtgGamit']= false;
    this.basic['CP_CallForFrmersMtgRel']= false;
    this.basic['CP_CallForFrmersMtgAdeq']= false;
    this.basic['CP_CallForFrmersMtgKsK']= false;
    this.basic['CP_OthersMsK']= false;
    this.basic['CP_OthersGsP']= false;
    this.basic['CP_OthersTmeLiness']= "";
    this.basic['CP_OthersGamit']= false;
    this.basic['CP_OthersRel']= false;
    this.basic['CP_OthersAdeq']= false;
    this.basic['CP_OthersKsK']= false;

    this.basic['CP_LeadTimeWeathFC']= "";
    this.basic['CP_LeadTimeSeasonalClimateFC']= "";
    this.basic['CP_LeadTimeLongTermClimProj']= "";
    this.basic['CP_AccuracyWeathFC']= "";
    this.basic['CP_AccuracySeasonalClimateFC']= "";
    this.basic['CP_AccuracyLongTermClimProj']= "";
    this.basic['CP_FrequencyWeathFC']= "";
    this.basic['CP_FrequencySeasonalClimateFC']= "";
    this.basic['CP_FrequencyLongTermClimProj']= "";
    this.basic['CP_ReliabilityWeathFC']= "";
    this.basic['CP_ReliabilitySeasonalClimateFC']= "";
    this.basic['CP_ReliabilityLongTermClimProj']= "";

    this.basic['CP_WeathFcastPrefLeadTime']= "";
    this.basic['CP_WeathFcastIdealAcc']= "";
    this.basic['CP_WeathFcastPrefFreq']= "";
    this.basic['CP_SeasonalFcastPrefLeadTime']= "";
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
        this.data.cna41_ans = this.data.cleanString(this.data.code) + ',';
        var agriInfo = '';

        agriInfo += ((this.basic['CP_PDMsK']) ? '1,':'')
        agriInfo += ((this.basic['CP_WatManMsK']) ? '2,':'')
        agriInfo += ((this.basic['CP_IrrigSchedMsK']) ? '3,':'')
        agriInfo += ((this.basic['CP_FerAppMsK']) ? '4,':'')
        agriInfo += ((this.basic['CP_PestAppMsK']) ? '5,':'')
        agriInfo += ((this.basic['CP_IPMMsK']) ? '6,':'')
        agriInfo += ((this.basic['CP_WeathFcastMsK']) ? '7,':'')
        agriInfo += ((this.basic['CP_ICMMsK']) ? '8,':'')
        agriInfo += ((this.basic['CP_RainFMsK']) ? '9,':'')
        agriInfo += ((this.basic['CP_ThunWarnMsK']) ? '10,':'')
        agriInfo += ((this.basic['CP_TropCycWarnMsK']) ? '11,':'')
        agriInfo += ((this.basic['CP_WindSpdMsK']) ? '12,':'')
        agriInfo += ((this.basic['CP_TempMsK']) ? '13,':'')
        agriInfo += ((this.basic['CP_RelHumMsK']) ? '14,':'')
        agriInfo += ((this.basic['CP_LeafWetMsK']) ? '15,':'')
        agriInfo += ((this.basic['CP_SoilMoistMsK']) ? '16,':'')
        agriInfo += ((this.basic['CP_FloodWarnMsK']) ? '17,':'')
        agriInfo += ((this.basic['CP_ElniLaniMsK']) ? '18,':'')
        agriInfo += ((this.basic['CP_BestFrmPrctMsK']) ? '19,':'')
        agriInfo += ((this.basic['CP_NewFrmPrctMsK']) ? '20,':'')
        agriInfo += ((this.basic['CP_NewFrmMachneMsK']) ? '21,':'')
        agriInfo += ((this.basic['CP_CallForTrngMsK']) ? '22,':'')
        agriInfo += ((this.basic['CP_CallForFrmersMtgMsK']) ? '23,':'')
        agriInfo += ((this.basic['CP_OthersMsK']) ? '24,':'')
        this.data.cna41_ans = this.data.cna41_ans + this.data.cleanString(agriInfo) + ',';

        var agriUse = '';
        agriUse += ((this.basic['CP_PDGsP']) ? '1,':'')
        agriUse += ((this.basic['CP_WatManGsP']) ? '2,':'')
        agriUse += ((this.basic['CP_IrrigSchedGsP']) ? '3,':'')
        agriUse += ((this.basic['CP_FerAppGsP']) ? '4,':'')
        agriUse += ((this.basic['CP_PestAppGsP']) ? '5,':'')
        agriUse += ((this.basic['CP_IPMGsP']) ? '6,':'')
        agriUse += ((this.basic['CP_WeathFcastGsP']) ? '7,':'')
        agriUse += ((this.basic['CP_ICMGsP']) ? '8,':'')
        agriUse += ((this.basic['CP_RainFGsP']) ? '9,':'')
        agriUse += ((this.basic['CP_ThunWarnGsP']) ? '10,':'')
        agriUse += ((this.basic['CP_TropCycWarnGsP']) ? '11,':'')
        agriUse += ((this.basic['CP_WindSpdGsP']) ? '12,':'')
        agriUse += ((this.basic['CP_TempGsP']) ? '13,':'')
        agriUse += ((this.basic['CP_RelHumGsP']) ? '14,':'')
        agriUse += ((this.basic['CP_LeafWetGsP']) ? '15,':'')
        agriUse += ((this.basic['CP_SoilMoistGsP']) ? '16,':'')
        agriUse += ((this.basic['CP_FloodWarnGsP']) ? '17,':'')
        agriUse += ((this.basic['CP_ElniLaniGsP']) ? '18,':'')
        agriUse += ((this.basic['CP_BestFrmPrctGsP']) ? '19,':'')
        agriUse += ((this.basic['CP_NewFrmPrctGsP']) ? '20,':'')
        agriUse += ((this.basic['CP_NewFrmMachneGsP']) ? '21,':'')
        agriUse += ((this.basic['CP_CallForTrngGsP']) ? '22,':'')
        agriUse += ((this.basic['CP_CallForFrmersMtgGsP']) ? '23,':'')
        agriUse += ((this.basic['CP_OthersGsP']) ? '24,':'')

        this.data.cna41_ans = this.data.cna41_ans + this.data.cleanString(agriUse) + ','
        +this.data.cleanString(this.basic['CP_PDTmeLiness'])+ ',' 
        +this.data.cleanString(this.basic['CP_WatManTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_IrrigSchedTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_FerAppTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_PestAppTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_IPMTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_WeathFcastTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_ICMTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_RainFTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_ThunWarnTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_TropCycWarnTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_WindSpdTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_TempTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_RelHumTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_LeafWetTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_SoilMoistTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_FloodWarnTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_ElniLaniTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_BestFrmPrctTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_NewFrmPrctTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_NewFrmMachneTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_CallForTrngTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_CallForFrmersMtgTmeLiness'])+ ','
        +this.data.cleanString(this.basic['CP_OthersTmeLiness'])+ ',';

        var use1 = 0, use2 = 0, use3 = 0; 
        var kw = ['CP_PD', 
            'CP_WatMan',
            'CP_IrrigSched',
            'CP_FerApp',
            'CP_PestApp',
            'CP_IPM',
            'CP_WeathFcast',
            'CP_ICM',
            'CP_RainF',
            'CP_ThunWarn',
            'CP_TropCycWarn',
            'CP_WindSpd',
            'CP_Temp',
            'CP_RelHum',
            'CP_LeafWet',
            'CP_SoilMoist',
            'CP_FloodWarn',
            'CP_ElniLani',
            'CP_BestFrmPrct',
            'CP_NewFrmPrct',
            'CP_NewFrmMachne',
            'CP_CallForTrng',
            'CP_CallForFrmersMtg',
            'CP_Others'];
            for(var i = 0 ; i < kw.length; i++){
                if(this.data.cleanString(this.basic[kw[i] + 'Gamit']) == '1 -Not Useful'){
                    use1++;
                }
                else if(this.data.cleanString(this.basic[kw[i] + 'Gamit']) == '2 -Somewhat Useful'){
                    use2++;
                }
                else if(this.data.cleanString(this.basic[kw[i] + 'Gamit']) == '3 - Useful'){
                    use3++;
                }
            }
            var rel1 = 0, rel2 = 0, rel3 = 0;
            for(var i = 0 ; i < kw.length; i++){
                if(this.data.cleanString(this.basic[kw[i] + 'Rel']) == '1 - Not reliable'){
                    rel1++;
                }
                else if(this.data.cleanString(this.basic[kw[i] + 'Rel']) == '2 - Somewhat reliable'){
                    rel2++;
                }
                else if(this.data.cleanString(this.basic[kw[i] + 'Rel']) == '3 - Reliable'){
                    rel3++;
                }
            }
            var ade1 = 0, ade2 = 0, ade3 = 0;
            for(var i = 0 ; i < kw.length; i++){
                if(this.data.cleanString(this.basic[kw[i] + 'Adeq']) == '1 - Not Adequate'){
                    ade1++;
                }
                else if(this.data.cleanString(this.basic[kw[i] + 'Adeq']) == '2 - Somewhat Adequate'){
                    ade2++;
                }
                else if(this.data.cleanString(this.basic[kw[i] + 'Adeq']) == '3 - Adequate'){
                    ade3++;
                }
            }

            this.data.cna41_ans = this.data.cna41_ans 
                            + this.data.cleanString(use1.toString()) + ','
                            + this.data.cleanString(use2.toString()) + ','
                            + this.data.cleanString(use3.toString()) + ','
                            + this.data.cleanString(rel1.toString()) + ','
                            + this.data.cleanString(rel2.toString()) + ','
                            + this.data.cleanString(rel3.toString()) + ','
                            + this.data.cleanString(ade1.toString()) + ','
                            + this.data.cleanString(ade2.toString()) + ','
                            + this.data.cleanString(ade3.toString()) + ',';

            for(var i = 0 ; i < kw.length; i++){
                if(this.basic[kw[i] + 'KsK']){
                    this.data.cna41_ans = this.data.cna41_ans + (i+1) + ' ';   
                }
            }
            this.data.cna41_ans += ',';

            var measurement = [
                'LeadTime',
                'Accuracy',
                'Frequency',
                'Reliability',
            ];

            var type = [
                'WeathFC',
                'SeasonalClimateFC',
                'LongTermClimProj'
            ];

            for(var i = 0 ; i < type.length; i++){
                for(var j = 0 ; j < measurement.length; j++){
                    this.data.cna41_ans += this.data.cleanString(this.basic['CP_' + measurement[j] + type[i]]) + ',';
                }
            }

            var measurement2 = [
            'PrefLeadTime',
            'IdealAcc',
            'PrefFreq'
            ]
            var type2 = [
            'WeathFcast',
            'SeasonalFcast',
            'LongTrmClimPrj'
            ]

            for(var i = 0 ; i < type2.length; i++){
                for(var j = 0 ; j < measurement2.length; j++){
                    this.data.cna41_ans += this.data.cleanString(this.basic['CP_' + type2[i] + measurement2[j]]) + ',';
                }
            }

            var reasonToUse = '';
            reasonToUse += ((this.basic['CP_Ani']) ? '1,':''); 
            reasonToUse += ((this.basic['CP_TulongBabaGastos']) ? '2,':''); 
            reasonToUse += ((this.basic['CP_TulongBabaSayang']) ? '3,':''); 
            reasonToUse += ((this.basic['CP_Libre']) ? '4,':''); 
            reasonToUse += ((this.basic['CP_Mapagkakatiwalaan']) ? '5,':''); 
            reasonToUse += ((this.basic['CP_MadalingIntindi']) ? '6,':''); 
            this.data.cna41_ans = this.data.cna41_ans + this.data.cleanString(reasonToUse) + '\n';
            console.log(this.data.cna41_ans);

  		if(this.evaluated == false){
  			this.data.splitValues(this.basic); //doesnt accept ""
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ComPlatBPage);	
  	}
  }	

}
