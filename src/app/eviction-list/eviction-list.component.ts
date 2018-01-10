import {Component, OnInit, OnChanges, AfterViewInit, Input, SimpleChanges, ViewChild, Inject} from '@angular/core';
import {EvictionService} from '../eviction.service';
import {Eviction} from '../eviction.model';
import {MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-eviction-list',
  templateUrl: './eviction-list.component.html',
  providers: [EvictionService],
  styleUrls: ['./eviction-list.component.css']
})
export class EvictionListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() evictionSource: Eviction[] = null;
  displayedColumns = ['combinedDefendantName', 'recordType', 'combinedDefAddress', 'defendantZip', 'plaintiffName', 'dispositionDate'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private evictionService: EvictionService, public dialog: MatDialog) {
  }

  openDialog(element): void {
    console.log('openDialog(element), element.plaintiffName: ' + element.plaintiffName);
    const dialogPos = {top: '10em'};

    const dialogRef = this.dialog.open(EvictionDialogComponent, {
      width: '60em',
      data: element,
      position: dialogPos
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data =  this.evictionSource;

    // Observable.interval(2000).subscribe(x => {
    if ( this.evictionSource && this.evictionSource.length > 0) {
      Observable.interval(100).subscribe(x => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    }
  }
}

@Component({
  selector: 'app-eviction-dialog',
  templateUrl: 'eviction-dialog.component.html',
})
export class EvictionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EvictionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

