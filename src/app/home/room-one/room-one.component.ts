import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-room-one',
  templateUrl: './room-one.component.html',
  styleUrls: ['./room-one.component.css']
})
export class RoomOneComponent implements OnInit {

  @ViewChild('form') form: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  openForm() {
    this.form.nativeElement.style.top = '15px';
  }

  closeForm() {
    this.form.nativeElement.style.top = '-120%';
  }
}
