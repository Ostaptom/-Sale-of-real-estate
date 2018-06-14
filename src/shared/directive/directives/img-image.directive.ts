import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ImageService} from '../../service/image.service';

@Directive({
  selector: '[imgImage]'
})
export class ImgImageDirective implements OnInit {

  @Input() id: number;

  constructor(private element: ElementRef, private _imageService: ImageService) {
  }

  ngOnInit(): void {
    this._imageService.getImage(this.id).subscribe(next => {
      this.element.nativeElement.src = next;
    }, err => {
      console.error(err);
    });
  }

}
