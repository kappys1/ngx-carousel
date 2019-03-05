import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges,
  ViewChild,
  AfterViewInit,
  OnChanges
} from '@angular/core';

import Carousel from '../../model/Carousel';
import { SwiperDirective } from '../../directives/swiper.directive';
@Component({
  selector: 'carousel-component',
  styles: [`
   :host{
        display: flex;
    }
   :host .container {
        margin: 0 auto;
        width: 600px;
        height: 400px;
        position: relative;
    }
   :host .container .carousel {
        height: 100%;
        width: 100%;
        position: absolute;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;

    }
   :host.ready .carousel {
        -webkit-transition: -webkit-transform 300ms;
        -moz-transition:-moz-transform 300ms;
        -o-transition: -o-transform 300ms;
        transition: transform 300ms;
    }
   :host .container .carousel::content >>> .item-carousel {
        display: block;
        position: absolute;
        border:1px solid black;
        width: 100%;
        height: 100%;
        text-align: center;
        transform-style: preserve-3d;
        opacity: 0;
    }
   :host.ready .carousel::content >>> .item-carousel {
        -webkit-transition: opacity 300ms, -webkit-transform 300ms;
        -moz-transition: opacity 300ms, -moz-transform 300ms;
        -o-transition: opacity 300ms, -o-transform 300ms;
        transition: opacity 300ms, transform 300ms;
    }

   :host .container .carousel::content >>> .item-carousel img{
        user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

   :host .container .carousel::content >>> .item-carousel.next,
   :host .container .carousel::content >>> .item-carousel.prev,
   :host .container .carousel::content >>> .item-carousel.actual{
        opacity: 0.95;
    }
  `],
  template: '<div class="container" #container>\n' +
    '  <div class="carousel" #carousel swiper (domChange)="onDomChange($event)">\n' +
    '    <ng-content select=".item-carousel"></ng-content>\n' +
    '  </div>\n' +
    '</div>',
})
export class CarouselComponent implements OnInit, OnChanges, AfterViewInit {


  public carousel: Carousel;
  private radius: any;
  private rotationFn: string;
  private itemsCarouselRendered =  0 ;
  @ViewChild(SwiperDirective) swiper: SwiperDirective;
  @Input() morePairSlides = 1;
  @Input() angle = 45;
  @Input() ratioScale = 1;
  @Input() margin = 20;
  @Input() perspective = 2000;
  @Input() endInSlide = true;
  @Input() timeToSlide = 300;
  @Input() lockSlides = false;
  @Input() initialSlide = 0;
  @Input() loop = false;
  @Input() mode = 'horizontal';

  // autoPlay
  @Input() autoPlay = false;
  @Input() delayAutoPlay = 3000;
  private autoPlayTimeout: any;

  @Output() onInit = new EventEmitter();
  @Output() onReady = new EventEmitter();
  @Output() onChangeProperties = new EventEmitter();

  @Output() onSlideChange = new EventEmitter();
  @Output() onSlideCentered = new EventEmitter();

  @Output() onTransitionStart = new EventEmitter();
  @Output() onTransitionEnd = new EventEmitter();
  @Output() onSlideNextTransitionStart = new EventEmitter();
  @Output() onSlideNextTransitionEnd = new EventEmitter();
  @Output() onSlidePrevTransitionStart = new EventEmitter();
  @Output() onSlidePrevTransitionEnd = new EventEmitter();

  @Output() onSlideMove = new EventEmitter();
  @Output() onSlideMoveEnd = new EventEmitter();
  @Output() onSlideMoveStart = new EventEmitter();

  @Output() onTouchMove = new EventEmitter();
  @Output() onTouchStart = new EventEmitter();
  @Output() onTouchEnd = new EventEmitter();

  @Output() onReachBeginning = new EventEmitter();
  @Output() onReachEnd = new EventEmitter();

  @ViewChild('carousel') carouselElm: ElementRef;
  @ViewChild('container') containerElm: ElementRef;



  constructor(private componentElement: ElementRef) {
    this.carousel = new Carousel();
  }

  onDomChange($event: any) {
    if ($event.addedNodes.length > 0) {
      if (this.itemsCarouselRendered === 0) {
        this.reInit();
      } else {
        this.update();
        this.updateCssShowSlides();
      }
      this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName('item-carousel').length;
    }
  }

