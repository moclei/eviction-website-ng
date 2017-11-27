import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {EvictionService} from '../eviction.service';
import {Eviction} from '../eviction.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-eviction-list',
  templateUrl: './eviction-list.component.html',
  providers: [EvictionService],
  styleUrls: ['./eviction-list.component.css']
})
export class EvictionListComponent implements OnInit, OnChanges{
  numEvictions: number;
  @Input() evictionSource: Eviction[] = null;
  // Added code for mat-table
  displayedColumns = ['combinedDefendantName', 'combinedDefAddress', 'defendantZip', 'plaintiffName', 'dispositionDate'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = null;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // End of added code for mat-table

  constructor(private evictionService: EvictionService) {
  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.evictionSource);
  }

}
