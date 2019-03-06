import {Component, OnInit, ViewChild} from '@angular/core';
import { CarouselComponent } from 'projects/carousel/src/public_api';


@Component({
  selector: 'app-functions-carousel',
  templateUrl: './functions-carousel.component.html',
  styleUrls: ['./functions-carousel.component.css']
})
export class FunctionsCarouselComponent implements OnInit {

  constructor() { }


  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  ngOnInit() {
  }

  prev() {
    this.topCarousel.slidePrev();
  }
  next() {
    this.topCarousel.slideNext();
  }
}
