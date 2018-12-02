import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
import { FarmRelChar2Page } from '../../pages/farm-rel-char2/farm-rel-char2';
import { AlertController, ModalController} from 'ionic-angular';

/**
 * Generated class for the FarmRelCharPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farm-rel-char',
  templateUrl: 'farm-rel-char.html',
})
export class FarmRelCharPage {
	basic = {};
	evaluated = false;
  selectMul_1 = false;
  selectMul_3 = false;
  
  constructor(public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
      this.reset();
  }

  selectAll(num){
    switch (num) {
      case 1:
          this.selectMul_1 = !(this.selectMul_1);
        break;
      case 3:
          this.selectMul_3 = !(this.selectMul_3);
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
    this.basic['FRC_rice'] = false;
    this.basic['FRC_corn'] = false;
    this.basic['FRC_banana'] = false;
    this.basic['FRC_coconut'] = false;
    this.basic['FRC_coffee'] = false;
    this.basic['FRC_cacao'] = false;
    this.basic['FRC_sugarcane'] = false;
    this.basic['FRC_soybean'] = false;
    this.basic['FRC_tomato'] = false;

    this.basic['FRC_farmSize'] = "";
    this.basic['FRC_waterSource'] = "";
    

    this.basic['FRC_dryVarieties'] = "";
    this.basic['FRC_dryQtyHarvestedSacks'] = "";
    this.basic['FRC_dryQtyHarvestedAve'] = "";
    this.basic['FRC_dryQtySold'] = "";
    this.basic['FRC_dryPrice'] = "";
    this.basic['FRC_dryTotalAmount'] = "";
    this.basic['FRC_wetVarieties'] = "";
    this.basic['FRC_wetQtyHarvestedSacks'] = "";
    this.basic['FRC_wetQtyHarvestedAve'] = "";
    this.basic['FRC_wetQtySold'] = "";
    this.basic['FRC_wetPrice'] = "";
    this.basic['FRC_wetTotalAmount'] = "";
    this.basic['FRC_TotalReturns'] = "";


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmRelCharPage');
  }

  checkValidity(){
    // if(this.basic['FRC_dryVarieties'] == "")
    //   return false;
    // if(this.basic['FRC_dryQtyHarvested'] == "")
    //   return false;
    // if(this.basic['FRC_dryQtySold'] == "")
    //   return false;
    // if(this.basic['FRC_dryPrice'] == "")
    //   return false;
    // if(this.basic['FRC_dryTotalAmount'] == "")
    //   return false;
    // if(this.basic['FRC_wetVarieties'] == "")
    //   return false;
    // if(this.basic['FRC_wetQtyHarvested'] == "")
    //   return false;
    // if(this.basic['FRC_wetQtySold'] == "")
    //   return false;
    // if(this.basic['FRC_wetPrice'] == "")
    //   return false;
    // if(this.basic['FRC_wetTotalAmount'] == "")
    //   return false;
    // if(this.basic['FRC_TotalReturns'] == "")
    //   return false;
    // if(this.basic['FRC_waterSource'] == "")
    //   return false;
    // if(this.basic['FRC_farmSize'] == "")
    //   return false;  

    return true;
  }

  checkvalue(){
    if(this.data.reboot == this.evaluated && this.data.reboot == true)
      this.reset();
    return this.evaluated;
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
      var crop = '';
      crop += ((this.basic['FRC_rice']) ? '1,':'');
      crop += ((this.basic['FRC_corn']) ? '2,':'');
      crop += ((this.basic['FRC_banana']) ? '3,':'');
      crop += ((this.basic['FRC_coconut']) ? '4,':'');
      crop += ((this.basic['FRC_coffee']) ? '5,':'');
      crop += ((this.basic['FRC_cacao']) ? '6,':'');
      crop += ((this.basic['FRC_sugarcane']) ? '7,':'');
      crop += ((this.basic['FRC_soybean']) ? '8,':'');
      crop += ((this.basic['FRC_tomato']) ? '9,':'');

      this.data.cna2_ans = this.data.cleanString(this.data.code) + ',' 
                      +this.data.cleanString(crop) + ','
                      +this.data.cleanString(this.basic['FRC_farmSize']) + ','
                      +this.data.cleanString(this.basic['FRC_waterSource']) + ','
                      +this.data.cleanString(this.basic['FRC_dryVarieties']) + ','
                      +this.data.cleanString(this.basic['FRC_dryQtyHarvestedSacks']) + ','
                      +this.data.cleanString(this.basic['FRC_dryQtyHarvestedAve']) + ','
                      +this.data.cleanString(this.basic['FRC_dryQtySold']) + ','
                      +this.data.cleanString(this.basic['FRC_dryPrice']) + ','
                      +this.data.cleanString(this.basic['FRC_dryTotalAmount']) + ','
                      +this.data.cleanString(this.basic['FRC_wetVarieties']) + ','
                      +this.data.cleanString(this.basic['FRC_wetQtyHarvestedSacks']) + ','
                      +this.data.cleanString(this.basic['FRC_wetQtyHarvestedAve']) + ','
                      +this.data.cleanString(this.basic['FRC_wetQtySold']) + ','
                      +this.data.cleanString(this.basic['FRC_wetPrice']) + ','
                      +this.data.cleanString(this.basic['FRC_wetTotalAmount']) + '\n';

      console.log(this.data.cna2_ans);

  		if(this.evaluated == false){
  			this.data.splitValues(this.basic);
  			this.evaluated = true;
  		}
	  	this.navCtrl.push(FarmRelChar2Page);	
  	}
  	
  }
}
