import {NgModule} from '@angular/core';
import {DivFileDirective} from './directives/div-file.directive';
import {DivMainImageDirective} from './directives/div-main-image.directive';
import {ImgFileDirective} from './directives/img-file.directive';
import {ImgMainImageDirective} from './directives/img-main-image.directive';
import {DivImageDirective} from './directives/div-image.directive';
import {ImgImageDirective} from './directives/img-image.directive';

@NgModule({
  declarations:[
    DivFileDirective,
    DivMainImageDirective,
    DivImageDirective,
    ImgFileDirective,
    ImgMainImageDirective,
    ImgImageDirective
  ],
  exports:[
    DivFileDirective,
    DivMainImageDirective,
    DivImageDirective,
    ImgFileDirective,
    ImgMainImageDirective,
    ImgImageDirective
  ]
})
export class DirectiveModule {}
