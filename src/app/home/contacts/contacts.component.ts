import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @ViewChild('form') form: ElementRef;

  constructor() { }

  openForm() {
    this.form.nativeElement.style.top = '0';
  }

  closeForm() {
    this.form.nativeElement.style.top = '-120%';
  }

  ngOnInit() {
  }

}
