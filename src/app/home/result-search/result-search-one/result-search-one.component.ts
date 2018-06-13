import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-search-one',
  templateUrl: './result-search-one.component.html',
  styleUrls: ['./result-search-one.component.css']
})
export class ResultSearchOneComponent implements OnInit {

  @Input() house;

  constructor() { }

  ngOnInit() {
  }

}
