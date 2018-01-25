import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ConsentService} from '../consent.service';
import {ScrollToService} from 'ng2-scroll-to-el';
import {DisclaimerComponent} from '../disclaimer/disclaimer.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  clientHeight: number;

  constructor(private router: Router,
              private consentService: ConsentService,
              public dialog: MatDialog ) {
    this.clientHeight = window.innerHeight;
  }
  btnClick = function () {
    if(this.consentService.getConsented()){
      console.log('header.component.ts, btnClick, user has already consented, sending to search');
      this.router.navigate(['/search']);
    } else{
      console.log('header.component.ts, btnClick, user has not consented, sending to home');
      this.openDialog();
    }
  };

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
