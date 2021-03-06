import {Component, OnInit} from '@angular/core';
import {House} from '../../../../shared/models/house';
import {Flat} from '../../../../shared/models/flat';
import {Image} from '../../../../shared/models/image';
import {HouseService} from '../../../../shared/service/house.service';
import {FILE_BASE64} from '../../../../shared/utils/file-base64-encoder';
import {FlatService} from '../../../../shared/service/flat.service';
import {Subject} from 'rxjs/Subject';
import {ImageService} from '../../../../shared/service/image.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  house: House = new House();

  constructor(private _houseService: HouseService, private _flatService: FlatService, private _imageService: ImageService) {
    this.house.flats = [];
    this.house.images = [];
  }

  addFlat(flat: Flat) {
    console.log('push flat');
    this.house.flats.push(flat);
  }

  rmFlat(index: number) {
    console.log(index);
    this.house.flats.splice(index, 1);
  }

  rmImg(index: number) {
    console.log(index);
    this.house.images.splice(index, 1);
  }

  parseImage(inp: HTMLInputElement) {
    FILE_BASE64(inp.files[0]).subscribe(next => {
      this.house.image = next;
    });
  }

  parseImageS(inp: HTMLInputElement) {
    FILE_BASE64(inp.files[0]).subscribe(next => {
      let img = new Image();
      img.image = next;
      this.house.images.push(img);
    });
  }

  saveHouse() {
    if (this.house.flats.length == 0) {
      alert('not enough flats');
      return;
    } if (this.house.images.length == 0) {
      alert('not enough images');
      return;
    }if (!this.house.image){
      alert('no image for house');
      return
    }
    // for (let one of this.house.flats) {
    //   one.countRoom = 1;
    //   one.priceForOneSpace = 1;
    //   one.space = 1;
    // }
    // if(!this.house.images)
    //   this.house.images = [];
    let tempImsges: Image[] = [];
    Object.assign(tempImsges, this.house.images);
    // console.log('tempImsges  ',tempImsges);
    this.house.images = [];
    // console.log('tempImsges  ',tempImsges);
    // console.log('this.house.images   ',this.house.images);
    this._houseService.save(this.house).subscribe(hou => {
      let fl: Subject<number> = new Subject<number>();
      let im: Subject<number> = new Subject<number>();
      let bl: Subject<number> = new Subject<number>();
      let blv = 0;
      for (let i = 0; i < this.house.flats.length; i++) {
        this._flatService.setImage(hou.flats[i].id, this.house.flats[i].images).subscribe(next => {
          fl.next(i);
        }, err => {
          console.error(err);
        });
      }
      for (let i = 0; i < tempImsges.length; i++) {
        this._imageService.save(tempImsges[i].image, hou.id).subscribe(next => {
          im.next(i);
        }, err => {
          console.error(err);
        });
      }
      fl.asObservable().subscribe(next => {
        if (next == hou.flats.length - 1) {
          bl.next(blv++);
        }
      });
      im.asObservable().subscribe(next => {
        if (next == tempImsges.length - 1) {
          bl.next(blv++);
        }
      });
      bl.asObservable().subscribe(next => {
        // console.log(next);
        if (next == 1) {
          this._houseService.addImage(hou.id, this.house.image).subscribe(next => {
            // console.log(next);
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
