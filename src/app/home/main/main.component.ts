import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../shared/service/house.service';
import {House} from '../../../shared/models/house';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  houses: House[] = [];

  constructor(private _houseService: HouseService) {
    this._houseService.findTop().subscribe(next => {
      console.log(next);
      this.houses = next;
    }, err => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
