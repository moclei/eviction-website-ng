import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import {Eviction} from '../eviction.model';
import {EvictionService} from '../eviction.service';
import {ConsentService} from '../consent.service';
import {MatDialog} from '@angular/material';
import {DisclaimerComponent} from '../disclaimer/disclaimer.component';

@Component({
  selector: 'app-eviction-search-input',
  templateUrl: './eviction-search-input.component.html',
  providers: [EvictionService],
  styleUrls: ['./eviction-search-input.component.css']
})
export class EvictionSearchInputComponent implements OnInit {

  firstName: string;
  lastName: string;
  useSoundex = true;
  userForm: FormGroup;
  submitted: boolean;
  @Output() searchDone: EventEmitter<Eviction[]> = new EventEmitter();

  hasResult = false;
  f: any;
  useFilings = true;
  useJudgments = true;

  constructor(private evictionService: EvictionService,
              private consentService: ConsentService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      'inputFirstName': new FormControl('', Validators.required),
      'inputLastName': new FormControl('', Validators.required),
      'soundexCheck': new FormControl('')
    });

  }

  onSubmit() {
    if (this.consentService.getConsented()) {
      console.log('eviction-search-input.component.ts, onSubmit, user has already consented, allowing search');
      this.submitted = true;
      this.firstName = this.userForm.value.inputFirstName;
      this.lastName = this.userForm.value.inputLastName;
      this.useSoundex = this.userForm.value.soundexCheck;
      this.evictionService.getEvictions(this.firstName , this.lastName, this.useSoundex, this.useFilings, this.useJudgments)
        .subscribe(
          (evictions: Eviction[]) => {
            this.searchDone.emit(evictions);
            this.submitted = false;
          }
        );
      this.hasResult = true;
    } else {
      console.log('eviction-search-input.component.ts, onSubmit, user has not consented, showing dialog');
      this.openDialog();
    }
  }
  openDialog(): void {
    console.log('HeaderComponent, openDialog, opening consent dialog');
    const dialogPos = {top: '9em'};
    const dialogRef = this.dialog.open(DisclaimerComponent, {
      width: '80em',
      position: dialogPos
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
