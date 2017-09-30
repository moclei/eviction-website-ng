import { Component, OnInit } from '@angular/core';
import {Eviction} from '../eviction.model';

@Component({
  selector: 'app-evictions',
  templateUrl: './evictions.component.html',
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
