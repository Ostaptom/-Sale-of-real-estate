import {Component, OnInit} from '@angular/core';
import {House} from '../../../shared/models/house';
import {HouseService} from '../../../shared/service/house.service';
import {ActivatedRoute} from '@angular/router';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent implements OnInit {

  house: House = new House();
  content = false;
  prevEl: HTMLImageElement;
  big = false;

  constructor(private _houseService: HouseService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(value =>
      this._houseService.findOne(value['id']).subscribe(next => {
        this.house = next;
        console.log(next.images);
        this.content = true;
      }, err => {
        console.error(err);
      })
    );
  }

  toggleSize(el: HTMLImageElement) {
    if (this.prevEl) {
      if (this.prevEl == el) {
        if (this.big) {
          console.log(this.big);
          el.style.width = 'auto';
          this.big = false;
        } else {
          console.log(this.big);
          el.style.width = '30vw';
          this.big = true;
        }
      } else {
        this.prevEl.style.width = 'auto';
        el.style.width = '30vw';
        this.prevEl = el;
        this.big = true;
      }
    } else {
      el.style.width = '30vw';
      this.prevEl = el;
      this.big = true;
    }
  }

  ngOnInit() {
  }

}
