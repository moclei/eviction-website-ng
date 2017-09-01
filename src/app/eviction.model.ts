export class Eviction {
  id: number;
  defendantFirstName: string;
  defendantLastName: string;
  defendantAddress: string;
  defendantCity: string;
  defendantState: string;
  defendantZip: string;
  defendantDOB: string;
  plaintiffName: string;
  plaintiffAddress: string;
  plaintiffCity: string;
  plaintiffState: string;
  plaintiffZip: number;
  plaintiffPhone: string;
  plaintiffCorp: string;
  caseFileDate: string;
  caseNumber: string;
  caseStatusCd: string;
  caseStatus: string;
  caseType: string;
  dispositionDate: string;
  dispositionAmount: number;
  disposition: string;
  personAliasId: number;
  combinedDefendantName: string;
  combinedDefAddress: string;
  combinedPlAddress: string;
  dispAmountStr: string;
  recordType: string;

  constructor(id: number, defendantFirstName: string, defendantLastName: string, defendantAddress: string, defendantCity: string,
              defendantState: string, defendantZip: string, defendantDOB: string, plaintiffName: string, plaintiffAddress: string,
              plaintiffCity: string, plaintiffState: string, plaintiffZip: number, plaintiffPhone: string,
              plaintiffCorp: string, caseFileDate: string, caseNumber: string, caseStatusCd: string, caseStatus: string,
              caseType: string, dispositionDate: string, dispositionAmount: number, disposition: string, personAliasId: number) {
    this.id = id;
    this.defendantFirstName = defendantFirstName;
    this.defendantLastName = defendantLastName;
    this.defendantAddress = defendantAddress;
    this.defendantCity = defendantCity;
    this.defendantState = defendantState;
    this.defendantZip = defendantZip;
    this.defendantDOB = defendantDOB;
    this.plaintiffName = plaintiffName;
    this.plaintiffAddress = plaintiffAddress;
    this.plaintiffCity = plaintiffCity;
    this.plaintiffState = plaintiffState;
    this.plaintiffZip = plaintiffZip;
    this.plaintiffPhone = plaintiffPhone;
    this.plaintiffCorp = plaintiffCorp;
    this.caseFileDate = caseFileDate;
    this.caseNumber = caseNumber;
    this.caseStatusCd = caseStatusCd;
    this.caseStatus = caseStatus;
    this.caseType = caseType;
    this.dispositionDate = dispositionDate;
    this.dispositionAmount = dispositionAmount;
    this.disposition = disposition;
    this.personAliasId = personAliasId;

    this.combinedDefendantName = defendantFirstName + ' ' + defendantLastName;
    this.combinedDefAddress = defendantAddress + ', ' + defendantCity + ' ' + defendantState;
    this.combinedPlAddress = plaintiffAddress + ', ' + plaintiffCity + ' ' + plaintiffState;

    this.dispAmountStr = '---';
    this.recordType = 'JUDGEMENT';
    if(dispositionAmount > -1){
      this.dispAmountStr = '$' + dispositionAmount;
    } else {
      this.disposition = '---';
      this.recordType = 'FILING';
    }

  }
}
