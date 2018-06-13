import { Component, OnInit } from '@angular/core';
import {House} from '../../../shared/models/house';
import {HeaderComponent} from '../../source/header/header.component';


@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  houses:House[]=[];
  constructor() {
    this.houses = HeaderComponent.filteredHouses;
    console.log(this.houses);
    console.log(HeaderComponent.filteredHouses);
  }



  ngOnInit() {
  }

}
