import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ConsentService} from '../consent.service';
import {MatDialog} from '@angular/material';
import {DisclaimerComponent} from '../disclaimer/disclaimer.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private consentService: ConsentService,
              private router: Router,
              public dialog: MatDialog ) { }

  btnClick = function () {
    if(this.consentService.getConsented()){
      console.log('home-page.component.ts, btnClick, user has already consented, sending to search');
      this.router.navigate(['/search']);
    } else{
      console.log('home-page.component.ts, btnClick, user has not consented, sending to home');
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
