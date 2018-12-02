import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager';
// import { HomePage } from '../../pages/home/home';
import { WtpPage } from '../../pages/wtp/wtp';
import { AlertController, ModalController} from 'ionic-angular';
import { File } from '@ionic-native/file';

declare let cordova: any;
/**
 * Generated class for the KccPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kcc',
  templateUrl: 'kcc.html',
})

export class KccPage {
  basic = {};
  evaluated = false ;
  
  constructor(private file: File, public mdlCtrl: ModalController, public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public data: DataManagerProvider) {
    this.reset();
  }

  openModal(){
    var modalPage = this.mdlCtrl.create('ModalPage');
    modalPage.present();
  }

  reset(){
  	this.basic['KCC_ClimateChange'] = "";
    this.basic['KCC_ClimateChangeFactor'] = "";

    this.basic['KCC_TV'] = false;
    this.basic['KCC_Radio'] = false;
    this.basic['KCC_NewsPaper'] = false;
    this.basic['KCC_Leaflets'] = false;
    this.basic['KCC_Farmers'] = false;
    this.basic['KCC_Relatives'] = false;
    this.basic['KCC_Self'] = false;
    this.basic['KCC_Other'] = "";

    
    this.basic['KCC_Adaptation'] = "";
  
    this.basic['KCC_choice1'] = false;
    this.basic['KCC_choice2'] = false;
    this.basic['KCC_choice3'] = false;
    this.basic['KCC_choice4'] = false;
    this.basic['KCC_choice5'] = false;
    this.basic['KCC_choice6'] = false;

    this.basic['KCC_choice_1'] = false;
    this.basic['KCC_choice_2'] = false;
    this.basic['KCC_choice_3'] = false;
    this.basic['KCC_choice_4'] = false;
    this.basic['KCC_choice_5'] = "";

    this.evaluated = false;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KccPage');
  }

  checkValidity(){
    // if (this.basic['KCC_ClimateChange'] == "" )
    // return false;
    return true;  
  }
  
  ammendData(){
	if (this.checkValidity() == false) { 
		let alert = this.alertCtrl.create({
	    title: 'Info',
	    message: 'Fill everything first',
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
	} else {
      this.data.cna7_ans = this.data.code + ',';
      this.data.cna7_ans += this.data.cleanString(this.basic['KCC_ClimateChange']) + ',';
      this.data.cna7_ans += this.data.cleanString(this.basic['KCC_ClimateChangeFactor']) + ',';

      var source = '';
      source += ((this.basic['KCC_TV']) ? '1,':'');
      source += ((this.basic['KCC_Radio']) ? '2,':'');
      source += ((this.basic['KCC_NewsPaper']) ? '3,':'');
      source += ((this.basic['KCC_Leaflets']) ? '4,':'');
      source += ((this.basic['KCC_Farmers']) ? '5,':'');
      source += ((this.basic['KCC_Relatives']) ? '6,':'');
      source += ((this.basic['KCC_Self']) ? '7,':'');

      if(this.data.cleanString(this.basic['KCC_Other']) != ""){
        source += '8 (' + this.basic['KCC_Other'] + ') ';
      }

      this.data.cna7_ans += this.data.cleanString(source) + ',';

      var affects = '';

      affects += ((this.basic['KCC_choice1']) ? '1,':'');
      affects += ((this.basic['KCC_choice2']) ? '2,':'');
      affects += ((this.basic['KCC_choice3']) ? '3,':'');
      affects += ((this.basic['KCC_choice4']) ? '4,':'');
      affects += ((this.basic['KCC_choice5']) ? '5,':'');
      affects += ((this.basic['KCC_choice6']) ? '6,':'');      

      this.data.cna7_ans += this.data.cleanString(affects) + ',';

      this.data.cna7_ans += this.data.cleanString(this.basic['KCC_Adaptation']) + ',';

      var contrib = '';
      contrib += ((this.basic['KCC_choice_1']) ? '1,':'');
      contrib += ((this.basic['KCC_choice_2']) ? '2,':'');
      contrib += ((this.basic['KCC_choice_3']) ? '3,':'');
      contrib += ((this.basic['KCC_choice_4']) ? '4,':'');

      if(this.data.cleanString(this.basic['KCC_choice_5']) != ""){
        contrib += '5 (' + this.basic['KCC_choice_5'] + ') ';
      }

      this.data.cna7_ans += this.data.cleanString(contrib) + '\n';

      console.log(this.data.cna7_ans);
       
      if(this.evaluated==false){
        this.data.splitValues(this.basic);
        this.evaluated = true;
      }

      if(this.data.reachedPage == 0){
        //headers for WTP
        var header = "WTP_minCavKgContrib, WTP_maxCavKgContrib, WTP_minDaysContrib, WTP_maxDaysContrib, WTP_mamahalaKolekta , WTP_buwanPinakatuyo, WTP_buwanNormal, WTP_buwanPinakamaulan, WTP_klasengImpormasyon,"; 

        //this.file.writeFile(cordova.file.externalRootDirectory + '/Download/', "SARAI_RECORDS.csv", this.data.headers.toString() + header + "\n", {replace: false });        

        // this.data.reachedPage = 1 ; 
      }
      
      this.navCtrl.push(WtpPage); 
        
    }
  }
}
