import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ImageService} from '../../service/image.service';

@Directive({
  selector: '[divImage]'
})
export class DivImageDirective implements OnInit {

  @Input() id: number;

  constructor(private element: ElementRef, private _imageService: ImageService) {
  }

  ngOnInit(): void {
    this._imageService.getImage(this.id).subscribe(next => {
      this.element.nativeElement.style.backgroundImage = `url(${next})`;
    }, err => {
      console.error(err);
    });
  }

}
