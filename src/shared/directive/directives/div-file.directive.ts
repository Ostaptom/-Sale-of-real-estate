import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FlatService} from '../../service/flat.service';

@Directive({
  selector: '[divFile]'
})
export class DivFileDirective implements OnInit {

  @Input() id: number;

  constructor(private element: ElementRef, private _flatService:FlatService) {}

  ngOnInit(): void {
    this._flatService.getImage(this.id).subscribe(next => {
      this.element.nativeElement.style.backgroundImage = `url(${next})`;
    }, err => {
      console.error(err);
    });
  }

}
