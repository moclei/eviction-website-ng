import {Component, OnInit, Input} from '@angular/core';
import {EvictionService} from '../eviction.service';
import {Eviction} from '../eviction.model';

@Component({
  selector: 'app-eviction-list',
  templateUrl: './eviction-list.component.html',
  providers: [EvictionService],
  styleUrls: ['./eviction-list.component.css']
})
export class EvictionListComponent implements OnInit {
  numEvictions: number;

  // TODO: Test
  @Input() evictionSource: Eviction[] = null;
  constructor(private evictionService: EvictionService) {
  }

  ngOnInit() {
    /*this.evictionService.getEvictions('Juan', 'Ramirez', true)
      .subscribe(
        (evictions: Eviction[]) => {
          this.evictions = evictions;
        }
      );*/
  }

}
