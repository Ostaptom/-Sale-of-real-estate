import {Component, OnInit} from '@angular/core';
import {House} from '../../../shared/models/house';
import {HouseService} from '../../../shared/service/house.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent implements OnInit {

  house: House = new House();

  constructor(private _houseService: HouseService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(value =>
      this._houseService.findOne(value['id']).subscribe(next => {
        this.house = next;
      }, err => {
        console.error(err);
      })
    );
  }

  ngOnInit() {
  }

}
