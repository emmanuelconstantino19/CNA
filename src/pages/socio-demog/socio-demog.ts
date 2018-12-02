import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { SocioDemogTable1Page } from '../../pages/socio-demog-table1/socio-demog-table1';
import { AlertController, ModalController} from 'ionic-angular';

/**
 * Generated class for the SocioDemogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socio-demog',
  templateUrl: 'socio-demog.html',
})
export class SocioDemogPage {
  basic={};
  evaluated = false;
  dataReset = false;
  selectMul_8 = false;
  selectMul_12 = false;
  selectMul_13 = false;


 constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }


  selectAll(num){
    switch (num) {
      case 8:
          this.selectMul_8 = !(this.selectMul_8);
        break;
      case 12:
          this.selectMul_12 = !(this.selectMul_12);
        break;
      case 13:
          this.selectMul_13 = !(this.selectMul_13);
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
    this.basic['SDP_homeMale'] = "";
    this.basic['SDP_homeFemale'] = "";
    this.basic['SDP_numSon'] = "";
    this.basic['SDP_numDaughter'] = "";
    this.basic['SDP_highestEducation'] = "";
    this.basic['SDP_informalEducation'] = "";
    this.basic['SDP_yrFarming'] = "";
    this.basic['SDP_ownedLand'] = "";
    this.basic['SDP_primary'] = "";

    this.basic['SDP_SariSariStore'] = false;
    this.basic['SDP_SarilingBusiness'] = false;
    this.basic['SDP_EmpleyadoNgGobyerno'] = false;
    this.basic['SDP_EmpleyadoPribadongSektor'] = false;
    this.basic['SDP_KapamilyangOFW'] = false;
    this.basic['SDP_Pamamasada'] = false;
    this.basic['SDP_IbaPa'] = false;

    this.basic['SDP_mNetIncome'] = "";
    this.basic['SDP_mMemberCheck'] = "";
    this.basic['SDP_mMemberNetIncome'] = "";
    this.basic['SDP_mFamNetIncome'] = "";

    this.basic['SDP_SSS'] = false;
    this.basic['SDP_GSIS'] = false;
    this.basic['SDP_PhilHealth'] = false;
    this.basic['SDP_PI'] = false;
    this.basic['SDP_4P'] = false;
    this.basic['SDP_SFP'] = false;
    this.basic['SDP_CashFWP'] = false;

    this.basic['SDP_Koop'] = false;
    this.basic['SDP_FA'] = false;
    this.basic['SDP_ARBO'] = false;
    this.basic['SDP_WO'] = false;
    this.basic['SDP_PG'] = false;
    this.basic['SDP_RelFBO'] = false;
    this.basic['SDP_SCO'] = false;
    this.basic['SDP_Others'] = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocioDemogPage');
  }

  checkvalue(){
    return 0;
  }

  checkValidity(){
    // if(this.basic['SDP_homeMale'] == "")
    //   return false;
    // if(this.basic['SDP_homeFemale'] == "")
    //   return false;
    // if(this.basic['SDP_numSon'] == "")
    //   return false;
    // if(this.basic['SDP_numDaughter'] == "")
    //   return false;
    // if(this.basic['SDP_highestEducation'] == "")
    //   return false;
    // if(this.basic['SDP_informalEducation'] == "")
    //   return false;
    // if(this.basic['SDP_yrFarming'] == "")
    //   return false;
    // if(this.basic['SDP_ownedLand'] == "")
    //   return false;
    // if(this.basic['SDP_primary'] == "")
    // return false;  
    // if(this.basic['SDP_otherLivelihood'] == "")
    //   return false;
    // if(this.basic['SDP_mNetIncome'] == "")
    //   return false;
    // if(this.basic['SDP_mMemberNetIncome'] == "")
    //   return false;
    // if(this.basic['SDP_mFamNetIncome'] == "")
    //   return false;

    return true;
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
      this.data.cna1_ans = this.data.cna1_ans +
                            this.data.cleanString(this.basic['SDP_homeMale'])  + ','
                            +this.data.cleanString(this.basic['SDP_homeFemale'])  + ','
                            +this.data.cleanString(this.basic['SDP_numSon'])  + ','
                            +this.data.cleanString(this.basic['SDP_numDaughter'])  + ','
                            +this.data.cleanString(this.basic['SDP_highestEducation']) + ','
                            +this.data.cleanString(this.basic['SDP_informalEducation']) + ','
                            +this.data.cleanString(this.basic['SDP_yrFarming']) + ','
                            +this.data.cleanString(this.basic['SDP_ownedLand']) + ','
                            +this.data.cleanString(this.basic['SDP_primary']) + ',';

    var otherSource = '';
    otherSource += ((this.basic['SDP_SariSariStore']) ? '1,':'');
    otherSource += ((this.basic['SDP_SarilingBusiness']) ? '2,':'');
    otherSource += ((this.basic['SDP_EmpleyadoNgGobyerno']) ? '3,':'');
    otherSource += ((this.basic['SDP_EmpleyadoPribadongSektor']) ? '4,':'');
    otherSource += ((this.basic['SDP_KapamilyangOFW']) ? '5,':'');
    otherSource += ((this.basic['SDP_Pamamasada']) ? '6,':'');
    otherSource += ((this.basic['SDP_IbaPa']) ? '7,':'');
    
    this.data.cna1_ans = this.data.cna1_ans +
                          this.data.cleanString(otherSource) + ','
                        +this.data.cleanString(this.basic['SDP_mNetIncome']) + ','
                        +this.data.cleanString(this.basic['SDP_mMemberCheck']) + ','
                        +this.data.cleanString(this.basic['SDP_mMemberNetIncome']) + ','
                        +this.data.cleanString(this.basic['SDP_mFamNetIncome']) + ',';

    var socialservice = '';
    socialservice += ((this.basic['SDP_SSS']) ? '1,':'');
    socialservice += ((this.basic['SDP_GSIS']) ? '2,':'');
    socialservice += ((this.basic['SDP_PhilHealth']) ? '3,':'');
    socialservice += ((this.basic['SDP_PI']) ? '4,':'');
    socialservice += ((this.basic['SDP_4P']) ? '5,':'');
    socialservice += ((this.basic['SDP_SFP']) ? '6,':'');
    socialservice += ((this.basic['SDP_CashFWP']) ? '7,':'');

    this.data.cna1_ans = this.data.cna1_ans +
                          this.data.cleanString(socialservice) + ',';

    var org = '';
    org += ((this.basic['SDP_Koop']) ? '1,':'');
    org += ((this.basic['SDP_FA']) ? '2,':'');
    org += ((this.basic['SDP_ARBO']) ? '3,':'');
    org += ((this.basic['SDP_WO']) ? '4,':'');
    org += ((this.basic['SDP_PG']) ? '5,':'');
    org += ((this.basic['SDP_RelFBO']) ? '6,':'');
    org += ((this.basic['SDP_SCO']) ? '7,':'');
    org += ((this.basic['SDP_Others']) ? '8,':'');

    this.data.cna1_ans = this.data.cna1_ans +
                          this.data.cleanString(org) + '\n';

    console.log(this.data.cna1_ans);
	  this.navCtrl.push(SocioDemogTable1Page);	
  	}
  	
  }
}
