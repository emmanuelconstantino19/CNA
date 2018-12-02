import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SocioDemogPage } from '../pages/socio-demog/socio-demog';
import { SocioDemogTable1Page } from '../pages/socio-demog-table1/socio-demog-table1';
import { FarmRelCharPage } from '../pages/farm-rel-char/farm-rel-char';
import { FarmRelChar2Page } from '../pages/farm-rel-char2/farm-rel-char2';
import { FarmRelChar3Page } from '../pages/farm-rel-char3/farm-rel-char3';
import { FarmRelChar4Page } from '../pages/farm-rel-char4/farm-rel-char4';
import { KccPage } from '../pages/kcc/kcc';
import { NeedAssessmentPage } from '../pages/need-assessment/need-assessment';
import { PestsAndDiseasesPage } from '../pages/pests-and-diseases/pests-and-diseases';
import { ComPlatAPage } from '../pages/com-plat-a/com-plat-a';
import { ComPlatBPage } from '../pages/com-plat-b/com-plat-b';
import { ComPlatCPage } from '../pages/com-plat-c/com-plat-c';
import { ComPlatDPage } from '../pages/com-plat-d/com-plat-d';
import { ExpoRiskPage } from '../pages/expo-risk/expo-risk';
import { DecisionMakingPage } from '../pages/decision-making/decision-making';
import { WtpPage } from '../pages/wtp/wtp';



import {HttpClientModule} from '@angular/common/http';
import { DataManagerProvider } from '../providers/data-manager/data-manager';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
     // HomePage, //Comment from here
     // SocioDemogPage,
     // SocioDemogTable1Page,
     // FarmRelCharPage,
     // FarmRelChar2Page,
     // FarmRelChar3Page,
     // FarmRelChar4Page,
     // ComPlatAPage,
     // ComPlatBPage,
     // ComPlatCPage,
     // ComPlatDPage,
     // ExpoRiskPage,
     // DecisionMakingPage,
     // NeedAssessmentPage,
     // KccPage,
     // PestsAndDiseasesPage,
     // WtpPage // to here when using --prod
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SocioDemogPage,
    SocioDemogTable1Page,
    FarmRelCharPage,
    FarmRelChar2Page,
    FarmRelChar3Page,
    FarmRelChar4Page,
    ComPlatAPage,
    ComPlatBPage,
    ComPlatCPage,
    ComPlatDPage,
    ExpoRiskPage,
    DecisionMakingPage,
    NeedAssessmentPage,
    KccPage,
    PestsAndDiseasesPage,
    WtpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataManagerProvider
  ]
})
export class AppModule {}
