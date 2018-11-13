import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PestsAndDiseasesPage } from './pests-and-diseases';

@NgModule({
  declarations: [
    PestsAndDiseasesPage,
  ],
  imports: [
    IonicPageModule.forChild(PestsAndDiseasesPage),
  ],
})
export class PestsAndDiseasesPageModule {}
