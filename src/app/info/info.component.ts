import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../contact.service';
import {ScrollToService} from 'ng2-scroll-to-el';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  contactForm: FormGroup;
  sendingMessage = false;
  sentMessage = false;
  @ViewChild('contact') contactFormElem: ElementRef;

  constructor(private contactService: ContactService,
              private scrollService: ScrollToService) { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      'inputName': new FormControl('', Validators.required),
      'inputEmail': new FormControl('', Validators.required),
      'inputPhone': new FormControl(''),
      'inputMessage': new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.sendingMessage = true;
    this.contactService.sendEmail(this.contactForm.value.inputName, this.contactForm.value.inputMessage,
      this.contactForm.value.inputEmail, this.contactForm.value.inputPhone)
      .subscribe(
        (returnMessage: string) => {
          console.log(returnMessage);
          this.sentMessage = true;
          this.contactForm.reset();
        }
      );
  }

  scrollToSearch() {
    this.scrollService.scrollTo(this.contactFormElem.nativeElement, 500, -75)
  }

}
