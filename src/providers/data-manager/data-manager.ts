import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';


declare let cordova: any;


/*
  Generated class for the DataManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataManagerProvider {

  code = '';
  cna1_ans = '';
  cna2_ans = '';
  cna3_ans = '';
  cna41_ans = '';
  cna42_ans = '';
  cna43_ans = '';
  cna44_ans = '';
  cna5_ans = '';
  cna61_ans = '';
  cna62_ans = '';
  cna63_ans = '';
  cna64_ans = '';
  cna65_ans = '';
  cna7_ans = '';

  headers = [];
  values  = [];
  notes = ["Start of notes"];

  reachedPage = 0;
  reboot = false;

  constructor(public http: HttpClient, private file: File){
  }

  saveNotes(inputData){
    var swapInputData = inputData.replace(/(\r\n|\n|\r)/gm,", ");
    this.notes.push(swapInputData.trim());
    console.log(swapInputData);
  }

  createFiles(){
    //console.log('create files');
    this.file.createDir(cordova.file.externalRootDirectory + '/Download/', 'SARAi', false);
  }

  writeHeaders(){
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA1.csv", "CODE,ADDRESS,CONTACT NO.,AGE,SEX,CS,HH SIZE M,HH SIZE F,# child M,# child F,HIGHEST EDUC ATTAINMENT,NON-FORMAL TRAINING,YEARS IN FARMING,LAND TENURE STATUS,MAIN SOURCE OF INCOME,OTHER SOURCES OF INCOME,NET INCOME FROM OTHER SOURCES,OTHER MEMBERS OF THE FAMILY WITH INCOME, MONTHLY NET INCOME OF OTHER FAMILY MEMBERS,MONTHLY NET INCOME OF THE FAMILY,ACCESS TO SOCIAL SERVICES,AFFILIATIONS\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA2.csv", "CODE,CROPS PLANTED,FARM SIZE,WATER SOURCE,DRY VARIETIES,DRY SACKS,DRY AVE KG,DRY QTY SOLD(SACKS),DRY PRICE(KG),DRY TOTAL AMOUNT,WET VARITIES,WET SACKS,WET AVE KG,WET QTY SOLD,WET PRICE(KG),WET TOTAL AMOUNT\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA3.csv", "CODE,PEST OR DISEASE,GROWTH STAGE,CONTROL MEASURE,EXPENSES(HA),DO YOU SEEK HELP FROM EXPERTS,IF YES-FROM WHOM,IF YES-WHEN,NOTES\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-1.csv", "CODE,AGRI INFO IN THE COMMUNITY,AGRI USED IN FARMING,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19,T20,T21,T22,T23,T24,U1,U2,U3,R1,R2,R3,A1,A2,A3,AGRI INFO NEEDED IN THE COMMUNITY,WF-LEAD TIME,WF-ACCURACY,WF-FREQUENCY,WF-RELIABILITY,SCF-LEAD TIME,SCF-ACCURACY,SCF-FREQUENCY,SCF-RELIABILITY,LT-LEAD TIME,LT-ACCURACY,LT-FREQUENCY,LT-RELIABILITY,WF-PREFERRED LEAD TIME,WF-IDEAL ACCURACY,WF-PREFERRED FREQ,SCF-PREFERRED LEAD TIME,SCF-IDEAL ACCURACY,SCF-PREFERRED FREQ,LT-PREFERRED LEAD TIME,LT-IDEAL ACCURACY,LT-PREFERRED FREQ,REASONS FOR USING AGRI INFO\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-2.csv", "CODE,SOURCE OF INFO,MOST TRUSTED SOURCES OF INFO,REASONS FOR TRUSTING SOURCES OF INFO\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-3.csv", "CODE,MEDIA OWNED AT HOME,MEDIA IN THE COMMUNITY,MEDIA USED FOR FARMING,MORE FREQUENT USER OF MEDIA,WANTS TO USE TO RECEIVE AGRI INFO,SITES VISITED FOR FARMING,REASON FOR USING MEDIA,READINESS TO RECEIVE AGRI INFO FROM SOURCES,WILLINGNESS TO ACCESS AGRI INFO FROM SARAI PORTAL,NOTES\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-4.csv", "CODE,INTERACTIVE APPROACHES ATTENDED TO,INITIATES INTERACTIVE APPROACHES,PARTICIPATION LEVEL,INFO SHARING TO OTHER FARMERS, INTERACTIVE APPROACHES YOU WANT TO ATTEND\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA5.csv", "CODE,1,2,3,4,5,6,7,8,9\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-1.csv", "CODE,1-RAINFALL,1-TEMP,1-FLOOD,1-DROUGHT,2-RAINFALL,2-TEMP,2-FLOOD,2-DROUGHT,3-RAINFALL,3-TEMP,3-FLOOD,3-DROUGHT,4-RAINFALL,4-TEMP,4-FLOOD,4-DROUGHT,5-RAINFALL,5-TEMP,5-FLOOD,5-DROUGHT,6-RAINFALL,6-TEMP,6-FLOOD,6-DROUGHT\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-2.csv", "CODE,1-EL NINO,1-LA NINA,1-FLOOD,1-DROUGHT,2-EL NINO,2-LA NINA,2-FLOOD,2-DROUGHT,3-EL NINO,3-LA NINA,3-FLOOD,3-DROUGHT,4-EL NINO,4-LA NINA,4-FLOOD,4-DROUGHT,5-EL NINO,5-LA NINA,5-FLOOD,5-DROUGHT\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-3.csv", "CODE,1-LT TEMP PATTERN,1-LT RAINFALL PATTERN,1-LT TROPICAL PATTERN,2-LT TEMP PATTERN,2-LT RAINFALL PATTERN,2-LT TROPICAL PATTERN,3-LT TEMP PATTERN,3-LT RAINFALL PATTERN,3-LT TROPICAL PATTERN\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-4.csv", "CODE,Q1,Q2,Q3,Q4,Q5,Q6,Q7,NOTES\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-5.csv", "CODE,ADAPTATION MEASURES USED,ADAPTATION MEASURES BEING CONSIDERED, REASONS FOR NOT USING ANY ADAPATION MEASURES\n", {replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA7.csv", "CODE,Q1,Q2,Q3,Q4,Q5,Q6\n", {replace: false });
  }

  
  writeData(){
    //this.file.writeFile(cordova.file.externalRootDirectory + '/Download/', "SARAI_RECORDS.csv", this.values.toString() + "," + this.notes.toString() + "\n", { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA1.csv", this.cna1_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA2.csv", this.cna2_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA3.csv", this.cna3_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-1.csv", this.cna41_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-2.csv", this.cna42_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-3.csv", this.cna43_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA4-4.csv", this.cna44_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA5.csv", this.cna5_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-1.csv", this.cna61_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-2.csv", this.cna62_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-3.csv", this.cna63_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-4.csv", this.cna64_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA6-5.csv", this.cna65_ans , { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/SARAi/', "CNA7.csv", this.cna7_ans , { append: true ,replace: false });

    this.reboot = true;

    this.headers = [];
    this.values = [];
    this.notes= [];
  }

  splitValues(basic){
  	for(var i in basic){
	  if(basic.hasOwnProperty(i)){
	    this.headers.push(i);
	    this.values.push(basic[i].toString().trim());
	  }
	}
  	console.log(Object.keys(basic).length);
  	console.log(this.headers);
  	console.log(this.values);
  }

 checkIfFileExists(){
        var store = cordova.file.externalApplicationStorageDirectory;
        var filename =  "SARAI_RECORDS.csv";
        cordova.resolveLocalFileSystemURL(store + filename, fileExists, fileDoesNotExist);
  }
  cleanString(str){
    if(str=='' || str==null)
      return '';

    return str.replace(/(\r\n|\n|\r|,)/gm," ").trim();
  }
}

  function fileExists(){
    alert("File  exists!");
  }
  function fileDoesNotExist(){
    alert("file does not exist");
  }

