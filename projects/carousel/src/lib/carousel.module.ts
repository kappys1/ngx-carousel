import { DomChangeDirective } from './directives/dom-change.directive';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwiperDirective } from './directives/swiper.directive';

const COMPONENTS = [
  CarouselComponent,
];
const DIRECTIVES = [
  SwiperDirective,
  DomChangeDirective
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselModule { }
