import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { ComPlatDPage } from '../../pages/com-plat-d/com-plat-d';
import { AlertController, ModalController} from 'ionic-angular';


/**
 * Generated class for the ComPlatCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com-plat-c',
  templateUrl: 'com-plat-c.html',
})
export class ComPlatCPage {
	basic = {};
	evaluated = false;
  selectMul_19 =false;
  selectMul_20 =false;
  selectMul_21 =false;
  
  constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  selectAll(num){
    switch (num) {
      case 19:
          this.selectMul_19 = !(this.selectMul_19);
        break;
      case 20:
          this.selectMul_20 = !(this.selectMul_20);
        break;
      case 21:
          this.selectMul_21 = !(this.selectMul_21);
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
    this.basic['CP_C14_1'] = false; 
    this.basic['CP_C15_1'] = false; 
    this.basic['CP_C16_1'] = false; 
    this.basic['CP_C17_1'] = "";
    this.basic['CP_C18_1'] = false; 
    
    this.basic['CP_C14_2'] = false; 
    this.basic['CP_C15_2'] = false; 
    this.basic['CP_C16_2'] = false; 
    this.basic['CP_C17_2'] = "";
    this.basic['CP_C18_2'] = false; 
    
    this.basic['CP_C14_3'] = false; 
    this.basic['CP_C15_3'] = false; 
    this.basic['CP_C16_3'] = false; 
    this.basic['CP_C17_3'] = "";
    this.basic['CP_C18_3'] = false;

    this.basic['CP_C14_4'] = false; 
    this.basic['CP_C15_4'] = false; 
    this.basic['CP_C16_4'] = false; 
    this.basic['CP_C17_4'] = "";
    this.basic['CP_C18_4'] = false; 
    
    this.basic['CP_C14_5'] = false; 
    this.basic['CP_C15_5'] = false; 
    this.basic['CP_C16_5'] = false; 
    this.basic['CP_C17_5'] = "";
    this.basic['CP_C18_5'] = false; 
    
    this.basic['CP_C14_6'] = false; 
    this.basic['CP_C15_6'] = false; 
    this.basic['CP_C16_6'] = false; 
    this.basic['CP_C17_6'] = "";
    this.basic['CP_C18_6'] = false; 
    
    this.basic['CP_C14_7'] = false; 
    this.basic['CP_C15_7'] = false; 
    this.basic['CP_C16_7'] = false; 
    this.basic['CP_C17_7'] = "";
    this.basic['CP_C18_7'] = false; 
    
    this.basic['CP_C14_8'] = false; 
    this.basic['CP_C15_8'] = false; 
    this.basic['CP_C16_8'] = false; 
    this.basic['CP_C17_8'] = "";
    this.basic['CP_C18_8'] = false; 
    
    this.basic['CP_C14_9'] = false; 
    this.basic['CP_C15_9'] = false; 
    this.basic['CP_C16_9'] = false; 
    this.basic['CP_C17_9'] = "";
    this.basic['CP_C18_9'] = false; 
    
    this.basic['CP_C14_10'] = false; 
    this.basic['CP_C15_10'] = false; 
    this.basic['CP_C16_10'] = false; 
    this.basic['CP_C17_10'] = "";
    this.basic['CP_C18_10'] = false; 
    
    this.basic['CP_C14_11'] = false; 
    this.basic['CP_C15_11'] = false; 
    this.basic['CP_C16_11'] = false; 
    this.basic['CP_C17_11'] = "";
    this.basic['CP_C18_11'] = false; 
    
    this.basic['CP_C19_1'] = false; 
    this.basic['CP_C19_2'] = false; 
    this.basic['CP_C19_3'] = false; 
    
    this.basic['CP_C20_1'] = false; 
    this.basic['CP_C20_2'] = false; 
    this.basic['CP_C20_3'] = false; 
    this.basic['CP_C20_4'] = false; 
    this.basic['CP_C20_5'] = false; 
    this.basic['CP_C20_Others'] = "";
    this.basic['CP_C21_1'] = false; 
    this.basic['CP_C21_2'] = false; 
    this.basic['CP_C21_3'] = false; 
    this.basic['CP_C21_4'] = false; 
    this.basic['CP_C21_Other'] = "";
    this.basic['CP_NaisImpormasyon'] = "";

    this.evaluated =  false;
  }

  checkValidity(){
    // if(this.basic['CP_NaisImpormasyon'] == "")
    //    return false;
    // if(this.basic['CP_C17_1'] == "")
    //    return false;
    // if(this.basic['CP_C17_2'] == "")
    //    return false;
    // if(this.basic['CP_C17_3'] == "")
    //    return false;
    // if(this.basic['CP_C17_4'] == "")
    //    return false;
    // if(this.basic['CP_C17_5'] == "")
    //    return false;
    // if(this.basic['CP_C17_6'] == "")
    //    return false;
    // if(this.basic['CP_C17_7'] == "")
    //    return false;
    // if(this.basic['CP_C17_8'] == "")
    //    return false;
    // if(this.basic['CP_C17_9'] == "")
    //    return false;
    // if(this.basic['CP_C17_10'] == "")
    //    return false;

    return true;
  }

  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPlatCPage');
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
  		if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(ComPlatDPage);	
  	}
  }	
}
