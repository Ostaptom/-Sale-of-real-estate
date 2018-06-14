import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FlatService} from '../../service/flat.service';

@Directive({
  selector: '[imgFileFloor]'
})
export class ImgFloorFileDirective implements OnInit {

  @Input() id: number;

  constructor(private element: ElementRef, private _flatService:FlatService) {
  }

  ngOnInit(): void {
    this._flatService.getImageF(this.id).subscribe(next => {
      this.element.nativeElement.src = next;
    }, err => {
      console.error(err);
    });
  }

}
