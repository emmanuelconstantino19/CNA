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
  
  writeData(){
    // this.checkIfFileExists();
    // this.file.checkFile(cordova.file.externalRootDirectory + '/Download/', "SARAI_RECORDS.csv").then(_ => this.appendAndRestart()).catch(err => this.headersAndAppend());
    
    // this.file.writeFile(cordova.file.externalRootDirectory, '/Download/', "\n", { append: true ,replace: false });
    this.file.writeFile(cordova.file.externalRootDirectory + '/Download/', "SARAI_RECORDS.csv", this.values.toString() + "," + this.notes.toString() + "\n", { append: true ,replace: false });
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
}

  function fileExists(){
    alert("File  exists!");
  }
  function fileDoesNotExist(){
    alert("file does not exist");
  }

