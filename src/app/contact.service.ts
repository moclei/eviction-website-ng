import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  private connectionUrl = '';
  private isDevelopment = false;

  constructor(private http: Http) {
    if(this.isDevelopment){
      this.connectionUrl = 'http://localhost:3000';
    } else {
      this.connectionUrl = 'https://evictionssearchn-1516845969440.appspot.com';
    }
  }

  sendEmail(contactName: string, contactMessage: string, contactEmail: string, contactPhone?: string) {
    // console.log('getEvictions called');
    let phone = '';
    if ( contactPhone ) {
      phone = contactPhone;
    }
    const body = {
      'contactName': contactName,
      'contactMessage': contactMessage,
      'contactEmail': contactEmail,
      'contactPhone': phone
    };
    // console.log('evictions.service.getEvictions: body is: ' + body);
    return this.http.post(this.connectionUrl + '/email', body)
      .map((response: Response) => {
        const returnMessage = response.json().returnMessage;
        console.log('Email send request sent, returnMessage: ' + returnMessage);
        return 'dunno what to return here';
      })
      .catch(error => Observable.throw('Error in x service: ' + error));

  }

}
