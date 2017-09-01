import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {Eviction} from '../eviction.model';
import {EvictionService} from '../eviction.service';

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
  userform: FormGroup;
  submitted: boolean;
  @Output() searchDone: EventEmitter<Eviction[]> = new EventEmitter();

  constructor(private evictionService: EvictionService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'inputFirstName': new FormControl('', Validators.required),
      'inputLastName': new FormControl('', Validators.required),
      'soundexCheck': new FormControl(false)
    });
  }
  onclick(){
    console.log('eviction-search-input, firstName: ' + this.firstName + ', lastName: ' + this.lastName + ', soundex: ' + this.useSoundex);
    /*this.evictionService.getEvictions(this.firstName, this.lastName, this.useSoundex)
      .subscribe(
        (evictions: Eviction[]) => {
          // this.evictions = evictions;
          this.evictionService.searchPerformed(this.evictions);
          console.log(evictions[0]);
        });*/

    this.evictionService.getEvictions(this.firstName, this.lastName, this.useSoundex)
      .subscribe(
        (evictions: Eviction[]) => {
          this.searchDone.emit(evictions);
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    this.evictionService.getEvictions(this.userform.value.inputFirstName , this.userform.value.inputLastName, this.userform.value.soundexCheck)
      .subscribe(
        (evictions: Eviction[]) => {
          this.searchDone.emit(evictions);
        }
      );
    // this.msgs = [];
    // this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

}
