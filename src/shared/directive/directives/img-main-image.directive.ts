import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {HouseService} from '../../service/house.service';

@Directive({
  selector: '[imgMainImage]'
})
export class ImgMainImageDirective implements OnInit {

  @Input() id: number;

  constructor(private element: ElementRef, private _houseService: HouseService) {
  }

  ngOnInit(): void {
    this._houseService.getImage(this.id).subscribe(next => {
      this.element.nativeElement.src = next;
    }, err => {
      console.error(err);
    });
  }

}
