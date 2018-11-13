import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedAssessmentPage } from './need-assessment';

@NgModule({
  declarations: [
    NeedAssessmentPage,
  ],
  imports: [
    IonicPageModule.forChild(NeedAssessmentPage),
  ],
})
export class NeedAssessmentPageModule {}
