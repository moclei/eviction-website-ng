import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import * as _ from 'lodash-es';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Eviction } from './eviction.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EvictionService {
  private evictions: Eviction[] = [];

  constructor(private http: Http) {
  }

  getEvictions(defendantFirstName: string, defendantLastName: string, soundexCheck: boolean) {
    console.log('getEvictions called');
    const body = {
      'defendantFirstName': defendantFirstName,
      'defendantLastName': defendantLastName,
      'soundexCheck': soundexCheck
    };
    console.log('evictions.service.getEvictions: body is: ' + body);
    // const headers = new Headers({'Content-Type': 'application/json'});
/*
    return this.http.get('http://localhost:3000/evictions')
      .map((response: Response) => {
        const evictions = response.json().items;
        const transformedEvictions: Eviction[] = [];
        console.log('evictions.service.getEvictions: response is: ' + response);
        console.log('evictions.service.getEvictions: evictions is: ' + evictions);
        console.log('evictions.service.getEvictions: response.json() is: ' + response.json());
        const responseJson = response.json();

        for (const eviction of evictions) {
          console.log('eviction.service, getEvictions.map(): eviction = ' + eviction.toString() + ', evictions: ' + evictions )
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

        const myTransformedEvictions = _.uniqBy(transformedEvictions, function(v) {
          return v.combinedDefendantName + ' ' + v.caseNumber + ' ' + v.disposition;
        });
        this.evictions = myTransformedEvictions;

        // this.evictions = transformedEvictions;
        // return transformedEvictions;
        return myTransformedEvictions;
      })
      .catch(error => Observable.throw('Error in x service'));
*/

    return this.http.post('http://localhost:3000/evictions', body)
      .map((response: Response) => {
        const evictions = response.json().items;
        const transformedEvictions: Eviction[] = [];
         console.log('evictions.service.getEvictions: response is: ' + response);
         console.log('evictions.service.getEvictions: evictions is: ' + evictions);
         console.log('evictions.service.getEvictions: response.json() is: ' + response.json());
        const responseJson = response.json();
        for (const eviction of evictions) {
           console.log('eviction.service, getEvictions.map(): eviction = ' + eviction.toString() + ', evictions: ' + evictions)
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
        console.log('Evictions Service-> Step 2')
        const myTransformedEvictions = _.uniqBy(transformedEvictions, function (v) {
          return v.combinedDefendantName + ' ' + v.caseNumber + ' ' + v.disposition;
        });
        for (let  i = 0; i < myTransformedEvictions.length; i++){
          console.log(i + ', First Name: ' + myTransformedEvictions[i].defendantFirstName
            + ', Last Name: ' + myTransformedEvictions[i].defendantLastName);
        }
        console.log('Eviction.Service, returned from search: ' + myTransformedEvictions);
        this.evictions = myTransformedEvictions;
        // this.searchPerformed(this.evictions);
        // this.newResults.emit(this.evictions);
        return myTransformedEvictions;
      })
      .catch(error => Observable.throw('Error in x service'));

  }
}