  ngOnInit() {
    this.onInit.emit(this.carousel);
    this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName('item-carousel').length;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let i = 0; i < Object.keys(changes).length; i++) {
        if (
          changes[Object.keys(changes)[i]].currentValue !== changes[Object.keys(changes)[i]].previousValue &&
          !changes[Object.keys(changes)[i]].isFirstChange()) {
            this.update();
            this.onChangeProperties.emit(changes);
        }
    }

  }

  ngAfterViewInit() {

    this.initEventsPan();
    this.configPlugin();
    setTimeout( function() {
        this.componentElement.nativeElement.className += ' ready';
    }.bind(this));
    this.onReady.emit(this.carousel);
  }

  public lockCarousel(val: boolean) {
    this.carousel.lockSlides = val;
  }

  public slideNext() {
    if (this.checkLimitsCarrousel(this.carousel.activeIndex + 1)) {
      this.moveSlideTo(this.carousel.activeIndex + 1);
      const vm = this;
      setTimeout( () =>  vm.detectCurrentSlide());
    }
  }
  public slidePrev() {
    if (this.checkLimitsCarrousel(this.carousel.activeIndex - 1)) {
      this.moveSlideTo(this.carousel.activeIndex - 1);
      const vm = this;
      setTimeout( () =>  vm.detectCurrentSlide());
    }
  }
  public slideTo(index: number) {
    if (this.checkLimitsCarrousel(index)) {
      this.moveSlideTo(index);
      const vm = this;
      setTimeout( () =>  vm.detectCurrentSlide());
    }
  }

  public autoPlayStart() {
      this.autoPlay = true;
      this.autoPlaySlide();
  }
  public autoPlayStop() {
      clearInterval(this.autoPlayTimeout);
      this.carousel.autoPlayIsRunning = false;
  }
  public toggleMode() {
      this.mode = this.mode === 'vertical' ? 'horizontal' : 'vertical';
      this.update();

  }

  public reInit() {
    this.carousel = new Carousel;
    this.configPlugin();
  }

  public update() {
      this.setPerspectiveContainer();
      this.checkRotation();
      this.carousel.items = Array.from(this.carouselElm.nativeElement.getElementsByClassName('item-carousel'));
      this.carousel.totalItems = this.carousel.items.length;
      this.getmaxSizes();
      this.carousel.lockSlides = this.lockSlides;
      this.setDegreesOnSlides();
      this.setTransformCarrousel(-this.carousel.degreesSlides[this.carousel.activeIndex]);
  }



  private configPlugin() {
    // this.setPerspectiveContainer();
    // this.checkRotation();
    // this.carousel.items = Array.from(this.carouselElm.nativeElement.getElementsByClassName('item-carousel'));
    // this.carousel.totalItems = this.carousel.items.length;
    // this.getmaxSizes();
    // this.carousel.lockSlides = this.lockSlides;
    // this.setDegreesOnSlides();
    this.update();
    this.manageEvents();
    this.initSlidesOn();
    this.updateCssShowSlides();
    this.autoPlaySlide();
  }


  private initEventsPan() {
      this.swiper.onSwipeLeft.subscribe((distance: number) => {
        this.rotate(distance);
      });
      this.swiper.onSwipeRight.subscribe((distance: number) => {
        this.rotate(distance);
      });
      this.swiper.onSwipeEnd.subscribe((distance: number) => {
        this.rotate(distance);
      });
  }

  private rotate(e: any) {
    // console.log(e);
    if (!this.carousel.lockSlides) {
        const velocity = this.carousel.isHorizontal ? e.velocityX / 10 : -e.velocityY / 10;
        console.log(this.carousel.currdeg + velocity * window.devicePixelRatio);

        this.setNewDeg(this.carousel.currdeg + velocity * window.devicePixelRatio);
        this.moveCarrousel(this.carousel.currdeg);
        if (e.isFinal) {
            if (this.endInSlide) {
                this.moveSlideTo(this.carousel.activeIndex);
                console.log(this.carousel.activeIndex);
            }
        }
    }
  }

  private autoPlaySlide() {
    if (this.autoPlay) {
        this.autoPlayTimeout = setTimeout(function () {
            this.carousel.autoPlayIsRunning = true;
            this.slideNext();
            this.autoPlaySlide();
        }.bind(this), this.delayAutoPlay);
    }
  }

  private initSlidesOn() {
    if (this.initialSlide >= 0 && this.initialSlide < this.carousel.items.length) {
      this.carousel.activeIndex = parseInt(this.initialSlide.toString());
    } else if (this.initialSlide >= this.carousel.items.length) {
      this.carousel.activeIndex = this.carousel.items.length - 1;
      this.initialSlide = this.carousel.activeIndex;
    } else {
        this.carousel.activeIndex = 0;
        this.initialSlide = this.carousel.activeIndex;
    }

    const newDeg = this.carousel.activeIndex * this.angle;
    this.setNewDeg(-newDeg);
    this.setTransformCarrousel(-newDeg);
  }

  private setNewDeg(newDeg: number) {
    this.carousel.currdeg = newDeg;
    if (this.carousel.currdeg > 0) {
      this.carousel.currdeg = 0;
    }
    if (this.carousel.currdeg < -this.carousel.maxDegree) {
      this.carousel.currdeg = -this.carousel.maxDegree;
    }

  }
  private checkRotation() {
      this.carousel.isHorizontal = this.mode !== 'vertical';
      this.rotationFn = this.carousel.isHorizontal ? 'rotateY'
      : 'rotateX';
  }
  private checkLimitsCarrousel(index: number) {
    return this.carousel.activeIndex !== index && index >= 0 && index < this.carousel.totalItems;
  }

  private moveSlideTo(index: number) {
    this.setNewDeg(-this.carousel.degreesSlides[index]);
    this.moveCarrousel(this.carousel.currdeg, this.timeToSlide);
  }

  private moveCarrousel(deg: number, timeTransform: number = 0) {
    const transition = `transform ${timeTransform}ms`;
    this.carouselElm.nativeElement.style.transition = transition;
    this.carouselElm.nativeElement.style.webkitTransition = transition;
    this.setTransformCarrousel(deg);
    this.detectCurrentSlide();

  }
  private setTransformCarrousel(deg: number) {
    const transform = `translateZ(${-this.radius}px) ${this.rotationFn}(${deg}deg)`;
    this.carouselElm.nativeElement.style.transform = transform;
    this.carouselElm.nativeElement.style.webkitTransform = transform;
    this.sendSlideIsCentered();
  }

  private sendSlideIsCentered() {
      if (this.carousel.currdeg === -this.carousel.degreesSlides[this.carousel.activeIndex]) {
          this.onSlideCentered.emit(this.carousel);
      }
  }

  private setPerspectiveContainer() {
    this.containerElm.nativeElement.style.perspective = this.perspective;
    this.containerElm.nativeElement.style.webkitPerspective = this.perspective;
    this.containerElm.nativeElement.style.MozPerspective = this.perspective;
  }

  private getmaxSizes() {
    this.carousel.items.map((val: any) => {
      const witdh = val.offsetWidth;
      const height = val.offsetHeight;
      this.carousel.maxWidthSize = 0;
      this.carousel.maxHeigthSize = 0;
      if ( witdh > this.carousel.maxWidthSize) {
        this.carousel.maxWidthSize = witdh;
          this.carousel.totalWidth = this.carousel.items.length * this.carousel.maxWidthSize;
      }
      if ( height > this.carousel.maxHeigthSize) {
        this.carousel.maxHeigthSize = height;
          this.carousel.totalWidth = this.carousel.items.length * this.carousel.maxHeigthSize;
      }
    });
    this.setContainerWithMaxSize();
  }
  private setContainerWithMaxSize() {
    this.containerElm.nativeElement.style.width = this.carousel.maxWidthSize + 'px';
    this.containerElm.nativeElement.style.height = this.carousel.maxHeigthSize + 'px';
  }
  private setDegreesOnSlides() {
    let auxDegree = 0;
    const panelSize = this.carousel.isHorizontal ? this.carousel.maxWidthSize : this.carousel.maxHeigthSize;
    this.radius = (Math.round( ( panelSize / 2 ) /
      Math.tan( Math.PI / (360 / this.angle) ) ) + this.margin);
    this.carousel.degreesSlides = [];
    this.carousel.items.map((val: any, index: number) => {
      const transform = `${this.rotationFn}(${auxDegree}deg) translateZ(${this.radius}px)`;
      val.style.transform = transform;
      val.style.webkitTransform = transform;
      this.carousel.degreesSlides.push(auxDegree);
      this.carousel.maxDegree = auxDegree;
      auxDegree += this.angle;
    });

  }

  private detectCurrentSlide() {
    let aux = 99e9;
    let index = 0;
    this.carousel.degreesSlides.forEach((val: any, i: number) => {
      const res = Math.abs(val - Math.abs(this.carousel.currdeg));
      if (res < aux) {
        aux = res;
        index = i;
      }
    });
    if (this.carousel.activeIndex !== index) {
      this.carousel.lastIndex =  this.carousel.activeIndex;
      this.carousel.activeIndex = index;
      this.updateCssShowSlides();

      this.onSlideChange.emit(this.carousel);
      if (this.carousel.activeIndex === 0) {
          this.onReachBeginning.emit(this.carousel);
      } else if (this.carousel.activeIndex === this.carousel.totalItems - 1) {
          this.onReachEnd.emit(this.carousel);
      }
    }
  }

  private updateCssShowSlides() {
    const vm = this;
    const currentIndex = vm.carousel.activeIndex;
    const actual = this.carousel.items[currentIndex];
    vm.removeClassShowSlides('actual');
    vm.removeClassShowSlides('prev');
    vm.removeClassShowSlides('next');
    if (actual) {
      actual.className += ' actual';
    }
    for (let x = 0; x < this.morePairSlides; x++) {
      const prev = vm.carousel.items[currentIndex - (x + 1)];
      const next = vm.carousel.items[currentIndex + (x + 1)];
      if (prev) {
        prev.className += ' prev';
      }
      if (next) {
        next.className += ' next';
      }
    }
  }
  private removeClassShowSlides(tagClass: string) {
    if (this.carouselElm.nativeElement.getElementsByClassName(tagClass).length > 0) {
      Array.from(this.carouselElm.nativeElement.getElementsByClassName(tagClass)).map((val: any) => {
        val['classList'].remove(tagClass);
      });
    }
  }
  private manageEvents() {
    const options: any = {
      preventDefault: true
    };
    const vm = this;
    // const hammertime = new Hammer(this.carouselElm.nativeElement, options);


    // hammertime.on('panstart', function(e) {
    //     vm.onSlideMoveStart.emit({ carousel: vm.carousel, event: e});
    // });
    // hammertime.on('panend', function(e) {
    //     vm.onSlideMoveEnd.emit({ carousel: vm.carousel, event: e});
    // });
    // hammertime.on('pan', function(e) {
    //     vm.onSlideMove.emit({carousel: vm.carousel, event: e});
    // });


    this.carouselElm.nativeElement.addEventListener('touchstart', (e: any) => {
        vm.onTouchStart.emit({carousel: vm.carousel, event: e});
    });
    this.carouselElm.nativeElement.addEventListener('touchmove', (e: any) => {
        vm.onTouchMove.emit({carousel: vm.carousel, event: e});
    });
    this.carouselElm.nativeElement.addEventListener('touchend', (e: any) => {
        vm.onTouchEnd.emit({ carousel: vm.carousel, event: e});
    });

    this.carouselElm.nativeElement.addEventListener('transitionend', (e: any) => {
      const elm = {carousel: vm.carousel, event: e};
      if (e.propertyName === 'transform') {
        this.onTransitionEnd.emit(elm);
        if (vm.carousel.lastIndex > vm.carousel.activeIndex) {
          this.onSlideNextTransitionEnd.emit(elm);
        } else {
          this.onSlidePrevTransitionEnd.emit(elm);
        }
      }
    });

    this.carouselElm.nativeElement.addEventListener('transitionstart', (e: any) => {
      const elm = {carousel: vm.carousel, event: e};
      if (e.propertyName === 'transform') {
          this.onTransitionStart.emit(elm);
          // if (e.direction === Hammer.DIRECTION_LEFT) {
          //   vm.onSlideNextTransitionStart.emit(elm);
          // } else if (e.direction === Hammer.DIRECTION_RIGHT) {
          //   vm.onSlidePrevTransitionStart.emit(elm);
          // }
      }
    });
    window.addEventListener('resize', function() {
        this.update();
    }.bind(this));

  }
}
