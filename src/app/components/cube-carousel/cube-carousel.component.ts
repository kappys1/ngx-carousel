import {Component, OnInit, ViewChild} from '@angular/core';
import { CarouselComponent } from 'projects/carousel/src/public_api';

@Component({
  selector: 'app-cube-carousel',
  templateUrl: './cube-carousel.component.html',
  styleUrls: ['../simple-carousel/simple-carousel.component.css']
})
export class CubeCarouselComponent implements OnInit {

  constructor() { }

  @ViewChild('topCarousel') topCarousel: CarouselComponent;

  toggle() {
    this.topCarousel.toggleMode();
  }

  ngOnInit() {
  }
}
