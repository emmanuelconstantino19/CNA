import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataManagerProvider} from '../../providers/data-manager/data-manager' 

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
inputData="";
constructor(public data: DataManagerProvider, public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams) {
}

public closeModal(){
	this.data.saveNotes(this.inputData)
    this.viewCtrl.dismiss();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
