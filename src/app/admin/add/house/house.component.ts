import {Component, OnInit} from '@angular/core';
import {House} from '../../../../shared/models/house';
import {Flat} from '../../../../shared/models/flat';
import {HouseService} from '../../../../shared/service/house.service';
import {FILE_BASE64} from '../../../../shared/utils/file-base64-encoder';
import {FlatService} from '../../../../shared/service/flat.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  house: House = new House();

  constructor(private _houseService: HouseService, private _flatService: FlatService) {
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
    for(let one of this.house.flats){
      one.countRoom=1;
      one.priceForOneSpace=1;
      one.space=1;
    }
    this._houseService.save(this.house).subscribe(hou => {
      let fl: Subject<number> = new Subject<number>();
      for (let i = 0; i < this.house.flats.length; i++) {
        this._flatService.setImage(hou.flats[i].id, this.house.flats[i].image).subscribe(next => {
          fl.next(i);
        }, err => {
          console.error(err);
        });
      }
      fl.asObservable().subscribe(next => {
        if (next == hou.flats.length-1) {
          this._houseService.addImage(hou.id, this.house.image).subscribe(next => {
            console.log(next);
            alert('success');
            this.house = new House();
          }, err => {
            console.error(err);
          });
        }
      });
    }, err => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
