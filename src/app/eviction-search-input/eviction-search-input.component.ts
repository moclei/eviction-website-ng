import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
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
  userForm: FormGroup;
  submitted: boolean;
  @Output() searchDone: EventEmitter<Eviction[]> = new EventEmitter();

  hasResult = false;
  f: any;
  useFilings = true;
  useJudgments = true;

  constructor(private evictionService: EvictionService) {}

  ngOnInit() {
    /*
    this.userForm = new FormGroup({
      'inputFirstName': new FormControl('', Validators.required),
      'inputLastName': new FormControl('', Validators.required),
      'soundexCheck': new FormControl('')
    });*/
    this.userForm = new FormGroup({
      'inputFirstName': new FormControl('', Validators.required),
      'inputLastName': new FormControl('', Validators.required),
      'soundexCheck': new FormControl('')
    });

  }

  onSubmit() {
    // window.print();
    this.submitted = true;
    this.firstName = this.userForm.value.inputFirstName;
    this.lastName = this.userForm.value.inputLastName;
    this.useSoundex = this.userForm.value.soundexCheck;
    this.evictionService.getEvictions(this.firstName , this.lastName, this.useSoundex)
      .subscribe(
        (evictions: Eviction[]) => {
          this.searchDone.emit(evictions);
          this.submitted = false;
        }
      );
    this.hasResult = true;
  }

  isResult() {
    return this.hasResult;
  }
}
