import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import * as _ from 'lodash-es';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Eviction } from './eviction.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EvictionService {
  // private evictions: Eviction[] = [];

  constructor(private http: Http) {
  }

  getEvictions(defendantFirstName: string, defendantLastName: string, soundexCheck: boolean) {
    // console.log('getEvictions called');
    const body = {
      'defendantFirstName': defendantFirstName,
      'defendantLastName': defendantLastName,
      'soundexCheck': soundexCheck
    };
    // console.log('evictions.service.getEvictions: body is: ' + body);
    return this.http.post('http://localhost:3000/evictions', body)
      .map((response: Response) => {
        const evictions = response.json().items;
        const transformedEvictions: Eviction[] = [];
        // const responseJson = response.json();
        for (const eviction of evictions) {
           // console.log('eviction.service, getEvictions.map(): eviction = ' + eviction.toString() + ', evictions: ' + evictions)
          transformedEvictions.push(new Eviction(
            eviction.idJudgementsAndFilings,
            eviction.DefendantFirstName,
            eviction.DefendantLastName,
            eviction.DefendantAddress,
            eviction.DefendantCity,
            eviction.DefendantState,
            eviction.DefendantZIP,
            eviction.DefendantDOB,
            eviction.PlaintiffName,
            eviction.PlaintiffAddress,
            eviction.PlaintiffCity,
            eviction.PlaintiffState,
            eviction.PlaintiffZIP,
            eviction.PlaintiffPhone,
            eviction.PlaintiffCorp,
            eviction.CaseFileDate,
            eviction.CaseNumber,
            eviction.CaseStatusCD,
            eviction.CaseStatus,
            eviction.CaseTypeDescription,
            eviction.DispositionDate,
            eviction.DispositionAmount,
            eviction.Disposition,
            eviction.PersonAliasID)
          );
        }
        // console.log('Evictions Service-> Step 2')
        const myTransformedEvictions = _.uniqBy(transformedEvictions, function (v) {
          return v.combinedDefendantName + ' ' + v.caseNumber + ' ' + v.disposition;
        });
        /*
        for (let  i = 0; i < myTransformedEvictions.length; i++){
          console.log(i + ', First Name: ' + myTransformedEvictions[i].defendantFirstName
            + ', Last Name: ' + myTransformedEvictions[i].defendantLastName);
        }*/
        // console.log('Eviction.Service, returned from search: ' + myTransformedEvictions);
        // this.evictions = myTransformedEvictions;
        // this.searchPerformed(this.evictions);
        // this.newResults.emit(this.evictions);
        return myTransformedEvictions;
      })
      .catch(error => Observable.throw('Error in x service: ' + error));

  }

  uploadEvictions(sheetData: Array<any>) {
    const body = {
      'sheetData': sheetData
    };

    return this.http.post('http://localhost:3000/upload', body)
      .map((response: Response) => {
        // const message = response.json().items;
        return response.json().items;
      })
      .catch(error => Observable.throw('Error in upload service: ' + error));

  }
  listDebugRecords() {
    const body = {
      'defendantFirstName': '',
      'defendantLastName': '',
      'soundexCheck': '',
      'isDebug': true
    };
    return this.http.post('http://localhost:3000/evictions', body)
      .map((response: Response) => {
        const evictions = response.json().items;
        const transformedEvictions: Eviction[] = [];
        for (const eviction of evictions) {
          transformedEvictions.push(new Eviction(
            eviction.idJudgementsAndFilings,
            eviction.DefendantFirstName,
            eviction.DefendantLastName,
            eviction.DefendantAddress,
            eviction.DefendantCity,
            eviction.DefendantState,
            eviction.DefendantZIP,
            eviction.DefendantDOB,
            eviction.PlaintiffName,
            eviction.PlaintiffAddress,
            eviction.PlaintiffCity,
            eviction.PlaintiffState,
            eviction.PlaintiffZIP,
            eviction.PlaintiffPhone,
            eviction.PlaintiffCorp,
            eviction.CaseFileDate,
            eviction.CaseNumber,
            eviction.CaseStatusCD,
            eviction.CaseStatus,
            eviction.CaseTypeDescription,
            eviction.DispositionDate,
            eviction.DispositionAmount,
            eviction.Disposition,
            eviction.PersonAliasID,
            eviction.ev_added_date
          ));
        }
        return transformedEvictions;
      })
      .catch(error => Observable.throw('Error in debug service: ' + error));
  }

  deleteDebugRecords(){
    return this.http.delete('http://localhost:3000/evictions')
      .map((response: Response) => {
        const message = response.json().message;
        console.log('Eviction.service.ts-> deleteDebugRecords()-> response message: ' + message);
        return message;
      })
      .catch(error => Observable.throw('Error in delete service: ' + error));
  }

  listMostRecentRecord() {
    return this.http.get('http://localhost:3000/evictions')
      .map((response: Response) => {
          const evictions = response.json().items;
        const transformedEvictions: Eviction[] = [];
          for (const eviction of evictions) {
            console.log('eviction.service, listMostRecentRecord.map(): eviction = ' + JSON.stringify(eviction) + ', ' + eviction.toString() + ', evictions: ' + evictions)
            transformedEvictions.push(new Eviction(
              eviction.idJudgementsAndFilings,
              eviction.DefendantFirstName,
              eviction.DefendantLastName,
              eviction.DefendantAddress,
              eviction.DefendantCity,
              eviction.DefendantState,
              eviction.DefendantZIP,
              eviction.DefendantDOB,
              eviction.PlaintiffName,
              eviction.PlaintiffAddress,
              eviction.PlaintiffCity,
              eviction.PlaintiffState,
              eviction.PlaintiffZIP,
              eviction.PlaintiffPhone,
              eviction.PlaintiffCorp,
              eviction.CaseFileDate,
              eviction.CaseNumber,
              eviction.CaseStatusCD,
              eviction.CaseStatus,
              eviction.CaseTypeDescription,
              eviction.DispositionDate,
              eviction.DispositionAmount,
              eviction.Disposition,
              eviction.PersonAliasID,
              eviction.ev_added_date)
            );
          }
          // this.evictions = transformedEvictions;
          return transformedEvictions;
      })
      .catch(error => Observable.throw('Error in delete service: ' + error));
  }

}
