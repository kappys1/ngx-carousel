import {Component, OnInit, ViewChild} from '@angular/core';
import { CarouselComponent } from 'projects/carousel/src/public_api';

@Component({
  selector: 'app-autoplay-carousel',
  templateUrl: './autoplay-carousel.component.html',
  styleUrls: ['./autoplay-carousel.component.css']
})
export class AutoplayCarouselComponent implements OnInit {

  constructor() {

  }

  @ViewChild('topCarousel') topCarousel: CarouselComponent;

  toggle() {
    this.topCarousel.toggleMode();
  }

  ngOnInit() {
  }

}
