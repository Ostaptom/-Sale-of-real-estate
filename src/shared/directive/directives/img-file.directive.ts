import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FlatService} from '../../service/flat.service';

@Directive({
  selector: '[imgFile]'
})
export class ImgFileDirective implements OnInit {

  @Input() id: number;

  constructor(private element: ElementRef, private _flatService:FlatService) {
  }

  ngOnInit(): void {
    this._flatService.getImage(this.id).subscribe(next => {
      this.element.nativeElement.src = next;
    }, err => {
      console.error(err);
    });
  }

}
