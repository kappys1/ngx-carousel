import { CarouselModule } from './../../projects/carousel/src/lib/carousel.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleCarouselComponent } from './components/simple-carousel/simple-carousel.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { ExamplesComponent } from './pages/examples/examples.component';
import { ApiComponent } from './pages/api/api.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { PropertiesCarouselComponent } from './components/properties-carousel/properties-carousel.component';
import { FunctionsCarouselComponent } from './components/functions-carousel/functions-carousel.component';
import {SafeHtmlPipe} from './pipes/pipe.safehtml';
import { CubeCarouselComponent } from './components/cube-carousel/cube-carousel.component';
import { StyleCarouselComponent } from './components/style-carousel/style-carousel.component';
import {AutoplayCarouselComponent} from './components/autoplay-carousel/autoplay-carousel.component';
import {MultipleSliderCarouselComponent} from './components/multiple-sliders-carousel/multiple-slider-carousel.component';
import {SimpleCarouselFromServiceComponent} from './components/simple-carousel-from-service/simple-carousel-from-service.component';
import {SimpleCarouselService} from './components/simple-carousel-from-service/simple-carousel-from-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCarouselComponent,
    SimpleCarouselFromServiceComponent,
    ExamplesComponent,
    ApiComponent,
    SafeHtmlPipe,
    GetStartedComponent,
    PropertiesCarouselComponent,
    FunctionsCarouselComponent,
    CubeCarouselComponent,
    StyleCarouselComponent,
    AutoplayCarouselComponent,
    MultipleSliderCarouselComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CarouselModule,
    BrowserModule
  ],
  providers: [SimpleCarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
