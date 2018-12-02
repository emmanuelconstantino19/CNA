import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { NeedAssessmentPage } from '../../pages/need-assessment/need-assessment';
import { AlertController, ModalController} from 'ionic-angular';

/**
 * Generated class for the ComPlatDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com-plat-d',
  templateUrl: 'com-plat-d.html',
})
export class ComPlatDPage {

  basic = {};
  evaluated = false;
  selectMul = false;

 constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  selectAll(){
    this.selectMul = !this.selectMul;
  }
  
  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
    this.basic['CP_D23_1'] = false; 
    this.basic['CP_D24_1'] = false; 
    this.basic['CP_D23_2'] = false; 
    this.basic['CP_D24_2'] = false; 
    this.basic['CP_D23_3'] = false; 
    this.basic['CP_D24_3'] = false; 
    this.basic['CP_D23_4'] = false; 
    this.basic['CP_D24_4'] = false; 
    this.basic['CP_D23_5'] = false; 
    this.basic['CP_D24_5'] = false; 
    this.basic['CP_D23_6'] = false; 
    this.basic['CP_D24_6'] = false; 
    this.basic['CP_D23_7'] = false; 
    this.basic['CP_D24_7'] = false; 
    this.basic['CP_D23_8'] = false; 
    this.basic['CP_D24_8'] = false; 
    this.basic['CP_DOthers'] = "";
    this.basic['CP_D23_9'] = false; 
    this.basic['CP_D24_9'] = false; 
    this.basic['CP_Interactivity'] = "";
    this.basic['CP_DisperseInfo'] = "";
    this.basic['CP_D27_1'] = false; 
    this.basic['CP_D27_2'] = false; 
    this.basic['CP_D27_3'] = false; 
    this.basic['CP_D27_4'] = false; 
    this.basic['CP_D27_5'] = false; 
    this.basic['CP_D27_6'] = false; 
    this.basic['CP_D27_7'] = false; 
    this.basic['CP_D27_8'] = false; 
    this.basic['CP_27Other'] = "";

    this.evaluated = false;
  }

  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
  	return this.evaluated;
  }

  checkValidity(){
    // if(this.basic['CP_Interactivity'] == "")
    //   return false;
    // if(this.basic['CP_DisperseInfo'] == "")
    //   return false;
    return true;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPlatDPage');
  }

  ammendData(){
  	if(this.checkValidity()==false){
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
      this.data.cna44_ans = this.data.code + ',';
  		var interactive = '';
      interactive += ((this.basic['CP_D23_1']) ? '1,':'');
      interactive += ((this.basic['CP_D23_2']) ? '2,':'');
      interactive += ((this.basic['CP_D23_3']) ? '3,':'');
      interactive += ((this.basic['CP_D23_4']) ? '4,':'');
      interactive += ((this.basic['CP_D23_5']) ? '5,':'');
      interactive += ((this.basic['CP_D23_6']) ? '6,':'');
      interactive += ((this.basic['CP_D23_7']) ? '7,':'');
      interactive += ((this.basic['CP_D23_8']) ? '8,':'');
      this.data.cna44_ans += this.data.cleanString(interactive) + ',';
      var initiate = '';
      initiate += ((this.basic['CP_D24_1']) ? '1,':'');
      initiate += ((this.basic['CP_D24_2']) ? '2,':'');
      initiate += ((this.basic['CP_D24_3']) ? '3,':'');
      initiate += ((this.basic['CP_D24_4']) ? '4,':'');
      initiate += ((this.basic['CP_D24_5']) ? '5,':'');
      initiate += ((this.basic['CP_D24_6']) ? '6,':'');
      initiate += ((this.basic['CP_D24_7']) ? '7,':'');
      initiate += ((this.basic['CP_D24_8']) ? '8,':'');

      this.data.cna44_ans += this.data.cleanString(initiate) + ','
                          + this.data.cleanString(this.basic['CP_Interactivity']) + ','
                          + this.data.cleanString(this.basic['CP_DisperseInfo']) + ',';

      var wantAttend = '';
      wantAttend += ((this.basic['CP_D27_1']) ? '1,':'');
      wantAttend += ((this.basic['CP_D27_2']) ? '2,':'');
      wantAttend += ((this.basic['CP_D27_3']) ? '3,':'');
      wantAttend += ((this.basic['CP_D27_4']) ? '4,':'');
      wantAttend += ((this.basic['CP_D27_5']) ? '5,':'');
      wantAttend += ((this.basic['CP_D27_6']) ? '6,':'');
      wantAttend += ((this.basic['CP_D27_7']) ? '7,':'');
      wantAttend += ((this.basic['CP_D27_8']) ? '8,':'');

      this.data.cna44_ans += this.data.cleanString(wantAttend) + '\n';

      console.log(this.data.cna44_ans);


      if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(NeedAssessmentPage);	
  	}
  }	

}
