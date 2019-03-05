import { CarouselComponent } from './../../projects/carousel/src/lib/components/carousel/carousel.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular7-carousel';

  @ViewChild('topCarousel') topCarousel: CarouselComponent;

  prev() {
    this.topCarousel.slidePrev();
  }
  next() {
    this.topCarousel.slideNext();
  }
  toggle() {
    this.topCarousel.toggleMode();
  }
}
