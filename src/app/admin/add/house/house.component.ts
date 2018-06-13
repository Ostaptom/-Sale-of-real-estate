import {Component, OnInit} from '@angular/core';
import {House} from '../../../../shared/models/house';
import {Flat} from '../../../../shared/models/flat';
import {HouseService} from '../../../../shared/service/house.service';
import {FILE_BASE64} from '../../../../shared/utils/file-base64-encoder';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  house: House = new House();

  constructor(private _houseService: HouseService) {
    this.house.flats = [];
  }

  addFlat(flat: Flat) {
    this.house.flats.push(flat);
  }

  rmFlat(index: number) {
    console.log(index);
    this.house.flats.splice(index, 1);
  }

  parseImage(inp: HTMLInputElement) {
    FILE_BASE64(inp.files[0]).subscribe(next => {
      this.house.image = next;
    });
  }

  saveHouse() {
    if (this.house.flats.length == 0) {
      alert('not enough flats');
      return;
    }
    this._houseService.save(this.house).subscribe(next => {
      this._houseService.addImage(next.id, this.house.image).subscribe(next => {
        console.log(next);
        alert('success');
        this.house = new House();
      }, err => {
        console.error(err);
      });
    }, err => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
