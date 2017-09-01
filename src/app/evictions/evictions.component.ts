import { Component, OnInit } from '@angular/core';
import {Eviction} from '../eviction.model';

@Component({
  selector: 'app-evictions',
  template: `
    <div class="panel panel-default">
      <app-eviction-search-input (searchDone)="onOpen($event)"></app-eviction-search-input>
      <app-eviction-list [evictionSource]="evictions"></app-eviction-list>
    </div>
  `,
  styleUrls: ['./evictions.component.css']
})
export class EvictionsComponent implements OnInit {

  evictions: Eviction[];
  constructor() { }

  onOpen(evictions: Eviction[]){
    console.log('Found evictions: ' + evictions);
    this.evictions = evictions;
  }

  ngOnInit() {

  }


}
