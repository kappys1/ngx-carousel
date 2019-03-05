import {Component, ViewChild} from '@angular/core';
import { CarouselComponent } from 'projects/carousel/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year = new Date().getFullYear();
}
