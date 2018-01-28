import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class ConsentService {
  consented = false;
  disclaimerElem: ElementRef;
  constructor() { }

  getConsented() {
    console.log('consent.service.ts, getConsented: ' + this.consented);
    return this.consented;
  }
  setConsented(consented: boolean) {
    console.log('consent.service.ts, setConsented: ' + consented);
    this.consented = consented;
  }
  getDisclaimerElem(){
    return this.disclaimerElem;
  }
  setDisclaimerElem(disclaimerElem: ElementRef){
    this.disclaimerElem = disclaimerElem;
  }

}
