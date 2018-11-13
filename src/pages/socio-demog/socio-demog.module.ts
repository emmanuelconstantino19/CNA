import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocioDemogPage } from './socio-demog';

@NgModule({
  declarations: [
    SocioDemogPage,
  ],
  imports: [
    IonicPageModule.forChild(SocioDemogPage),
  ],
})
export class SocioDemogPageModule {}
