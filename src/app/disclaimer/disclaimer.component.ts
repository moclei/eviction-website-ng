import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConsentService} from '../consent.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-disclaimer-dialog',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
  consentForm: FormGroup;
  consentChecked = false;
  constructor(private consentService: ConsentService,
              private router: Router,
              public dialogRef: MatDialogRef<DisclaimerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.consentForm = new FormGroup({
      'consentCheck': new FormControl('', Validators.required)
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onConsent() {
    console.log('User consents. Go to search');
    this.consentService.setConsented(true);
    this.router.navigate(['/search']);
  }

}


