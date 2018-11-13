import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecisionMakingPage } from './decision-making';

@NgModule({
  declarations: [
    DecisionMakingPage,
  ],
  imports: [
    IonicPageModule.forChild(DecisionMakingPage),
  ],
})
export class DecisionMakingPageModule {}
