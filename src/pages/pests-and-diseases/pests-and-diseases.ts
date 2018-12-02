import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { ComPlatAPage } from '../../pages/com-plat-a/com-plat-a';
import { AlertController, ModalController} from 'ionic-angular';
/**
 * Generated class for the PestsAndDiseasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pests-and-diseases',
  templateUrl: 'pests-and-diseases.html',
})
export class PestsAndDiseasesPage {
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
    this.basic['PAD_PAD1'] = "";
    this.basic['PAD_PAD1Stage'] = "";
    this.basic['PAD_PAD1Control'] = "";
    this.basic['PAD_PAD1Expenses'] = "";
    this.basic['PAD_PAD1Note'] = "";

    this.basic['PAD_PAD2'] = "";
    this.basic['PAD_PAD2Stage'] = "";
    this.basic['PAD_PAD2Control'] = "";
    this.basic['PAD_PAD2Expenses'] = "";
    this.basic['PAD_PAD2Note'] = "";

    this.basic['PAD_PAD3'] = "";
    this.basic['PAD_PAD3Stage'] = "";
    this.basic['PAD_PAD3Control'] = "";
    this.basic['PAD_PAD3Expenses'] = "";
    this.basic['PAD_PAD3Note'] = "";

    this.basic['PAD_PAD4'] = "";
    this.basic['PAD_PAD4Stage'] = "";
    this.basic['PAD_PAD4Control'] = "";
    this.basic['PAD_PAD4Expenses'] = "";
    this.basic['PAD_PAD4Note'] = "";

    this.basic['PAD_PAD5'] = "";
    this.basic['PAD_PAD5Stage'] = "";
    this.basic['PAD_PAD5Control'] = "";
    this.basic['PAD_PAD5Expenses'] = "";
    this.basic['PAD_PAD5Note'] = "";
    
    this.basic['PAD_LumalapitSaEksperto'] = "";
    this.basic['PAD_LumalapitKanino'] = "";
    this.basic['PAD_LumalapitKelan'] = "";

    this.evaluated = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PestsAndDiseasesPage');
  }

  ammendData(){
    this.data.cna3_ans = this.data.cleanString(this.data.code) + ','
                      +this.data.cleanString(this.basic['PAD_PAD1']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD1Stage']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD1Control']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD1Expenses']) + ','
                      +this.data.cleanString(this.basic['PAD_LumalapitSaEksperto']) + ','
                      +this.data.cleanString(this.basic['PAD_LumalapitKanino']) + ','
                      +this.data.cleanString(this.basic['PAD_LumalapitKelan']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD1Note']) + '\n';

                      if(this.basic['PAD_PAD2']!=null && this.basic['PAD_PAD2']!=''){
                        this.data.cna3_ans = this.data.cna3_ans + ',' 
                        +this.data.cleanString(this.basic['PAD_PAD2']) + ','
                        +this.data.cleanString(this.basic['PAD_PAD2Stage']) + ','
                        +this.data.cleanString(this.basic['PAD_PAD2Control']) + ','
                        +this.data.cleanString(this.basic['PAD_PAD2Expenses']) + ',,,,'
                        +this.data.cleanString(this.basic['PAD_PAD2Note']) + '\n'
                      }

                      if(this.basic['PAD_PAD3']!=null && this.basic['PAD_PAD3']!=''){
                      this.data.cna3_ans = this.data.cna3_ans + ','
                      +this.data.cleanString(this.basic['PAD_PAD3']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD3Stage']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD3Control']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD3Expenses']) + ',,,,'
                      +this.data.cleanString(this.basic['PAD_PAD3Note']) + '\n'
                      }

                      if(this.basic['PAD_PAD4']!=null && this.basic['PAD_PAD4']!=''){
                      this.data.cna3_ans = this.data.cna3_ans + ','
                      +this.data.cleanString(this.basic['PAD_PAD4']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD4Stage']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD4Control']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD4Expenses']) + ',,,,'
                      +this.data.cleanString(this.basic['PAD_PAD4Note']) + '\n'
                      }

                      if(this.basic['PAD_PAD5']!=null && this.basic['PAD_PAD5']!=''){
                      this.data.cna3_ans = this.data.cna3_ans + ','
                      +this.data.cleanString(this.basic['PAD_PAD5']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD5Stage']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD5Control']) + ','
                      +this.data.cleanString(this.basic['PAD_PAD5Expenses']) + ',,,,'
                      +this.data.cleanString(this.basic['PAD_PAD5Note']) + '\n';
                      }

        console.log(this.data.cna3_ans);

  	if(Object.keys(this.basic).length < 22){
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
  		if(this.evaluated== false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ComPlatAPage);
    }
  }
}
