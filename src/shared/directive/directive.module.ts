import {NgModule} from '@angular/core';
import {DivFileDirective} from './directives/div-file.directive';
import {DivMainImageDirective} from './directives/div-main-image.directive';
import {ImgFileDirective} from './directives/img-file.directive';
import {ImgMainImageDirective} from './directives/img-main-image.directive';

@NgModule({
  declarations:[
    DivFileDirective,
    DivMainImageDirective,
    ImgFileDirective,
    ImgMainImageDirective
  ],
  exports:[
    DivFileDirective,
    DivMainImageDirective,
    ImgFileDirective,
    ImgMainImageDirective
  ]
})
export class DirectiveModule {}
