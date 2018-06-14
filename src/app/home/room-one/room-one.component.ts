import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Flat} from '../../../shared/models/flat';
import {FlatService} from '../../../shared/service/flat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-room-one',
  templateUrl: './room-one.component.html',
  styleUrls: ['./room-one.component.css']
})
export class RoomOneComponent implements OnInit {
  flat: Flat;
  nameH: string;
  content = false;
  result: number;

  @ViewChild('form') form: ElementRef;
  private big = false;

  constructor(private _flatService: FlatService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(next => {
      this.content = false;
      this._flatService.findOne(next['id']).subscribe(next => {
        this.flat = next;
        this._flatService.getHouseForFloor(this.flat.id).subscribe(next => {
          this.nameH = next;
          this.content = true;
        }, err => {
          console.error(err);
        });
      }, err => {
        console.error(err);
      });
    });
  }

  ngOnInit() {
  }

  openForm() {
    this.form.nativeElement.style.top = '15px';
  }

  closeForm() {
    this.form.nativeElement.style.top = '-120%';
  }

  calculate(i1: number) {
    let priceLast = (this.flat.price) * .9;
    if (i1 < 12) {
      alert('Мінімальна іпотека на 12 місяців');
      return;
    } else if (i1 > 24) {
      this.result = ((priceLast + (this.flat.price * (.05 * (i1 / 10)))) / i1);
    } else {
      this.result = priceLast / i1;
    }
  }

  toggleSize(el: HTMLImageElement) {
    if (this.big) {
      console.log(this.big);
      el.style.width = '10vw';
      this.big = false;
    } else {
      console.log(this.big);
      el.style.width = '30vw';
      this.big = true;
    }
  }


}
