(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/carousel/src/lib/carousel.module.ts":
/*!******************************************************!*\
  !*** ./projects/carousel/src/lib/carousel.module.ts ***!
  \******************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directives_dom_change_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/dom-change.directive */ "./projects/carousel/src/lib/directives/dom-change.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./projects/carousel/src/lib/components/carousel/carousel.component.ts");
/* harmony import */ var _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/swiper.directive */ "./projects/carousel/src/lib/directives/swiper.directive.ts");





var COMPONENTS = [
    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"],
];
var DIRECTIVES = [
    _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"],
    _directives_dom_change_directive__WEBPACK_IMPORTED_MODULE_1__["DomChangeDirective"]
];
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: COMPONENTS.concat(DIRECTIVES),
            imports: [],
            exports: COMPONENTS.concat(DIRECTIVES),
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ }),

/***/ "./projects/carousel/src/lib/components/carousel/carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./projects/carousel/src/lib/components/carousel/carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Carousel */ "./projects/carousel/src/lib/model/Carousel.ts");
/* harmony import */ var _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/swiper.directive */ "./projects/carousel/src/lib/directives/swiper.directive.ts");




var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(componentElement) {
        this.componentElement = componentElement;
        this.itemsCarouselRendered = 0;
        this.morePairSlides = 1;
        this.threshold = 5;
        this.angle = 45;
        this.ratioScale = 1;
        this.margin = 20;
        this.perspective = 2000;
        this.endInSlide = true;
        this.timeToSlide = 300;
        this.lockSlides = false;
        this.initialSlide = 0;
        this.loop = false;
        this.mode = 'horizontal';
        // autoPlay
        this.autoPlay = false;
        this.delayAutoPlay = 3000;
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChangeProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideNextTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideNextTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlidePrevTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlidePrevTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideMoveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSlideMoveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReachBeginning = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.carousel = new _model_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    CarouselComponent.prototype.onDomChange = function ($event) {
        if ($event.addedNodes.length > 0) {
            if (this.itemsCarouselRendered === 0) {
                this.reInit();
            }
            else {
                this.update();
                this.updateCssShowSlides();
            }
            this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName('item-carousel').length;
        }
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.onInit.emit(this.carousel);
        this.itemsCarouselRendered = this.carouselElm.nativeElement.getElementsByClassName('item-carousel').length;
    };
    CarouselComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        Object.keys(changes).map(function (val) {
            if (changes[val].currentValue !== changes[val].previousValue && !changes[val].isFirstChange()) {
                _this.update();
                _this.onChangeProperties.emit(changes);
            }
        });
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        this.initEventsPan();
        this.configPlugin();
        setTimeout(function () {
            this.componentElement.nativeElement.className += ' ready';
        }.bind(this));
        this.onReady.emit(this.carousel);
    };
    CarouselComponent.prototype.lockCarousel = function (val) {
        this.carousel.lockSlides = val;
    };
    CarouselComponent.prototype.slideNext = function () {
        if (this.checkLimitsCarrousel(this.carousel.activeIndex + 1)) {
            this.moveSlideTo(this.carousel.activeIndex + 1);
            var vm_1 = this;
            setTimeout(function () { return vm_1.detectCurrentSlide(); });
        }
    };
    CarouselComponent.prototype.slidePrev = function () {
        if (this.checkLimitsCarrousel(this.carousel.activeIndex - 1)) {
            this.moveSlideTo(this.carousel.activeIndex - 1);
            var vm_2 = this;
            setTimeout(function () { return vm_2.detectCurrentSlide(); });
        }
    };
    CarouselComponent.prototype.slideTo = function (index) {
        if (this.checkLimitsCarrousel(index)) {
            this.moveSlideTo(index);
            var vm_3 = this;
            setTimeout(function () { return vm_3.detectCurrentSlide(); });
        }
    };
    CarouselComponent.prototype.autoPlayStart = function () {
        this.autoPlay = true;
        this.autoPlaySlide();
    };
    CarouselComponent.prototype.autoPlayStop = function () {
        clearInterval(this.autoPlayTimeout);
        this.carousel.autoPlayIsRunning = false;
    };
    CarouselComponent.prototype.toggleMode = function () {
        this.mode = this.mode === 'vertical' ? 'horizontal' : 'vertical';
        this.update();
    };
    CarouselComponent.prototype.reInit = function () {
        this.carousel = new _model_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.configPlugin();
    };
    CarouselComponent.prototype.update = function () {
        this.setPerspectiveContainer();
        this.checkRotation();
        this.carousel.items = Array.from(this.carouselElm.nativeElement.getElementsByClassName('item-carousel'));
        this.carousel.totalItems = this.carousel.items.length;
        this.getmaxSizes();
        this.carousel.lockSlides = this.lockSlides;
        this.setDegreesOnSlides();
        this.setTransformCarrousel(-this.carousel.degreesSlides[this.carousel.activeIndex]);
    };
    CarouselComponent.prototype.configPlugin = function () {
        this.update();
        this.manageEvents();
        this.initSlidesOn();
        this.updateCssShowSlides();
        this.autoPlaySlide();
    };
    CarouselComponent.prototype.initEventsPan = function () {
        var _this = this;
        this.swiper.onSwipe.subscribe(function (distance) {
            _this.rotate(distance);
        });
        this.swiper.onSwipeEnd.subscribe(function (distance) {
            _this.rotate(distance);
        });
    };
    CarouselComponent.prototype.rotate = function (e) {
        console.log(e);
        if (!this.carousel.lockSlides) {
            var velocity = this.carousel.isHorizontal ? e.velocityX / this.threshold : -e.velocityY / this.threshold;
            this.setNewDeg(this.carousel.currdeg + velocity * window.devicePixelRatio);
            this.moveCarrousel(this.carousel.currdeg);
            if (e.isFinal && this.endInSlide) {
                this.moveSlideTo(this.carousel.activeIndex);
            }
        }
    };
    CarouselComponent.prototype.autoPlaySlide = function () {
        if (this.autoPlay) {
            this.autoPlayTimeout = setTimeout(function () {
                this.carousel.autoPlayIsRunning = true;
                this.slideNext();
                this.autoPlaySlide();
            }.bind(this), this.delayAutoPlay);
        }
    };
    CarouselComponent.prototype.initSlidesOn = function () {
        if (this.initialSlide >= 0 && this.initialSlide < this.carousel.items.length) {
            this.carousel.activeIndex = parseInt(this.initialSlide.toString());
        }
        else if (this.initialSlide >= this.carousel.items.length) {
            this.carousel.activeIndex = this.carousel.items.length - 1;
            this.initialSlide = this.carousel.activeIndex;
        }
        else {
            this.carousel.activeIndex = 0;
            this.initialSlide = this.carousel.activeIndex;
        }
        var newDeg = this.carousel.activeIndex * this.angle;
        this.setNewDeg(-newDeg);
        this.setTransformCarrousel(-newDeg);
    };
    CarouselComponent.prototype.setNewDeg = function (newDeg) {
        this.carousel.currdeg = newDeg;
        if (this.carousel.currdeg > 0) {
            this.carousel.currdeg = 0;
        }
        if (this.carousel.currdeg < -this.carousel.maxDegree) {
            this.carousel.currdeg = -this.carousel.maxDegree;
        }
    };
    CarouselComponent.prototype.checkRotation = function () {
        this.carousel.isHorizontal = this.mode !== 'vertical';
        this.rotationFn = this.carousel.isHorizontal ? 'rotateY'
            : 'rotateX';
    };
    CarouselComponent.prototype.checkLimitsCarrousel = function (index) {
        return this.carousel.activeIndex !== index && index >= 0 && index < this.carousel.totalItems;
    };
    CarouselComponent.prototype.moveSlideTo = function (index) {
        this.setNewDeg(-this.carousel.degreesSlides[index]);
        this.moveCarrousel(this.carousel.currdeg, this.timeToSlide);
    };
    CarouselComponent.prototype.moveCarrousel = function (deg, timeTransform) {
        if (timeTransform === void 0) { timeTransform = 0; }
        var transition = "transform " + timeTransform + "ms";
        this.carouselElm.nativeElement.style.transition = transition;
        this.carouselElm.nativeElement.style.webkitTransition = transition;
        this.setTransformCarrousel(deg);
        this.detectCurrentSlide();
    };
    CarouselComponent.prototype.setTransformCarrousel = function (deg) {
        var transform = "translateZ(" + -this.radius + "px) " + this.rotationFn + "(" + deg + "deg)";
        this.carouselElm.nativeElement.style.transform = transform;
        this.carouselElm.nativeElement.style.webkitTransform = transform;
        this.sendSlideIsCentered();
    };
    CarouselComponent.prototype.sendSlideIsCentered = function () {
        if (this.carousel.currdeg === -this.carousel.degreesSlides[this.carousel.activeIndex]) {
            this.onSlideCentered.emit(this.carousel);
        }
    };
    CarouselComponent.prototype.setPerspectiveContainer = function () {
        this.containerElm.nativeElement.style.perspective = this.perspective;
        this.containerElm.nativeElement.style.webkitPerspective = this.perspective;
        this.containerElm.nativeElement.style.MozPerspective = this.perspective;
    };
    CarouselComponent.prototype.getmaxSizes = function () {
        var _this = this;
        this.carousel.items.map(function (val) {
            var width = val.offsetWidth;
            var height = val.offsetHeight;
            _this.carousel.maxWidthSize = 0;
            _this.carousel.maxHeightSize = 0;
            if (width > _this.carousel.maxWidthSize) {
                _this.carousel.maxWidthSize = width;
                _this.carousel.totalWidth = _this.carousel.items.length * _this.carousel.maxWidthSize;
            }
            if (height > _this.carousel.maxHeightSize) {
                _this.carousel.maxHeightSize = height;
                _this.carousel.totalWidth = _this.carousel.items.length * _this.carousel.maxHeightSize;
            }
        });
        this.setContainerWithMaxSize();
    };
    CarouselComponent.prototype.setContainerWithMaxSize = function () {
        this.containerElm.nativeElement.style.width = this.carousel.maxWidthSize + 'px';
        this.containerElm.nativeElement.style.height = this.carousel.maxHeightSize + 'px';
    };
    CarouselComponent.prototype.setDegreesOnSlides = function () {
        var _this = this;
        var auxDegree = 0;
        var panelSize = this.carousel.isHorizontal ? this.carousel.maxWidthSize : this.carousel.maxHeightSize;
        this.radius = (Math.round((panelSize / 2) /
            Math.tan(Math.PI / (360 / this.angle))) + this.margin);
        this.carousel.degreesSlides = [];
        this.carousel.items.map(function (val, index) {
            var transform = _this.rotationFn + "(" + auxDegree + "deg) translateZ(" + _this.radius + "px)";
            val.style.transform = transform;
            val.style.webkitTransform = transform;
            _this.carousel.degreesSlides.push(auxDegree);
            _this.carousel.maxDegree = auxDegree;
            auxDegree += _this.angle;
        });
    };
    CarouselComponent.prototype.detectCurrentSlide = function () {
        var _this = this;
        var aux = 99e9;
        var index = 0;
        this.carousel.degreesSlides.forEach(function (val, i) {
            var res = Math.abs(val - Math.abs(_this.carousel.currdeg));
            if (res < aux) {
                aux = res;
                index = i;
            }
        });
        if (this.carousel.activeIndex !== index) {
            this.carousel.lastIndex = this.carousel.activeIndex;
            this.carousel.activeIndex = index;
            this.updateCssShowSlides();
            this.onSlideChange.emit(this.carousel);
            if (this.carousel.activeIndex === 0) {
                this.onReachBeginning.emit(this.carousel);
            }
            else if (this.carousel.activeIndex === this.carousel.totalItems - 1) {
                this.onReachEnd.emit(this.carousel);
            }
        }
    };
    CarouselComponent.prototype.updateCssShowSlides = function () {
        var vm = this;
        var currentIndex = vm.carousel.activeIndex;
        var actual = this.carousel.items[currentIndex];
        vm.removeClassShowSlides('actual');
        vm.removeClassShowSlides('prev');
        vm.removeClassShowSlides('next');
        if (actual) {
            actual.className += ' actual';
        }
        for (var x = 0; x < this.morePairSlides; x++) {
            var prev = vm.carousel.items[currentIndex - (x + 1)];
            var next = vm.carousel.items[currentIndex + (x + 1)];
            if (prev) {
                prev.className += ' prev';
            }
            if (next) {
                next.className += ' next';
            }
        }
    };
    CarouselComponent.prototype.removeClassShowSlides = function (tagClass) {
        if (this.carouselElm.nativeElement.getElementsByClassName(tagClass).length > 0) {
            Array.from(this.carouselElm.nativeElement.getElementsByClassName(tagClass)).map(function (val) {
                val['classList'].remove(tagClass);
            });
        }
    };
    CarouselComponent.prototype.manageEvents = function () {
        var _this = this;
        var options = {
            preventDefault: true
        };
        var vm = this;
        this.swiper.onSwipe.subscribe(function (e) {
            vm.onSlideMove.emit({ carousel: vm.carousel, event: e });
            vm.onTouchMove.emit({ carousel: vm.carousel, event: e });
        });
        this.swiper.onSwipeStart.subscribe(function (e) {
            vm.onSlideMoveStart.emit({ carousel: vm.carousel, event: e });
            vm.onTouchStart.emit({ carousel: vm.carousel, event: e });
        });
        this.swiper.onSwipeEnd.subscribe(function (e) {
            vm.onSlideMoveEnd.emit({ carousel: vm.carousel, event: e });
            vm.onTouchEnd.emit({ carousel: vm.carousel, event: e });
        });
        this.carouselElm.nativeElement.addEventListener('transitionend', function (e) {
            var elm = { carousel: vm.carousel, event: e };
            if (e.propertyName === 'transform') {
                _this.onTransitionEnd.emit(elm);
                if (vm.carousel.lastIndex > vm.carousel.activeIndex) {
                    _this.onSlideNextTransitionEnd.emit(elm);
                }
                else {
                    _this.onSlidePrevTransitionEnd.emit(elm);
                }
            }
        });
        this.carouselElm.nativeElement.addEventListener('transitionstart', function (e) {
            var elm = { carousel: vm.carousel, event: e };
            if (e.propertyName === 'transform') {
                _this.onTransitionStart.emit(elm);
                // if (e.direction === Hammer.DIRECTION_LEFT) {
                //   vm.onSlideNextTransitionStart.emit(elm);
                // } else if (e.direction === Hammer.DIRECTION_RIGHT) {
                //   vm.onSlidePrevTransitionStart.emit(elm);
                // }
            }
        });
        window.addEventListener('resize', function () {
            this.update();
        }.bind(this));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_directives_swiper_directive__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directives_swiper_directive__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"])
    ], CarouselComponent.prototype, "swiper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "morePairSlides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "threshold", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "angle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "ratioScale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "margin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "perspective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "endInSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "timeToSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "lockSlides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "initialSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "loop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "autoPlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "delayAutoPlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onChangeProperties", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideCentered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onTransitionStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onTransitionEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideNextTransitionStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideNextTransitionEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlidePrevTransitionStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlidePrevTransitionEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideMove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideMoveEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onSlideMoveStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onTouchMove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onTouchStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onTouchEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onReachBeginning", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselComponent.prototype, "onReachEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "carouselElm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselComponent.prototype, "containerElm", void 0);
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carousel-component',
            template: '<div class="container" #container>\n' +
                '  <div class="carousel" #carousel swiper (domChange)="onDomChange($event)">\n' +
                '    <ng-content select=".item-carousel"></ng-content>\n' +
                '  </div>\n' +
                '</div>',
            styles: ["\n   :host{\n        display: flex;\n    }\n   :host .container {\n        margin: 0 auto;\n        width: 600px;\n        height: 400px;\n        position: relative;\n    }\n   :host .container .carousel {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        -webkit-transform-style: preserve-3d;\n        -moz-transform-style: preserve-3d;\n        -o-transform-style: preserve-3d;\n        transform-style: preserve-3d;\n\n    }\n   :host.ready .carousel {\n        -webkit-transition: -webkit-transform 300ms;\n        -moz-transition:-moz-transform 300ms;\n        -o-transition: -o-transform 300ms;\n        transition: transform 300ms;\n    }\n   :host .container .carousel::content >>> .item-carousel {\n        display: block;\n        position: absolute;\n        border:1px solid black;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        transform-style: preserve-3d;\n        opacity: 0;\n    }\n   :host.ready .carousel::content >>> .item-carousel {\n        -webkit-transition: opacity 300ms, -webkit-transform 300ms;\n        -moz-transition: opacity 300ms, -moz-transform 300ms;\n        -o-transition: opacity 300ms, -o-transform 300ms;\n        transition: opacity 300ms, transform 300ms;\n    }\n\n   :host .container .carousel::content >>> .item-carousel img{\n        user-drag: none;\n        user-select: none;\n        -moz-user-select: none;\n        -webkit-user-drag: none;\n        -webkit-user-select: none;\n        -ms-user-select: none;\n    }\n\n   :host .container .carousel::content >>> .item-carousel.next,\n   :host .container .carousel::content >>> .item-carousel.prev,\n   :host .container .carousel::content >>> .item-carousel.actual{\n        opacity: 0.95;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./projects/carousel/src/lib/directives/dom-change.directive.ts":
/*!**********************************************************************!*\
  !*** ./projects/carousel/src/lib/directives/dom-change.directive.ts ***!
  \**********************************************************************/
/*! exports provided: DomChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomChangeDirective", function() { return DomChangeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DomChangeDirective = /** @class */ (function () {
    function DomChangeDirective(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.domChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        var element = this.elementRef.nativeElement;
        this.changes = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) { return _this.domChange.emit(mutation); });
        });
        this.changes.observe(element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    DomChangeDirective.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DomChangeDirective.prototype, "domChange", void 0);
    DomChangeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[domChange]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DomChangeDirective);
    return DomChangeDirective;
}());



/***/ }),

/***/ "./projects/carousel/src/lib/directives/swiper.directive.ts":
/*!******************************************************************!*\
  !*** ./projects/carousel/src/lib/directives/swiper.directive.ts ***!
  \******************************************************************/
/*! exports provided: SwiperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperDirective", function() { return SwiperDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZERO = 0.000000000001;
var DIRECTION = {
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
    DOWN: 'down',
    NONE: 'none',
};
var SwiperDirective = /** @class */ (function () {
    function SwiperDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isDown = false;
        this.initialPosX = ZERO;
        this.initialPosY = ZERO;
        this.lastPosX = ZERO;
        this.lastPosY = ZERO;
        this.swipeDistanceX = ZERO;
        this.swipeDistanceY = ZERO;
        this.firstSwipeDate = Date.now();
        this.direction = DIRECTION.NONE;
        this.onSwipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSwipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSwipeUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSwipeDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSwipe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSwipeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSwipeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.swipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.swipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SwiperDirective.prototype.ngOnInit = function () {
    };
    SwiperDirective.prototype.getResultFromEvent = function (event) {
        var swipeFrameDistanceX = event.clientX - this.initialPosX - this.lastPosX;
        swipeFrameDistanceX = swipeFrameDistanceX < 30 ? swipeFrameDistanceX : 30;
        this.swipeDistanceX += swipeFrameDistanceX;
        var swipeFrameDistanceY = event.clientY - this.initialPosY - this.lastPosY;
        swipeFrameDistanceY = swipeFrameDistanceY < 30 ? swipeFrameDistanceY : 30;
        this.swipeDistanceY += swipeFrameDistanceY;
        this.lastPosX = event.clientX - this.initialPosX;
        this.lastPosY = event.clientY - this.initialPosY;
        var res = {
            velocityX: swipeFrameDistanceX,
            velocityY: swipeFrameDistanceY,
            isFinal: false,
            direction: this.direction,
            event: event,
        };
        return res;
    };
    SwiperDirective.prototype.swipeStart = function (event) {
        this.firstSwipeDate = Date.now();
        this.isDown = true;
        this.initialPosX = event.clientX;
        this.initialPosY = event.clientY;
        this.swipeDistanceX = ZERO;
        this.swipeDistanceY = ZERO;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.swipeEnd = function (event) {
        this.initialPosX = this.lastPosX = ZERO;
        this.initialPosY = this.lastPosY = ZERO;
        this.isDown = false;
        var res = {
            velocityX: 0,
            velocityY: 0,
            isFinal: !this.isDown,
        };
        this.onSwipeEnd.emit(res);
        this.swipeDistanceX = ZERO;
        this.swipeDistanceY = ZERO;
    };
    SwiperDirective.prototype.swipeMove = function (event) {
        var res = this.getResultFromEvent(event);
        if (res.velocityX > 0) {
            this.direction = DIRECTION.LEFT;
            this.onSwipeLeft.emit(res);
        }
        else if (res.velocityX < 0) {
            this.direction = DIRECTION.RIGHT;
            this.onSwipeRight.emit(res);
        }
        else if (res.velocityY > 0) {
            this.direction = DIRECTION.DOWN;
            this.onSwipeDown.emit(res);
        }
        else if (res.velocityY < 0) {
            this.direction = DIRECTION.UP;
            this.onSwipeUp.emit(res);
        }
        this.onSwipe.emit(res);
    };
    SwiperDirective.prototype.onTouchStart = function (event) {
        var touch = event.touches[0] || event.changedTouches[0];
        this.swipeStart(touch);
    };
    SwiperDirective.prototype.onMouseDown = function (event) {
        this.swipeStart(event);
    };
    SwiperDirective.prototype.onMouseUp = function (event) {
        this.swipeEnd(event);
    };
    SwiperDirective.prototype.onTouchEnd = function (event) {
        var touch = event.touches[0] || event.changedTouches[0];
        this.swipeEnd(touch);
    };
    SwiperDirective.prototype.onMouseMove = function (event) {
        if (this.isDown) {
            this.swipeMove(event);
        }
    };
    SwiperDirective.prototype.onTouchMove = function (event) {
        var touch = event.touches[0] || event.changedTouches[0];
        this.swipeMove(touch);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipeRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipeLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipeUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipeDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipeStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "onSwipeEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "swipeLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SwiperDirective.prototype, "swipeRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchStart", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchEnd", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchmove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchMove", null);
    SwiperDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[swiper]',
            exportAs: 'swiper'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SwiperDirective);
    return SwiperDirective;
}());



/***/ }),

/***/ "./projects/carousel/src/lib/model/Carousel.ts":
/*!*****************************************************!*\
  !*** ./projects/carousel/src/lib/model/Carousel.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
var Carousel = /** @class */ (function () {
    function Carousel() {
        this._currdeg = 0;
        this._totalItems = 0;
        this._maxWidthSize = 0;
        this._maxHeightSize = 0;
        this._maxDegree = 0;
        this._totalWidth = 0;
        this._isHorizontal = false;
        this._items = [];
        this._degreesSlides = [];
        this._activeIndex = 0;
        this._lastIndex = -1;
        this._lockSlides = false;
        this._autoPlayIsRunning = false;
    }
    Object.defineProperty(Carousel.prototype, "autoPlayIsRunning", {
        get: function () {
            return this._autoPlayIsRunning;
        },
        set: function (value) {
            this._autoPlayIsRunning = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "currdeg", {
        get: function () {
            return this._currdeg;
        },
        set: function (value) {
            this._currdeg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "totalItems", {
        get: function () {
            return this._totalItems;
        },
        set: function (value) {
            this._totalItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "isHorizontal", {
        get: function () {
            return this._isHorizontal;
        },
        set: function (value) {
            this._isHorizontal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "maxWidthSize", {
        get: function () {
            return this._maxWidthSize;
        },
        set: function (value) {
            this._maxWidthSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "maxHeightSize", {
        get: function () {
            return this._maxHeightSize;
        },
        set: function (value) {
            this._maxHeightSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "maxDegree", {
        get: function () {
            return this._maxDegree;
        },
        set: function (value) {
            this._maxDegree = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "totalWidth", {
        get: function () {
            return this._totalWidth;
        },
        set: function (value) {
            this._totalWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "degreesSlides", {
        get: function () {
            return this._degreesSlides;
        },
        set: function (value) {
            this._degreesSlides = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (value) {
            this._activeIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "lockSlides", {
        get: function () {
            return this._lockSlides;
        },
        set: function (value) {
            this._lockSlides = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "lastIndex", {
        get: function () {
            return this._lastIndex;
        },
        set: function (value) {
            this._lastIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
/* harmony default export */ __webpack_exports__["default"] = (Carousel);


/***/ }),

/***/ "./projects/carousel/src/public_api.ts":
/*!*********************************************!*\
  !*** ./projects/carousel/src/public_api.ts ***!
  \*********************************************/
/*! exports provided: CarouselModule, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/carousel/carousel.component */ "./projects/carousel/src/lib/components/carousel/carousel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return _lib_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"]; });

/* harmony import */ var _lib_carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/carousel.module */ "./projects/carousel/src/lib/carousel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return _lib_carousel_module__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"]; });

/*
 * Public API Surface of carousel
 */




/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Extra small devices (phones, less than 768px) */\n/* No media query since this is the default in Bootstrap */\n:host{\n  /*margin-bottom: 5vh;*/\n  display: block;\n}\nheader{\n  height: 25vh;\n  padding: 2vh;\n  overflow: hidden;\n  background-position: center bottom;\n  background: #1e70cd;\n  background: radial-gradient(ellipse at 0% 0%,#2c8dfb 0%,#1e70cd 50%);\n  box-sizing: border-box;\n  position: relative;\n  color: #fff;\n}\nheader h1{\n  font-weight: 100;\n  color: white;\n  font-size: 4.5vh;\n}\nheader h2{\n  letter-spacing: 2px;\n  font-size: 2vh;\n  color: white;\n}\nheader ng-adsense{\n  display: none;\n}\nheader .content-icon{\n  /*display: inline-block;*/\n  width: auto;\n  height: 100%;\n  padding: 4vh;\n\n}\nheader img.icon{\n  height: 50%;\n}\nheader .social-bar a{\n  margin-right: 1vh;\n}\nnav.menu{\n  background-color: #1976d2;\n}\nnav.menu .button-menu{\n  color: white;\n  font-size: 2vh;\n  padding: 1.3vh;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 0;\n}\nnav.menu .button-menu.active{\n  color: #1976d2;\n  background-color: white;\n}\nheader,\nheader .social-bar,\nnav.menu{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\nheader .social-bar{\n  flex-wrap: wrap;\n}\nfooter{\n  color: white;\n  margin-top: 3vh;\n  background-color: #1976d2;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n  padding: 3vh 0vh;\n}\nfooter div{\n  font-size: 2vh ;\n  text-align: center;\n}\n.content{\n  padding: 2vh;\n}\n.content-icon{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n}\n.forkme{\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: none;\n  width: 15vh;\n}\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  header img.icon{\n    height: 75%;\n  }\n  header h1{\n    font-size: 5vh;\n  }\n  nav.menu .button-menu{\n    font-size: 1.7vh;\n  }\n  footer div{\n    font-size: 1.7vh ;\n  }\n  .forkme{\n    display: block;\n  }\n}\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n\n  header h2{\n    font-size: 2.2vh;\n  }\n  header .social-bar img{\n    height: 2.2vh;\n    width: auto;\n  }\n  .content-icon .icon{\n    height: 75%;\n  }\n  .forkme{\n    width: 17vh;\n  }\n}\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  header ng-adsense{\n    display: block;\n  }\n  .forkme{\n    width: 19.5vh;\n  }\n}\n@media (min-width: 1600px) {\n  footer div,\n  nav.menu .button-menu{\n    font-size: 1.7vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1EO0FBQ25ELDJEQUEyRDtBQUUzRDtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBTXBCLHFFQUFxRTtFQUdyRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7O0NBRWQ7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0NBQ3pCO0FBRUQ7OztFQUtFLGNBQWM7RUFHZCxvQkFBb0I7RUFHcEIsa0JBQWtCO0VBR2xCLDRCQUE0QjtFQUc1Qix1QkFBdUI7RUFHdkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFHRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBRzFCLGNBQWM7RUFHZCx1QkFBdUI7RUFHdkIsa0JBQWtCO0VBR2xCLHdCQUF3QjtFQUd4Qix1QkFBdUI7RUFHdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFHRSxjQUFjO0VBR2Qsb0JBQW9CO0VBR3BCLGtCQUFrQjtFQUdsQix3QkFBd0I7RUFHeEIsdUJBQXVCO0VBR3ZCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0VBQ1AsY0FBYztFQUNkLFlBQVk7Q0FDYjtBQUdELDJDQUEyQztBQUMzQztFQUNFO0lBQ0UsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsZUFBZTtHQUNoQjtDQUNGO0FBRUQsNkNBQTZDO0FBQzdDOztFQUVFO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLFlBQVk7R0FDYjtDQUNGO0FBRUQsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7Q0FDRjtBQUdEO0VBQ0U7O0lBRUUsaUJBQWlCO0dBQ2xCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgbGVzcyB0aGFuIDc2OHB4KSAqL1xuLyogTm8gbWVkaWEgcXVlcnkgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBCb290c3RyYXAgKi9cblxuOmhvc3R7XG4gIC8qbWFyZ2luLWJvdHRvbTogNXZoOyovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaGVhZGVye1xuICBoZWlnaHQ6IDI1dmg7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZDogIzFlNzBjZDtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoMCUgMCUsZWxsaXBzZSBjb3ZlciwjMmM4ZGZiIDAlLCMxZTcwY2QgNTAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsMCUgMCUsMHB4LGNlbnRlciBjZW50ZXIsMTAwJSxjb2xvci1zdG9wKDAlLCMyYzhkZmIpLGNvbG9yLXN0b3AoNTAlLCMxZTcwY2QpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMCUgMCUsZWxsaXBzZSBjb3ZlciwjMmM4ZGZiIDAlLCMxZTcwY2QgNTAlKTtcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KDAlIDAlLGVsbGlwc2UgY292ZXIsIzJjOGRmYiAwJSwjMWU3MGNkIDUwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoMCUgMCUsZWxsaXBzZSBjb3ZlciwjMmM4ZGZiIDAlLCMxZTcwY2QgNTAlKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgMCUgMCUsIzJjOGRmYiAwJSwjMWU3MGNkIDUwJSk7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuaGVhZGVyIGgxe1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNC41dmg7XG59XG5cbmhlYWRlciBoMntcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAydmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmhlYWRlciBuZy1hZHNlbnNle1xuICBkaXNwbGF5OiBub25lO1xufVxuaGVhZGVyIC5jb250ZW50LWljb257XG4gIC8qZGlzcGxheTogaW5saW5lLWJsb2NrOyovXG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDR2aDtcblxufVxuaGVhZGVyIGltZy5pY29ue1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuaGVhZGVyIC5zb2NpYWwtYmFyIGF7XG4gIG1hcmdpbi1yaWdodDogMXZoO1xufVxubmF2Lm1lbnV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG59XG5uYXYubWVudSAuYnV0dG9uLW1lbnV7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAydmg7XG4gIHBhZGRpbmc6IDEuM3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxubmF2Lm1lbnUgLmJ1dHRvbi1tZW51LmFjdGl2ZXtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIsXG5oZWFkZXIgLnNvY2lhbC1iYXIsXG5uYXYubWVudXtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgLnNvY2lhbC1iYXJ7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5mb290ZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzdmggMHZoO1xufVxuZm9vdGVyIGRpdntcbiAgZm9udC1zaXplOiAydmggO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudHtcbiAgcGFkZGluZzogMnZoO1xufVxuLmNvbnRlbnQtaWNvbntcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JrbWV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDE1dmg7XG59XG5cblxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlciBpbWcuaWNvbntcbiAgICBoZWlnaHQ6IDc1JTtcbiAgfVxuICBoZWFkZXIgaDF7XG4gICAgZm9udC1zaXplOiA1dmg7XG4gIH1cbiAgbmF2Lm1lbnUgLmJ1dHRvbi1tZW51e1xuICAgIGZvbnQtc2l6ZTogMS43dmg7XG4gIH1cbiAgZm9vdGVyIGRpdntcbiAgICBmb250LXNpemU6IDEuN3ZoIDtcbiAgfVxuICAuZm9ya21le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgaGVhZGVyIGgye1xuICAgIGZvbnQtc2l6ZTogMi4ydmg7XG4gIH1cbiAgaGVhZGVyIC5zb2NpYWwtYmFyIGltZ3tcbiAgICBoZWlnaHQ6IDIuMnZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5jb250ZW50LWljb24gLmljb257XG4gICAgaGVpZ2h0OiA3NSU7XG4gIH1cbiAgLmZvcmttZXtcbiAgICB3aWR0aDogMTd2aDtcbiAgfVxufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgaGVhZGVyIG5nLWFkc2Vuc2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmZvcmttZXtcbiAgICB3aWR0aDogMTkuNXZoO1xuICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICBmb290ZXIgZGl2LFxuICBuYXYubWVudSAuYnV0dG9uLW1lbnV7XG4gICAgZm9udC1zaXplOiAxLjd2aDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <div class=\"content-icon\">\n    <img class=\"icon\" src=\"assets/img/icon.png\">\n  </div>\n  <div class=\"content-title\">\n    <h1>ngx-carousel</h1>\n    <h2>An lightweight , simple and touchable carousel library</h2>\n    <div class=\"social-bar\">\n      <a href=\"https://badge.fury.io/js/angular2-carousel\"><img src=\"https://badge.fury.io/js/angular2-carousel.svg\" alt=\"npm version\" height=\"18\"></a>\n      <a href=\"https://badge.fury.io/gh/kappys1%2Fangular2-carousel\"><img src=\"https://badge.fury.io/gh/kappys1%2Fngx-carousel.svg\" alt=\"GitHub version\" height=\"18\"></a>\n      <a href=\"https://twitter.com/alexmarcosg\"><img src=\"https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=follow\" alt=\"Twitter\" height=\"18\"></a>\n    </div>\n  </div>\n  <a href=\"https://github.com/kappys1/ngx-carousel\"><img class=\"forkme\" src=\"assets/img/forkme.png\"></a>\n</header>\n<nav class=\"menu\">\n  <a class=\"button-menu\" routerLink=\"/getStarted\"  routerLinkActive=\"active\">Get Started</a>\n  <a class=\"button-menu\" routerLink=\"/demo\"  routerLinkActive=\"active\">Demos</a>\n  <a class=\"button-menu\" routerLink=\"/api\"  routerLinkActive=\"active\">API</a>\n</nav>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n  <div>{{year}} © ngx carousel by Alex Marcos</div>\n</footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.year = new Date().getFullYear();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _projects_carousel_src_lib_carousel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../projects/carousel/src/lib/carousel.module */ "./projects/carousel/src/lib/carousel.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_simple_carousel_simple_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/simple-carousel/simple-carousel.component */ "./src/app/components/simple-carousel/simple-carousel.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pages_examples_examples_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/examples/examples.component */ "./src/app/pages/examples/examples.component.ts");
/* harmony import */ var _pages_api_api_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/api/api.component */ "./src/app/pages/api/api.component.ts");
/* harmony import */ var _pages_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/get-started/get-started.component */ "./src/app/pages/get-started/get-started.component.ts");
/* harmony import */ var _components_properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/properties-carousel/properties-carousel.component */ "./src/app/components/properties-carousel/properties-carousel.component.ts");
/* harmony import */ var _components_functions_carousel_functions_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/functions-carousel/functions-carousel.component */ "./src/app/components/functions-carousel/functions-carousel.component.ts");
/* harmony import */ var _pipes_pipe_safehtml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/pipe.safehtml */ "./src/app/pipes/pipe.safehtml.ts");
/* harmony import */ var _components_cube_carousel_cube_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cube-carousel/cube-carousel.component */ "./src/app/components/cube-carousel/cube-carousel.component.ts");
/* harmony import */ var _components_style_carousel_style_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/style-carousel/style-carousel.component */ "./src/app/components/style-carousel/style-carousel.component.ts");
/* harmony import */ var _components_autoplay_carousel_autoplay_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/autoplay-carousel/autoplay-carousel.component */ "./src/app/components/autoplay-carousel/autoplay-carousel.component.ts");
/* harmony import */ var _components_multiple_sliders_carousel_multiple_slider_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/multiple-sliders-carousel/multiple-slider-carousel.component */ "./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.ts");
/* harmony import */ var _components_simple_carousel_from_service_simple_carousel_from_service_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/simple-carousel-from-service/simple-carousel-from-service.component */ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.ts");
/* harmony import */ var _components_simple_carousel_from_service_simple_carousel_from_service_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/simple-carousel-from-service/simple-carousel-from-service.service */ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.service.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_simple_carousel_simple_carousel_component__WEBPACK_IMPORTED_MODULE_5__["SimpleCarouselComponent"],
                _components_simple_carousel_from_service_simple_carousel_from_service_component__WEBPACK_IMPORTED_MODULE_18__["SimpleCarouselFromServiceComponent"],
                _pages_examples_examples_component__WEBPACK_IMPORTED_MODULE_8__["ExamplesComponent"],
                _pages_api_api_component__WEBPACK_IMPORTED_MODULE_9__["ApiComponent"],
                _pipes_pipe_safehtml__WEBPACK_IMPORTED_MODULE_13__["SafeHtmlPipe"],
                _pages_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_10__["GetStartedComponent"],
                _components_properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__["PropertiesCarouselComponent"],
                _components_functions_carousel_functions_carousel_component__WEBPACK_IMPORTED_MODULE_12__["FunctionsCarouselComponent"],
                _components_cube_carousel_cube_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CubeCarouselComponent"],
                _components_style_carousel_style_carousel_component__WEBPACK_IMPORTED_MODULE_15__["StyleCarouselComponent"],
                _components_autoplay_carousel_autoplay_carousel_component__WEBPACK_IMPORTED_MODULE_16__["AutoplayCarouselComponent"],
                _components_multiple_sliders_carousel_multiple_slider_carousel_component__WEBPACK_IMPORTED_MODULE_17__["MultipleSliderCarouselComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                _projects_carousel_src_lib_carousel_module__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]
            ],
            providers: [_components_simple_carousel_from_service_simple_carousel_from_service_service__WEBPACK_IMPORTED_MODULE_19__["SimpleCarouselService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _pages_examples_examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/examples/examples.component */ "./src/app/pages/examples/examples.component.ts");
/* harmony import */ var _pages_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/get-started/get-started.component */ "./src/app/pages/get-started/get-started.component.ts");
/* harmony import */ var _pages_api_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/api/api.component */ "./src/app/pages/api/api.component.ts");



var appRoutes = [
    {
        path: 'demo',
        component: _pages_examples_examples_component__WEBPACK_IMPORTED_MODULE_0__["ExamplesComponent"],
        data: { title: 'Simple Carousel' }
    }, {
        path: 'getStarted',
        component: _pages_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_1__["GetStartedComponent"],
        data: { title: 'Simple Carousel' }
    }, {
        path: 'api',
        component: _pages_api_api_component__WEBPACK_IMPORTED_MODULE_2__["ApiComponent"],
        data: { title: 'Simple Carousel' }
    },
    { path: '',
        redirectTo: '/getStarted',
        pathMatch: 'full'
    },
    { path: '**', component: _pages_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_1__["GetStartedComponent"] }
];


/***/ }),

/***/ "./src/app/components/autoplay-carousel/autoplay-carousel.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/autoplay-carousel/autoplay-carousel.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\n\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: flex!important;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel div,\n.item-carousel img{\n  height: 100%;\n  width: 100%;\n}\n\n.item-carousel div{\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n\n.parameters-content{\n  font-size: 1.8vh;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\n\np.show-code{\n  color: #ab2300;\n}\n\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n/* Large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvcGxheS1jYXJvdXNlbC9hdXRvcGxheS1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFHeEIsd0JBQXdCO0VBR3hCLG9CQUFvQjtFQUdwQixrQkFBa0I7RUFHbEIsd0JBQXdCO0VBR3hCLHVCQUF1QjtFQUd2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0NBQ1Q7O0FBRUQ7O0VBRUUsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0NBQ3BDOztBQUNEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUNEO0VBQ0UsaUJBQWlCO0VBR2pCLGNBQWM7RUFHZCxvQkFBb0I7RUFHcEIsZ0JBQWdCO0VBR2hCLDRCQUE0QjtFQUc1Qix1QkFBdUI7RUFHdkIsb0JBQW9CO0NBQ3JCOztBQUNEOzs7RUFHRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBSUUsZ0NBQWdDO0NBQ2pDOztBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEI7Q0FDN0I7O0FBRUQsMkNBQTJDOztBQUMzQztFQUNFO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7O0lBRUUsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7OztDQUdGOztBQUdELG1EQUFtRDs7QUFDbkQ7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtHQUN4QjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7O0NBRUY7O0FBQ0Q7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7R0FDN0I7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0b3BsYXktY2Fyb3VzZWwvYXV0b3BsYXktY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IGNhcm91c2VsLWNvbXBvbmVudHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA4dmggNnZoO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uYnV0dG9uLXRvZ2dsZXtcbiAgZm9udC1zaXplOiAxLjh2aDtcbiAgcGFkZGluZzogMXZoO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG5oMXtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4uaXRlbS1jYXJvdXNlbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4IWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyM3ZoIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHZoIWltcG9ydGFudDtcbiAgdG9wOjB2aDtcbn1cblxuLml0ZW0tY2Fyb3VzZWwgZGl2LFxuLml0ZW0tY2Fyb3VzZWwgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLml0ZW0tY2Fyb3VzZWwgZGl2e1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4ucGFyYW1ldGVyLW9wdGlvbntcbiAgbWFyZ2luLXJpZ2h0OiAydmg7XG59XG4ucGFyYW1ldGVycy1jb250ZW50e1xuICBmb250LXNpemU6IDEuOHZoO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXJhbWV0ZXJzLWNvbnRlbnQgYnV0dG9uLFxuLnBhcmFtZXRlcnMtY29udGVudCBzZWxlY3QsXG4ucGFyYW1ldGVycy1jb250ZW50IGlucHV0e1xuICBmb250LXNpemU6IDEuNXZoO1xufVxucC5zaG93LWNvZGV7XG4gIGNvbG9yOiAjYWIyMzAwO1xufVxucHtcbiAgZm9udC1zaXplOiAxLjh2aDtcbn1cblxuOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50LnN0eWxlLWNhcm91c2VsLnJlYWR5IC5pdGVtLWNhcm91c2Vse1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zaXRpb246YWxsIDUwMG1zIWltcG9ydGFudDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDUwMG1zIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIWltcG9ydGFudDtcbn1cbjpob3N0IGNhcm91c2VsLWNvbXBvbmVudC5zdHlsZS1jYXJvdXNlbC5yZWFkeSAuaXRlbS1jYXJvdXNlbC5hY3R1YWx7XG4gIGhlaWdodDogMzB2aCFpbXBvcnRhbnQ7XG4gIHRvcDotMi41dmg7XG59XG5cbjpob3N0IGNhcm91c2VsLWNvbXBvbmVudC5jdWJlLW1vZGUucmVhZHkgPj4+IC5jb250YWluZXJ7XG4gIHBlcnNwZWN0aXZlOiAxMHZoIWltcG9ydGFudDtcbn1cblxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMi41dmg7XG4gIH1cbiAgLmJ1dHRvbi10b2dnbGUsXG4gIHB7XG4gICAgZm9udC1zaXplOiAxLjd2aDtcbiAgfVxuICAucGFyYW1ldGVycy1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDEuN3ZoO1xuICB9XG5cblxufVxuXG5cbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6aG9zdCBjYXJvdXNlbC1jb21wb25lbnR7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAuaXRlbS1jYXJvdXNlbHtcbiAgICB3aWR0aDogMjh2aCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyNXZoIWltcG9ydGFudDtcbiAgfVxuICBoMXtcbiAgICBmb250LXNpemU6IDIuN3ZoO1xuICB9XG4gIC5idXR0b24tdG9nZ2xle1xuICAgIGZvbnQtc2l6ZTogMS42dmg7XG4gIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICA6aG9zdCBjYXJvdXNlbC1jb21wb25lbnQuY3ViZS1tb2RlLnJlYWR5ID4+PiAuY29udGFpbmVye1xuICAgIHBlcnNwZWN0aXZlOiAxNXZoIWltcG9ydGFudDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/autoplay-carousel/autoplay-carousel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/autoplay-carousel/autoplay-carousel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Auto Play example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/autoplay-carousel\" target=\"_blank\">Source code</a></p>\n<p>In this example auto play don't stop never.</p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [autoPlay]=\"true\" #topCarousel>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://www.losminionsaldia.com/images/mas-minions/minion.png)\"></div></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "./src/app/components/autoplay-carousel/autoplay-carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/autoplay-carousel/autoplay-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AutoplayCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoplayCarouselComponent", function() { return AutoplayCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");



var AutoplayCarouselComponent = /** @class */ (function () {
    function AutoplayCarouselComponent() {
    }
    AutoplayCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    AutoplayCarouselComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], AutoplayCarouselComponent.prototype, "topCarousel", void 0);
    AutoplayCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autoplay-carousel',
            template: __webpack_require__(/*! ./autoplay-carousel.component.html */ "./src/app/components/autoplay-carousel/autoplay-carousel.component.html"),
            styles: [__webpack_require__(/*! ./autoplay-carousel.component.css */ "./src/app/components/autoplay-carousel/autoplay-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutoplayCarouselComponent);
    return AutoplayCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/cube-carousel/cube-carousel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cube-carousel/cube-carousel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Cube example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/cube-carousel\" target=\"_blank\">Source code</a></p>\n<p>Set perspective property to 200</p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component class=\"cube-mode\" [mode]=\"'horizontal'\" [perspective]=\"100\" #topCarousel>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://www.losminionsaldia.com/images/mas-minions/minion.png)\"></div></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "./src/app/components/cube-carousel/cube-carousel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cube-carousel/cube-carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: CubeCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeCarouselComponent", function() { return CubeCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");



var CubeCarouselComponent = /** @class */ (function () {
    function CubeCarouselComponent() {
    }
    CubeCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    CubeCarouselComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], CubeCarouselComponent.prototype, "topCarousel", void 0);
    CubeCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cube-carousel',
            template: __webpack_require__(/*! ./cube-carousel.component.html */ "./src/app/components/cube-carousel/cube-carousel.component.html"),
            styles: [__webpack_require__(/*! ../simple-carousel/simple-carousel.component.css */ "./src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CubeCarouselComponent);
    return CubeCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/functions-carousel/functions-carousel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/functions-carousel/functions-carousel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Functions Examples</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/functions-carousel\" target=\"_blank\">Source code</a></p>\n<p>Slide prev and slide next by functions. you can set your style</p>\n<p><b>Slide only works with buttons</b></p>\n<div class=\"parameters-content\">\n  <div class=\"parameter-option\">\n    <button (click)=\"prev()\">Prev</button>\n  </div>\n  <div class=\"parameter-option\">\n    <button (click)=\"next()\">Next</button>\n  </div>\n</div>\n\n\n<carousel-component [lockSlides]=\"true\" #topCarousel>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://www.losminionsaldia.com/images/mas-minions/minion.png)\"></div></div>\n</carousel-component>\n"

/***/ }),

/***/ "./src/app/components/functions-carousel/functions-carousel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/functions-carousel/functions-carousel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FunctionsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsCarouselComponent", function() { return FunctionsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");



var FunctionsCarouselComponent = /** @class */ (function () {
    function FunctionsCarouselComponent() {
    }
    FunctionsCarouselComponent.prototype.ngOnInit = function () {
    };
    FunctionsCarouselComponent.prototype.prev = function () {
        this.topCarousel.slidePrev();
    };
    FunctionsCarouselComponent.prototype.next = function () {
        this.topCarousel.slideNext();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], FunctionsCarouselComponent.prototype, "topCarousel", void 0);
    FunctionsCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-functions-carousel',
            template: __webpack_require__(/*! ./functions-carousel.component.html */ "./src/app/components/functions-carousel/functions-carousel.component.html"),
            styles: [__webpack_require__(/*! ../simple-carousel/simple-carousel.component.css */ "./src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FunctionsCarouselComponent);
    return FunctionsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\n\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: flex!important;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel div,\n.item-carousel img{\n  height: 100%;\n  width: 100%;\n}\n\n.item-carousel div{\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n\n.parameters-content{\n  font-size: 1.8vh;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\n\np.show-code{\n  color: #ab2300;\n}\n\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n/* Large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tdWx0aXBsZS1zbGlkZXJzLWNhcm91c2VsL211bHRpcGxlLXNsaWRlci1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFHeEIsd0JBQXdCO0VBR3hCLG9CQUFvQjtFQUdwQixrQkFBa0I7RUFHbEIsd0JBQXdCO0VBR3hCLHVCQUF1QjtFQUd2QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0NBQ1Q7O0FBRUQ7O0VBRUUsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0NBQ3BDOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUNEO0VBQ0UsaUJBQWlCO0VBR2pCLGNBQWM7RUFHZCxvQkFBb0I7RUFHcEIsZ0JBQWdCO0VBR2hCLDRCQUE0QjtFQUc1Qix1QkFBdUI7RUFHdkIsb0JBQW9CO0NBQ3JCOztBQUNEOzs7RUFHRSxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBSUUsZ0NBQWdDO0NBQ2pDOztBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEI7Q0FDN0I7O0FBRUQsMkNBQTJDOztBQUMzQztFQUNFO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7O0lBRUUsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7OztDQUdGOztBQUdELG1EQUFtRDs7QUFDbkQ7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtHQUN4QjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7O0NBRUY7O0FBQ0Q7RUFDRTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7R0FDN0I7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGlwbGUtc2xpZGVycy1jYXJvdXNlbC9tdWx0aXBsZS1zbGlkZXItY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IGNhcm91c2VsLWNvbXBvbmVudHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA4dmggNnZoO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4uYnV0dG9uLXRvZ2dsZXtcbiAgZm9udC1zaXplOiAxLjh2aDtcbiAgcGFkZGluZzogMXZoO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG5oMXtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4uaXRlbS1jYXJvdXNlbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94IWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4IWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyM3ZoIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHZoIWltcG9ydGFudDtcbiAgdG9wOjB2aDtcbn1cblxuLml0ZW0tY2Fyb3VzZWwgZGl2LFxuLml0ZW0tY2Fyb3VzZWwgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLml0ZW0tY2Fyb3VzZWwgZGl2e1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5wYXJhbWV0ZXItb3B0aW9ue1xuICBtYXJnaW4tcmlnaHQ6IDJ2aDtcbn1cbi5wYXJhbWV0ZXJzLWNvbnRlbnR7XG4gIGZvbnQtc2l6ZTogMS44dmg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhcmFtZXRlcnMtY29udGVudCBidXR0b24sXG4ucGFyYW1ldGVycy1jb250ZW50IHNlbGVjdCxcbi5wYXJhbWV0ZXJzLWNvbnRlbnQgaW5wdXR7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG59XG5wLnNob3ctY29kZXtcbiAgY29sb3I6ICNhYjIzMDA7XG59XG5we1xuICBmb250LXNpemU6IDEuOHZoO1xufVxuXG46aG9zdCBjYXJvdXNlbC1jb21wb25lbnQuc3R5bGUtY2Fyb3VzZWwucmVhZHkgLml0ZW0tY2Fyb3VzZWx7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNpdGlvbjphbGwgNTAwbXMhaW1wb3J0YW50O1xuICAtby10cmFuc2l0aW9uOiBhbGwgNTAwbXMhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMhaW1wb3J0YW50O1xufVxuOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50LnN0eWxlLWNhcm91c2VsLnJlYWR5IC5pdGVtLWNhcm91c2VsLmFjdHVhbHtcbiAgaGVpZ2h0OiAzMHZoIWltcG9ydGFudDtcbiAgdG9wOi0yLjV2aDtcbn1cblxuOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50LmN1YmUtbW9kZS5yZWFkeSA+Pj4gLmNvbnRhaW5lcntcbiAgcGVyc3BlY3RpdmU6IDEwdmghaW1wb3J0YW50O1xufVxuXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDF7XG4gICAgZm9udC1zaXplOiAyLjV2aDtcbiAgfVxuICAuYnV0dG9uLXRvZ2dsZSxcbiAgcHtcbiAgICBmb250LXNpemU6IDEuN3ZoO1xuICB9XG4gIC5wYXJhbWV0ZXJzLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS43dmg7XG4gIH1cblxuXG59XG5cblxuLyogTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpob3N0IGNhcm91c2VsLWNvbXBvbmVudHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC5pdGVtLWNhcm91c2Vse1xuICAgIHdpZHRoOiAyOHZoIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1dmghaW1wb3J0YW50O1xuICB9XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMi43dmg7XG4gIH1cbiAgLmJ1dHRvbi10b2dnbGV7XG4gICAgZm9udC1zaXplOiAxLjZ2aDtcbiAgfVxuXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gIDpob3N0IGNhcm91c2VsLWNvbXBvbmVudC5jdWJlLW1vZGUucmVhZHkgPj4+IC5jb250YWluZXJ7XG4gICAgcGVyc3BlY3RpdmU6IDE1dmghaW1wb3J0YW50O1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Multiple Slides example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/multiple-sliders-carousel\" target=\"_blank\">Source code</a></p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [morePairSlides]=\"moreSlides\" [angle]=\"degree\" #topCarousel>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://www.losminionsaldia.com/images/mas-minions/minion.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://vignette.wikia.nocookie.net/p__/images/e/eb/Gru_close-up.png/revision/latest?cb=20160414233204&path-prefix=protagonist)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://www.abc.net.au/news/image/6473316-1x1-700x700.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://vignette.wikia.nocookie.net/despicableme/images/0/06/Daveault2.png/revision/latest?cb=20130911160410)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHYZ08mC8dAGbyTxuQxkn9fbxGuOclg7T98ZG_FVLftamqjSB)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://images.jg-cdn.com/image/854b86b4-61be-417a-b4ff-498b8baeedd0.jpg?template=fundraisingpagegalleryxl)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://vignette.wikia.nocookie.net/despicableme/images/4/4d/Daveault1.png/revision/latest?cb=20130911160355)\"></div></div>\n\n</carousel-component>\n\n"

/***/ }),

/***/ "./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MultipleSliderCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSliderCarouselComponent", function() { return MultipleSliderCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");



var MultipleSliderCarouselComponent = /** @class */ (function () {
    function MultipleSliderCarouselComponent() {
        this.degree = 25;
        this.moreSlides = 3;
    }
    MultipleSliderCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    MultipleSliderCarouselComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], MultipleSliderCarouselComponent.prototype, "topCarousel", void 0);
    MultipleSliderCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multiple-slider-carousel',
            template: __webpack_require__(/*! ./multiple-slider-carousel.component.html */ "./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.html"),
            styles: [__webpack_require__(/*! ./multiple-slider-carousel.component.css */ "./src/app/components/multiple-sliders-carousel/multiple-slider-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultipleSliderCarouselComponent);
    return MultipleSliderCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/properties-carousel/properties-carousel.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/properties-carousel/properties-carousel.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Properties Examples</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/properties-carousel\" target=\"_blank\">Source code</a></p>\n<p>The Perspective and Number of Initial Slide properties need reset the carousel for apply changes</p>\n<div class=\"parameters-content\">\n  <div class=\"parameter-option\">\n    <button (click)=\"reset()\">Reset</button>\n  </div>\n  <div class=\"parameter-option\">\n    <div>Mode</div>\n    <select [value]=\"mode\" (input)=\"mode = $event.target.value\">\n      <option value=\"vertical\">Vertical</option>\n      <option value=\"horizontal\">Horizontal</option>\n    </select>\n  </div>\n  <div class=\"parameter-option\">\n    <div>Time to slide</div>\n    <input type=\"number\" [value]=\"time\" (input)=\"time = $event.target.value\">\n  </div>\n  <div class=\"parameter-option\">\n    <div>Perspective</div>\n    <input type=\"number\" [value]=\"perspective\" (input)=\"perspective = $event.target.value\">\n  </div>\n  <div class=\"parameter-option\">\n    <div>Initial Slide</div>\n    <input type=\"number\" [value]=\"init\" (input)=\"init = $event.target.value\">\n  </div>\n</div>\n\n\n<carousel-component [mode]=\"mode\" [timeToSlide]=\"time\" [perspective]=\"perspective\" [initialSlide]=\"init\" #topCarousel>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://www.losminionsaldia.com/images/mas-minions/minion.png)\"></div></div>\n</carousel-component>\n"

/***/ }),

/***/ "./src/app/components/properties-carousel/properties-carousel.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/properties-carousel/properties-carousel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PropertiesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesCarouselComponent", function() { return PropertiesCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");



var PropertiesCarouselComponent = /** @class */ (function () {
    function PropertiesCarouselComponent() {
        this.time = 300;
        this.mode = 'horizontal';
        this.perspective = 2000;
        this.init = 0;
    }
    PropertiesCarouselComponent.prototype.ngOnInit = function () {
    };
    PropertiesCarouselComponent.prototype.ngOnChanges = function (sample) {
        console.log(sample);
    };
    PropertiesCarouselComponent.prototype.reset = function () {
        console.log('click', this);
        this.topCarousel.reInit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], PropertiesCarouselComponent.prototype, "topCarousel", void 0);
    PropertiesCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties-carousel',
            template: __webpack_require__(/*! ./properties-carousel.component.html */ "./src/app/components/properties-carousel/properties-carousel.component.html"),
            styles: [__webpack_require__(/*! ../simple-carousel/simple-carousel.component.css */ "./src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PropertiesCarouselComponent);
    return PropertiesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\n\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: flex!important;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel div,\n.item-carousel img{\n  height: 100%;\n  width: 100%;\n}\n\n.item-carousel div{\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n\n.parameters-content{\n  font-size: 1.8vh;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\n\np.show-code{\n  color: #ab2300;\n}\n\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n/* Large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW1wbGUtY2Fyb3VzZWwtZnJvbS1zZXJ2aWNlL3NpbXBsZS1jYXJvdXNlbC1mcm9tLXNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usd0JBQXdCO0VBR3hCLHdCQUF3QjtFQUd4QixvQkFBb0I7RUFHcEIsa0JBQWtCO0VBR2xCLHdCQUF3QjtFQUd4Qix1QkFBdUI7RUFHdkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsUUFBUTtDQUNUOztBQUdEOztFQUVFLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLGlCQUFpQjtFQUdqQixjQUFjO0VBR2Qsb0JBQW9CO0VBR3BCLGdCQUFnQjtFQUdoQiw0QkFBNEI7RUFHNUIsdUJBQXVCO0VBR3ZCLG9CQUFvQjtDQUNyQjs7QUFDRDs7O0VBR0UsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUlFLGdDQUFnQztDQUNqQzs7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCO0NBQzdCOztBQUVELDJDQUEyQzs7QUFDM0M7RUFDRTtJQUNFLGlCQUFpQjtHQUNsQjtFQUNEOztJQUVFLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCOzs7Q0FHRjs7QUFHRCxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxXQUFXO0dBQ1o7RUFDRDtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7R0FDeEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCOztDQUVGOztBQUNEO0VBQ0U7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0dBQzdCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbXBsZS1jYXJvdXNlbC1mcm9tLXNlcnZpY2Uvc2ltcGxlLWNhcm91c2VsLWZyb20tc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50e1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDh2aCA2dmg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5idXR0b24tdG9nZ2xle1xuICBmb250LXNpemU6IDEuOHZoO1xuICBwYWRkaW5nOiAxdmg7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbn1cbmgxe1xuICBmb250LXNpemU6IDN2aDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5pdGVtLWNhcm91c2Vse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3ghaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXghaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIzdmghaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwdmghaW1wb3J0YW50O1xuICB0b3A6MHZoO1xufVxuXG5cbi5pdGVtLWNhcm91c2VsIGRpdixcbi5pdGVtLWNhcm91c2VsIGltZ3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtLWNhcm91c2VsIGRpdntcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ucGFyYW1ldGVyLW9wdGlvbntcbiAgbWFyZ2luLXJpZ2h0OiAydmg7XG59XG4ucGFyYW1ldGVycy1jb250ZW50e1xuICBmb250LXNpemU6IDEuOHZoO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXJhbWV0ZXJzLWNvbnRlbnQgYnV0dG9uLFxuLnBhcmFtZXRlcnMtY29udGVudCBzZWxlY3QsXG4ucGFyYW1ldGVycy1jb250ZW50IGlucHV0e1xuICBmb250LXNpemU6IDEuNXZoO1xufVxucC5zaG93LWNvZGV7XG4gIGNvbG9yOiAjYWIyMzAwO1xufVxucHtcbiAgZm9udC1zaXplOiAxLjh2aDtcbn1cblxuOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50LnN0eWxlLWNhcm91c2VsLnJlYWR5IC5pdGVtLWNhcm91c2Vse1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zaXRpb246YWxsIDUwMG1zIWltcG9ydGFudDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDUwMG1zIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIWltcG9ydGFudDtcbn1cbjpob3N0IGNhcm91c2VsLWNvbXBvbmVudC5zdHlsZS1jYXJvdXNlbC5yZWFkeSAuaXRlbS1jYXJvdXNlbC5hY3R1YWx7XG4gIGhlaWdodDogMzB2aCFpbXBvcnRhbnQ7XG4gIHRvcDotMi41dmg7XG59XG5cbjpob3N0IGNhcm91c2VsLWNvbXBvbmVudC5jdWJlLW1vZGUucmVhZHkgPj4+IC5jb250YWluZXJ7XG4gIHBlcnNwZWN0aXZlOiAxMHZoIWltcG9ydGFudDtcbn1cblxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMi41dmg7XG4gIH1cbiAgLmJ1dHRvbi10b2dnbGUsXG4gIHB7XG4gICAgZm9udC1zaXplOiAxLjd2aDtcbiAgfVxuICAucGFyYW1ldGVycy1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDEuN3ZoO1xuICB9XG5cblxufVxuXG5cbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICA6aG9zdCBjYXJvdXNlbC1jb21wb25lbnR7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAuaXRlbS1jYXJvdXNlbHtcbiAgICB3aWR0aDogMjh2aCFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyNXZoIWltcG9ydGFudDtcbiAgfVxuICBoMXtcbiAgICBmb250LXNpemU6IDIuN3ZoO1xuICB9XG4gIC5idXR0b24tdG9nZ2xle1xuICAgIGZvbnQtc2l6ZTogMS42dmg7XG4gIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICA6aG9zdCBjYXJvdXNlbC1jb21wb25lbnQuY3ViZS1tb2RlLnJlYWR5ID4+PiAuY29udGFpbmVye1xuICAgIHBlcnNwZWN0aXZlOiAxNXZoIWltcG9ydGFudDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Simple example from service</h1>\n<h3>delay 4 seconds</h3>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/simple-carousel-from-service\" target=\"_blank\">Source code</a></p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [timeToSlide]=\"300\" #topCarousel>\n  <div class=\"item-carousel\" *ngFor=\"let image of images\">\n    <div [ngStyle]=\"{'background-image': 'url(' + image + ')'}\"  >\n    </div>\n  </div>\n\n</carousel-component>\n\n"

/***/ }),

/***/ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SimpleCarouselFromServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCarouselFromServiceComponent", function() { return SimpleCarouselFromServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");
/* harmony import */ var _simple_carousel_from_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-carousel-from-service.service */ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.service.ts");




var SimpleCarouselFromServiceComponent = /** @class */ (function () {
    function SimpleCarouselFromServiceComponent(carouselService) {
        var _this = this;
        this.carouselService = carouselService;
        this.carouselService.getImagesEmitter.subscribe(function (val) {
            _this.images = val;
        });
    }
    SimpleCarouselFromServiceComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    SimpleCarouselFromServiceComponent.prototype.ngOnInit = function () {
        setTimeout(function () { this.carouselService.getImages(); }.bind(this), 4000);
        setTimeout(function () {
            var elm = Object.assign([], this.images);
            this.images.push(elm[2]);
            this.images.push(elm[3]);
        }.bind(this), 7000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], SimpleCarouselFromServiceComponent.prototype, "topCarousel", void 0);
    SimpleCarouselFromServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-carousel-from-service',
            template: __webpack_require__(/*! ./simple-carousel-from-service.component.html */ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.html"),
            styles: [__webpack_require__(/*! ./simple-carousel-from-service.component.css */ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_simple_carousel_from_service_service__WEBPACK_IMPORTED_MODULE_3__["SimpleCarouselService"]])
    ], SimpleCarouselFromServiceComponent);
    return SimpleCarouselFromServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/simple-carousel-from-service/simple-carousel-from-service.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/simple-carousel-from-service/simple-carousel-from-service.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: SimpleCarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCarouselService", function() { return SimpleCarouselService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimpleCarouselService = /** @class */ (function () {
    function SimpleCarouselService() {
        var _this = this;
        this.images = [
            "https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png",
            "http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1",
            "https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg",
            "https://www.losminionsaldia.com/images/mas-minions/minion.png"
        ];
        this.getImagesEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getImages = function () {
            _this.getImagesEmitter.emit(_this.images);
        };
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimpleCarouselService.prototype, "getImagesEmitter", void 0);
    SimpleCarouselService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimpleCarouselService);
    return SimpleCarouselService;
}());



/***/ }),

/***/ "./src/app/components/simple-carousel/simple-carousel.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/simple-carousel/simple-carousel.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host carousel-component{\n  border: 1px solid black;\n  display: block;\n  overflow: hidden;\n  padding: 8vh 6vh;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 2vh;\n}\n\n.button-toggle{\n  font-size: 1.8vh;\n  padding: 1vh;\n  margin-bottom: 1vh;\n}\n\nh1{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\n.item-carousel{\n  background-color: white;\n  display: flex!important;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n  width: 23vh!important;\n  height: 20vh!important;\n  top:0vh;\n}\n\n.item-carousel div,\n.item-carousel img{\n  height: 100%;\n  width: 100%;\n}\n\n.item-carousel div{\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.parameter-option{\n  margin-right: 2vh;\n}\n\n.parameters-content{\n  font-size: 1.8vh;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: center;\n}\n\n.parameters-content button,\n.parameters-content select,\n.parameters-content input{\n  font-size: 1.5vh;\n}\n\np.show-code{\n  color: #ab2300;\n}\n\np{\n  font-size: 1.8vh;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel{\n  transition: all 500ms!important;\n}\n\n:host carousel-component.style-carousel.ready .item-carousel.actual{\n  height: 30vh!important;\n  top:-2.5vh;\n}\n\n:host carousel-component.cube-mode.ready >>> .container{\n  -webkit-perspective: 10vh!important;\n          perspective: 10vh!important;\n}\n\n/* Small devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  h1{\n    font-size: 2.5vh;\n  }\n  .button-toggle,\n  p{\n    font-size: 1.7vh;\n  }\n  .parameters-content {\n    font-size: 1.7vh;\n  }\n\n\n}\n\n/* Large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n  :host carousel-component{\n    width: 60%;\n  }\n  .item-carousel{\n    width: 28vh!important;\n    height: 25vh!important;\n  }\n  h1{\n    font-size: 2.7vh;\n  }\n  .button-toggle{\n    font-size: 1.6vh;\n  }\n\n}\n\n@media (min-width: 2000px) {\n  :host carousel-component.cube-mode.ready >>> .container{\n    -webkit-perspective: 15vh!important;\n            perspective: 15vh!important;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW1wbGUtY2Fyb3VzZWwvc2ltcGxlLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHdCQUF3QjtFQUd4Qix3QkFBd0I7RUFHeEIsb0JBQW9CO0VBR3BCLGtCQUFrQjtFQUdsQix3QkFBd0I7RUFHeEIsdUJBQXVCO0VBR3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7Q0FDVDs7QUFHRDs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNEO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxpQkFBaUI7RUFHakIsY0FBYztFQUdkLG9CQUFvQjtFQUdwQixnQkFBZ0I7RUFHaEIsNEJBQTRCO0VBRzVCLHVCQUF1QjtFQUd2QixvQkFBb0I7Q0FDckI7O0FBQ0Q7OztFQUdFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFJRSxnQ0FBZ0M7Q0FDakM7O0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztDQUNaOztBQUVEO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QjtDQUM3Qjs7QUFFRCwyQ0FBMkM7O0FBQzNDO0VBQ0U7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDs7SUFFRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjs7O0NBR0Y7O0FBR0QsbURBQW1EOztBQUNuRDtFQUNFO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjs7Q0FFRjs7QUFDRDtFQUNFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtHQUM3QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW1wbGUtY2Fyb3VzZWwvc2ltcGxlLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCBjYXJvdXNlbC1jb21wb25lbnR7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogOHZoIDZ2aDtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuLmJ1dHRvbi10b2dnbGV7XG4gIGZvbnQtc2l6ZTogMS44dmg7XG4gIHBhZGRpbmc6IDF2aDtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuaDF7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogIzE5NzZkMjtcbn1cblxuLml0ZW0tY2Fyb3VzZWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveCFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleCFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjN2aCFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjB2aCFpbXBvcnRhbnQ7XG4gIHRvcDowdmg7XG59XG5cblxuLml0ZW0tY2Fyb3VzZWwgZGl2LFxuLml0ZW0tY2Fyb3VzZWwgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLml0ZW0tY2Fyb3VzZWwgZGl2e1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5wYXJhbWV0ZXItb3B0aW9ue1xuICBtYXJnaW4tcmlnaHQ6IDJ2aDtcbn1cbi5wYXJhbWV0ZXJzLWNvbnRlbnR7XG4gIGZvbnQtc2l6ZTogMS44dmg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhcmFtZXRlcnMtY29udGVudCBidXR0b24sXG4ucGFyYW1ldGVycy1jb250ZW50IHNlbGVjdCxcbi5wYXJhbWV0ZXJzLWNvbnRlbnQgaW5wdXR7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG59XG5wLnNob3ctY29kZXtcbiAgY29sb3I6ICNhYjIzMDA7XG59XG5we1xuICBmb250LXNpemU6IDEuOHZoO1xufVxuXG46aG9zdCBjYXJvdXNlbC1jb21wb25lbnQuc3R5bGUtY2Fyb3VzZWwucmVhZHkgLml0ZW0tY2Fyb3VzZWx7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNpdGlvbjphbGwgNTAwbXMhaW1wb3J0YW50O1xuICAtby10cmFuc2l0aW9uOiBhbGwgNTAwbXMhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMhaW1wb3J0YW50O1xufVxuOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50LnN0eWxlLWNhcm91c2VsLnJlYWR5IC5pdGVtLWNhcm91c2VsLmFjdHVhbHtcbiAgaGVpZ2h0OiAzMHZoIWltcG9ydGFudDtcbiAgdG9wOi0yLjV2aDtcbn1cblxuOmhvc3QgY2Fyb3VzZWwtY29tcG9uZW50LmN1YmUtbW9kZS5yZWFkeSA+Pj4gLmNvbnRhaW5lcntcbiAgcGVyc3BlY3RpdmU6IDEwdmghaW1wb3J0YW50O1xufVxuXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDF7XG4gICAgZm9udC1zaXplOiAyLjV2aDtcbiAgfVxuICAuYnV0dG9uLXRvZ2dsZSxcbiAgcHtcbiAgICBmb250LXNpemU6IDEuN3ZoO1xuICB9XG4gIC5wYXJhbWV0ZXJzLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMS43dmg7XG4gIH1cblxuXG59XG5cblxuLyogTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIDpob3N0IGNhcm91c2VsLWNvbXBvbmVudHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC5pdGVtLWNhcm91c2Vse1xuICAgIHdpZHRoOiAyOHZoIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1dmghaW1wb3J0YW50O1xuICB9XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogMi43dmg7XG4gIH1cbiAgLmJ1dHRvbi10b2dnbGV7XG4gICAgZm9udC1zaXplOiAxLjZ2aDtcbiAgfVxuXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gIDpob3N0IGNhcm91c2VsLWNvbXBvbmVudC5jdWJlLW1vZGUucmVhZHkgPj4+IC5jb250YWluZXJ7XG4gICAgcGVyc3BlY3RpdmU6IDE1dmghaW1wb3J0YW50O1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/simple-carousel/simple-carousel.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/simple-carousel/simple-carousel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Simple example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/simple-carousel\" target=\"_blank\">Source code</a></p>\n<button class=\"button-toggle\"(click)=\"toggle()\">Toggle Vertical / Horizontal Mode</button>\n<carousel-component [mode]=\"'horizontal'\" [timeToSlide]=\"300\" #topCarousel>\n  <div class=\"item-carousel\" *ngFor=\"let image of images\">\n    <div [ngStyle]=\"{'background-image': 'url(' + image + ')'}\"  >\n    </div>\n  </div>\n\n</carousel-component>\n\n"

/***/ }),

/***/ "./src/app/components/simple-carousel/simple-carousel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/simple-carousel/simple-carousel.component.ts ***!
  \*************************************************************************/
/*! exports provided: SimpleCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCarouselComponent", function() { return SimpleCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/carousel/src/public_api */ "./projects/carousel/src/public_api.ts");



var SimpleCarouselComponent = /** @class */ (function () {
    function SimpleCarouselComponent() {
        this.images = [
            "https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png",
            "http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1",
            "https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg",
            "https://www.losminionsaldia.com/images/mas-minions/minion.png"
        ];
    }
    SimpleCarouselComponent.prototype.toggle = function () {
        this.topCarousel.toggleMode();
    };
    SimpleCarouselComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], SimpleCarouselComponent.prototype, "topCarousel", void 0);
    SimpleCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-carousel',
            template: __webpack_require__(/*! ./simple-carousel.component.html */ "./src/app/components/simple-carousel/simple-carousel.component.html"),
            styles: [__webpack_require__(/*! ./simple-carousel.component.css */ "./src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimpleCarouselComponent);
    return SimpleCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/style-carousel/style-carousel.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/style-carousel/style-carousel.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Style example</h1>\n<p class=\"show-code\"><a href=\"https://github.com/kappys1/angular2-carousel/tree/web-doc/src/app/components/style-carousel\" target=\"_blank\">Source code</a></p>\n<p>You can set your style, for example the actual slide</p>\n<carousel-component class=\"style-carousel\">\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg)\"></div></div>\n  <div class=\"item-carousel\"><div style=\"background-image: url(https://www.losminionsaldia.com/images/mas-minions/minion.png)\"></div></div>\n</carousel-component>\n\n"

/***/ }),

/***/ "./src/app/components/style-carousel/style-carousel.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/style-carousel/style-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: StyleCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleCarouselComponent", function() { return StyleCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StyleCarouselComponent = /** @class */ (function () {
    function StyleCarouselComponent() {
    }
    StyleCarouselComponent.prototype.ngOnInit = function () {
    };
    StyleCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-style-carousel',
            template: __webpack_require__(/*! ./style-carousel.component.html */ "./src/app/components/style-carousel/style-carousel.component.html"),
            styles: [__webpack_require__(/*! ../simple-carousel/simple-carousel.component.css */ "./src/app/components/simple-carousel/simple-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StyleCarouselComponent);
    return StyleCarouselComponent;
}());



/***/ }),

/***/ "./src/app/pages/api/api.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/api/api.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  font-size: 5vh;\n  font-weight: 200;\n}\n\nh2{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\nh3{\n  font-size: 2vh;\n  font-weight: 200;\n  color: #1976d2;\n}\n\np{\n  font-size: 1.8vh;\n}\n\ntable{\n  width: 100%;\n  font-size: 1.8vh;\n  border-collapse: collapse;\n  border-spacing: 0;\n  color: #555;\n}\n\ntable, th, td {\n  border: 1px solid #555;\n}\n\nth, td {\n  padding: 1vh;\n}\n\n.example-title{\n  cursor: pointer;\n}\n\n.content-example{\n  opacity: 0;\n  height: 0vh;\n  overflow: hidden;\n  visibility: hidden;\n  transition: opacity 300ms, height 300ms;\n}\n\n.content-example.show{\n  opacity: 1;\n  visibility: visible;\n  height: auto;\n}\n\n.code{\n  font-size: 1.8vh;\n}\n\n/* Extra small devices (phones, less than 768px) */\n\n/* No media query since this is the default in Bootstrap */\n\n/* Small devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  h1{\n    font-size: 4.5vh;\n  }\n  h2{\n    font-size: 2.5vh;\n  }\n  .code,\n  p{\n    font-size: 1.7vh;\n  }\n  table{\n    width: 95%;\n    font-size: 1.7vh;\n  }\n}\n\n/* Medium devices (desktops, 992px and up) */\n\n@media (min-width: 992px) {\n  table{\n    width: 70%;\n    font-size: 1.7vh;\n  }\n}\n\n/* Large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1600px) {\n  table{\n    width: 70%;\n    font-size: 1.5vh;\n  }\n  .code,\n  p{\n    font-size: 1.5vh;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBpL2FwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFJbkIsd0NBQXdDO0NBQ3pDOztBQUNEO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQsbURBQW1EOztBQUNuRCwyREFBMkQ7O0FBRTNELDJDQUEyQzs7QUFDM0M7RUFDRTtJQUNFLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0VBQ0Q7O0lBRUUsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0dBQ2xCO0NBQ0Y7O0FBRUQsNkNBQTZDOztBQUM3QztFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtHQUNsQjtDQUNGOztBQUVELG1EQUFtRDs7QUFDbkQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7R0FDbEI7RUFDRDs7SUFFRSxpQkFBaUI7R0FDbEI7O0NBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcGkvYXBpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgZm9udC1zaXplOiA1dmg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbmgye1xuICBmb250LXNpemU6IDN2aDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5oM3tcbiAgZm9udC1zaXplOiAydmg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG5we1xuICBmb250LXNpemU6IDEuOHZoO1xufVxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuOHZoO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM1NTU7XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbn1cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDF2aDtcbn1cbi5leGFtcGxlLXRpdGxle1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudC1leGFtcGxle1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIGhlaWdodCAzMDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCBoZWlnaHQgMzAwbXM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIGhlaWdodCAzMDBtcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcywgaGVpZ2h0IDMwMG1zO1xufVxuLmNvbnRlbnQtZXhhbXBsZS5zaG93e1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29kZXtcbiAgZm9udC1zaXplOiAxLjh2aDtcbn1cblxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpICovXG4vKiBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIEJvb3RzdHJhcCAqL1xuXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaDF7XG4gICAgZm9udC1zaXplOiA0LjV2aDtcbiAgfVxuICBoMntcbiAgICBmb250LXNpemU6IDIuNXZoO1xuICB9XG4gIC5jb2RlLFxuICBwe1xuICAgIGZvbnQtc2l6ZTogMS43dmg7XG4gIH1cbiAgdGFibGV7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmb250LXNpemU6IDEuN3ZoO1xuICB9XG59XG5cbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIHRhYmxle1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZm9udC1zaXplOiAxLjd2aDtcbiAgfVxufVxuXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgdGFibGV7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmb250LXNpemU6IDEuNXZoO1xuICB9XG4gIC5jb2RlLFxuICBwe1xuICAgIGZvbnQtc2l6ZTogMS41dmg7XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/api/api.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/api/api.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Carousel Api</h1>\n<h2>Inputs (Properties)</h2>\n<table>\n  <thead>\n  <tr>\n    <th>Parameter</th>\n    <th>Type</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>morePairSlides</td>\n    <td>number</td>\n    <td>1</td>\n    <td>Add slide carousel in both sides</td>\n  </tr>\n  <tr>\n    <td>angle</td>\n    <td>number</td>\n    <td>45</td>\n    <td>Angle to distribute the carousel</td>\n  </tr>\n  <tr>\n    <td>ratioScale</td>\n    <td>number</td>\n    <td>1</td>\n    <td>Carousel scale ratio</td>\n  </tr>\n  <tr>\n    <td>margin</td>\n    <td>number</td>\n    <td>0</td>\n    <td>Margin to separate between carousel slides</td>\n  </tr>\n  <tr>\n    <td>perspective</td>\n    <td>number</td>\n    <td>2000</td>\n    <td>Perspective to show the carousel slide</td>\n  </tr>\n  <tr>\n    <td>timeToSlide</td>\n    <td>number</td>\n    <td>300</td>\n    <td>Time (in ms) to transalte to carousel slide if transition isn't complete</td>\n  </tr>\n  <tr>\n    <td>lockSlides</td>\n    <td>boolean</td>\n    <td>false</td>\n    <td>Block the swiping</td>\n  </tr>\n  <tr>\n    <td>initialSlide</td>\n    <td>number</td>\n    <td>0</td>\n    <td>Index number on initial carrousel</td>\n  </tr>\n  <tr>\n    <td>mode</td>\n    <td>string</td>\n    <td>\"horizontal\"</td>\n    <td>Can you init carousel in 'horizontal' or 'vertical' mode</td>\n  </tr>\n  <tr>\n    <td>threshold</td>\n    <td>number</td>\n    <td>5</td>\n    <td>For change the velocity when you are moving the slides</td>\n  </tr>\n  </tbody>\n</table>\n<h3 class=\"example-title\"(click)=\"showParameterExample = !showParameterExample\">example (show/hide)</h3>\n\n<div class=\"content-example {{showParameterExample?'show':''}}\">\n  <h3>Template:</h3>\n  <p>example to use input parameters to init carousel component with 30 angle.</p>\n  <p><i>note : you can use a variable to set angle.</i></p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"parameterHtml | safeHtml\">\n\n      </div>\n  </pre>\n  <p><a href=\"https://embed.plnkr.co/oQzPhfdxzPZ4ejg2OYQr/\">Example Plnkr</a></p>\n\n</div>\n<h2>Outputs (Events)</h2>\n<p><i>All events return the carousel by argument on callback function, in table you can see what event return carousel only or event too</i></p>\n<table>\n  <thead>\n  <tr>\n    <th>Event</th>\n    <th>argument</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>onInit</td>\n    <td>carousel</td>\n    <td>Event will carousel component initialize</td>\n  </tr>\n  <tr>\n    <td>onReady</td>\n    <td>carousel</td>\n    <td>Event will carousel component is ready</td>\n  </tr>\n  <tr>\n    <td>onChangeProperties</td>\n    <td>Property (SimpleChanges type)</td>\n    <td>Event will properties of carousel changes</td>\n  </tr>\n  <tr>\n    <td>onSlideChange</td>\n    <td>carousel</td>\n    <td>Event will be fired when slide change</td>\n  </tr>\n  <tr>\n    <td>onSlideCentered</td>\n    <td>carousel</td>\n    <td>Event will be fired when actual slide are centered</td>\n  </tr>\n  <tr>\n    <td>onTransitionStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired in the beginning of transition. normally when you up finger and the slide isn't collocate</td>\n  </tr>\n  <tr>\n    <td>onTransitionEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired after transition.</td>\n  </tr>\n  <tr>\n    <td>onSlideNextTransitionStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionStart\" but for \"forward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onSlideNextTransitionEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionEnd\" but for \"forward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onSlidePrevTransitionStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionEnd\" but for \"backward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onSlidePrevTransitionEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Same as \"onTransitionEnd\" but for \"backward\" direction only</td>\n  </tr>\n  <tr>\n    <td>onTouchMove</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user move carrousel</td>\n  </tr>\n  <tr>\n    <td>onTouchStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user start to move the carousel</td>\n  </tr>\n  <tr>\n    <td>onTouchEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user finish to move the carousel</td>\n  </tr>\n  <tr>\n    <td>onSlideMove</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user touch and move finger over carousel and move it</td>\n  </tr>\n  <tr>\n    <td>onSlideMoveEnd</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user stop move finger over carousel</td>\n  </tr>\n  <tr>\n    <td>onSlideMoveStart</td>\n    <td>js event &amp;&amp; carousel</td>\n    <td>Event will be fired when user start move finger over carousel</td>\n  </tr>\n  <tr>\n    <td>onReachBeginning</td>\n    <td>carousel</td>\n    <td>Event will be fired when Swiper reach its beginning (initial position)</td>\n  </tr>\n  <tr>\n    <td>onReachEnd</td>\n    <td>carousel</td>\n    <td>Event will be fired when Swiper reach last slide</td>\n  </tr>\n  </tbody>\n</table>\n<h3 class=\"example-title\"(click)=\"showOutputExample = !showOutputExample\">example (show/hide)</h3>\n\n<div class=\"content-example {{showOutputExample?'show':''}}\">\n  <h3>Template:</h3>\n  <p>example to use output event when slideTransitionEnd.</p>\n  <p><i>note : use a function created in your component that where you want to receive the event</i></p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"outputHtml | safeHtml\">\n\n      </div>\n  </pre>\n  <p><a href=\"https://embed.plnkr.co/gVAvihaAcPyuzV2QTypp/\">Example Plnkr</a></p>\n</div>\n<h2>Functions & Properties</h2>\n<p>After we initialize Carrousel we have its initialized instance in variable (like topCarousel variable in example above) with helpful methods and properties:</p>\n<h3>functions</h3>\n<table>\n  <thead>\n  <tr>\n    <th>Method</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>slideNext()</td>\n    <td>Function to move the carousel to next slide</td>\n  </tr>\n  <tr>\n    <td>slidePrev()</td>\n    <td>Function to move the carousel to previous slide</td>\n  </tr>\n  <tr>\n    <td>slideTo(index)</td>\n    <td>Function to move the carousel to index slide</td>\n  </tr>\n  <tr>\n    <td>toggleMode()</td>\n    <td>Change to 'horizontal' or 'vertical' mode</td>\n  </tr>\n  <tr>\n    <td>update()</td>\n    <td>You should call it if you want update the carousel</td>\n  </tr>\n  <tr>\n    <td>lockCarousel(value)</td>\n    <td>Function for lock carousel swiper (True / False)</td>\n  </tr>\n  </tbody>\n</table>\n<h3>Properties</h3>\n<p><i>the current properties of carousel it's inside carousel variable, <b>the others properties of functions are Input or Outputs parameters</b></i></p>\n<table>\n  <thead>\n  <tr>\n    <th>Params</th>\n    <th>Type</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>currdeg</td>\n    <td>number</td>\n    <td>Actual deg of our carousel</td>\n  </tr>\n  <tr>\n    <td>activeIndex</td>\n    <td>number</td>\n    <td>Index number of currently active slide</td>\n  </tr>\n  <tr>\n    <td>degreesSlides</td>\n    <td>Array</td>\n    <td>Degrees where are our carousel slides</td>\n  </tr>\n  <tr>\n    <td>items</td>\n    <td>Array</td>\n    <td>Elements HTML in carousel</td>\n  </tr>\n  <tr>\n    <td>lastIndex</td>\n    <td>number</td>\n    <td>Last Index number active slide</td>\n  </tr>\n  <tr>\n    <td>lockSlides</td>\n    <td>Boolean</td>\n    <td>Carousel swipe status, if is blocked</td>\n  </tr>\n  <tr>\n    <td>totalItems</td>\n    <td>number</td>\n    <td>Total items in carousel</td>\n  </tr>\n  </tbody>\n</table>\n<h3 class=\"example-title\"(click)=\"showPropertiesExample = !showPropertiesExample\">example (show/hide)</h3>\n\n<div class=\"content-example {{showPropertiesExample?'show':''}}\">\n  <h3>Template:</h3>\n  <p>you need init the component in template setting a identificator like this:</p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"propertiesHtml | safeHtml\">\n\n      </div>\n  </pre>\n  <h3>Component:</h3>\n  <p>In your component you need get the carousel component like this:</p>\n  <pre>\n      <div class=\"code hljs ruby\" [innerHTML]=\"propertiesController | safeHtml\">\n\n      </div>\n  </pre>\n  <p><a href=\"https://embed.plnkr.co/1TYQm9E8L3lTTIHmONVJ/\">Example Plnkr</a></p>\n\n</div>\n\n<h2>Extras</h2>\n<p>Extra functionalities</p>\n<h2>Auto Play</h2>\n<h3>Autoplay Parameters (Inputs)</h3>\n<table>\n  <thead>\n  <tr>\n    <th>Parameter</th>\n    <th>Type</th>\n    <th>Default</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <td>autoPlay</td>\n    <td>boolean</td>\n    <td>false</td>\n    <td>carousel works alone</td>\n  </tr>\n  <tr>\n    <td>delayAutoPlay</td>\n    <td>number</td>\n    <td>3000</td>\n    <td>time (ms) to change next slide with auto play</td>\n  </tr>\n  </tbody>\n</table>\n<h3>Autoplay Methods</h3>\n<table>\n  <thead>\n  <tr>\n    <th>Method</th>\n    <th>Description</th>\n  </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>autoPlayStart()</td>\n      <td>Start auto play mode</td>\n    </tr>\n    <tr>\n      <td>autoPlayStop()</td>\n      <td>Stop auto play mode</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/pages/api/api.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/api/api.component.ts ***!
  \********************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
        this.showParameterExample = false;
        this.showPropertiesExample = false;
        this.showOutputExample = false;
        this.parameterHtml = "\n    < carousel-component [angle]=30\" >\n      < div class=\"item-carousel\">a< /div >\n      < div class=\"item-carousel\">b< /div >\n      < div class=\"item-carousel\">c< /div >\n      < div class=\"item-carousel\">d< /div >\n      < div class=\"item-carousel\">e< /div >\n      < div class=\"item-carousel\">f< /div > \n    < /carousel-component >\n  ";
        this.outputHtml = "\n    < carousel-component (onSlideChangeEnd)=\"slideChangeEndFn($event)\" >\n      < div class=\"item-carousel\">a< /div >\n      < div class=\"item-carousel\">b< /div >\n      < div class=\"item-carousel\">c< /div >\n      < div class=\"item-carousel\">d< /div >\n      < div class=\"item-carousel\">e< /div >\n      < div class=\"item-carousel\">f< /div > \n    < /carousel-component >\n  ";
        this.propertiesHtml = "\n    < carousel-component #topCarousel >\n      < div class=\"item-carousel\" > a < /div >\n      < div class=\"item-carousel\" > b < /div >\n    < /carousel-component >\n  ";
        this.propertiesController = "\n  import {Component, ViewChild} from '@angular/core';\n  import {CarouselComponent} from \"angular2-carousel\";\n\n  @Component({\n    selector: 'foo-component',\n    templateUrl: 'foo.component.html'\n  })\n  export class fooComponent{\n\n     @ViewChild('topCarousel') topCarousel: CarouselComponent;\n     constructor() {}\n\n    fooNextSlide() {\n      this.topCarousel.slideNext();\n    }\n  }\n  ";
    }
    ApiComponent.prototype.ngOnInit = function () {
    };
    ApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api',
            template: __webpack_require__(/*! ./api.component.html */ "./src/app/pages/api/api.component.html"),
            styles: [__webpack_require__(/*! ./api.component.css */ "./src/app/pages/api/api.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/examples.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/examples/examples.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  font-size: 5vh;\n  font-weight: 200;\n}\n\n/* Small devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  h1{\n    font-size: 4vh;\n\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQsMkNBQTJDOztBQUMzQztFQUNFO0lBQ0UsZUFBZTs7R0FFaEI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgZm9udC1zaXplOiA1dmg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBoMXtcbiAgICBmb250LXNpemU6IDR2aDtcblxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/examples/examples.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/examples/examples.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Demos</h1>\n<app-simple-carousel></app-simple-carousel>\n\n<app-simple-carousel-from-service></app-simple-carousel-from-service>\n\n<app-properties-carousel></app-properties-carousel>\n<app-functions-carousel></app-functions-carousel>\n<h1>Others demos</h1>\n<app-cube-carousel></app-cube-carousel>\n<app-style-carousel></app-style-carousel>\n<app-autoplay-carousel></app-autoplay-carousel>\n<app-multiple-slider-carousel></app-multiple-slider-carousel>\n"

/***/ }),

/***/ "./src/app/pages/examples/examples.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/examples/examples.component.ts ***!
  \******************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/pages/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.css */ "./src/app/pages/examples/examples.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/get-started/get-started.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/get-started/get-started.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-size: 2vh;\n}\nh1{\n  font-size: 5vh;\n  font-weight: 200;\n}\nh2{\n  font-size: 3vh;\n  font-weight: 200;\n  color: #1976d2;\n}\nli{\n  margin-top: 2vh;\n}\n/* Extra small devices (phones, less than 768px) */\n/* No media query since this is the default in Bootstrap */\n/* Small devices (tablets, 768px and up) */\n@media (min-width: 768px) {\n  *{\n    font-size: 1.8vh;\n  }\n\n}\n/* Medium devices (desktops, 992px and up) */\n@media (min-width: 992px) {\n  *{\n    font-size: 2vh;\n  }\n}\n/* Large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  *{\n    font-size: 1.8vh;\n  }\n}\n@media (min-width: 1600px) {\n  h1{\n    font-size: 4vh;\n  }\n  h2{\n    font-size: 2.5vh;\n  }\n  *{\n    font-size: 1.8vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQsbURBQW1EO0FBQ25ELDJEQUEyRDtBQUUzRCwyQ0FBMkM7QUFDM0M7RUFDRTtJQUNFLGlCQUFpQjtHQUNsQjs7Q0FFRjtBQUVELDZDQUE2QztBQUM3QztFQUNFO0lBQ0UsZUFBZTtHQUNoQjtDQUNGO0FBRUQsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxpQkFBaUI7R0FDbEI7Q0FDRjtBQUdEO0VBQ0U7SUFDRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGlCQUFpQjtHQUNsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuaDF7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG5oMntcbiAgZm9udC1zaXplOiAzdmg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG5saXtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIGxlc3MgdGhhbiA3NjhweCkgKi9cbi8qIE5vIG1lZGlhIHF1ZXJ5IHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwICovXG5cbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAqe1xuICAgIGZvbnQtc2l6ZTogMS44dmg7XG4gIH1cblxufVxuXG4vKiBNZWRpdW0gZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAqe1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICB9XG59XG5cbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAqe1xuICAgIGZvbnQtc2l6ZTogMS44dmg7XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogNHZoO1xuICB9XG4gIGgye1xuICAgIGZvbnQtc2l6ZTogMi41dmg7XG4gIH1cbiAgKntcbiAgICBmb250LXNpemU6IDEuOHZoO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/get-started/get-started.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/get-started/get-started.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Getting Started with Angular Carousel</h1>\n<h2>1a Download and Install</h2>\n<p>First, you need download library:</p>\n<ul>\n  <li>We can download them from <a href=\"https://github.com/kappys1/ngx-carousel\">NEW Swiper GitHub repository</a></li>\n  <li>\n    Or, using NPM\n    <pre>\n      <div class=\"code hljs ruby\">\n        npm install --save angular2-carrousel\n      </div>\n    </pre>\n  </li>\n</ul>\n\n<h2>2a Usage</h2>\n<p>First tou need to provide the CarouselModule to your desired Module</p>\n<pre >\n      <div class=\"code hljs ruby\" [innerHTML]=\"html | safeHtml\">\n\n      </div>\n</pre>\n<h2>3. Add Carousel HTML Layout</h2>\n<p>Now, you can use CarouselModule as follow:</p>\n<pre >\n      <div class=\"code hljs ruby\" [innerHTML]=\"html2 | safeHtml\">\n\n      </div>\n</pre>\n<p><b>All slides of carousel must have \"<i>.item-carousel</i>\" </b></p>\n<b><a href=\"https://embed.plnkr.co/CPWvmndIgpsglCvLChhc/\">Preview plnkr</a></b>\n"

/***/ }),

/***/ "./src/app/pages/get-started/get-started.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/get-started/get-started.component.ts ***!
  \************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetStartedComponent = /** @class */ (function () {
    function GetStartedComponent() {
        this.html = "\n         import {CarouselModule} from \"angular2-carousel\";\n        // In your App's module or Custom Module:\n        @NgModule({\n            imports: [\n               CarouselModule\n            ]\n        })\n  ";
        this.html2 = "\n        < carousel-component >\n            < div class=\"item-carousel\" >a < /div >\n            < div class=\"item-carousel\" >\n                < div class=\"b\" >\n                    < img/ src=\"https://www.losminionsaldia.com/images/mas-minions/minion.png\">\n                < /div >\n            < /div>\n            < div class=\"item-carousel\" >c< /div>\n            < div class=\"item-carousel\" >d< /div>\n          < /carousel-component>\n      ";
        this.systemjsImport = '' +
            'System.config({\n' +
            '    map:{\n' +
            '        \'hammerjs\': \'npm:hammerjs@2.0.8/hammer.js\',\n' +
            '        \'angular2-carousel\' : \'https://npmcdn.com/angular2-carousel/bundles/ng2-carousel-module.umd.js\'\n' +
            '    }\n' +
            '})';
    }
    GetStartedComponent.prototype.ngOnInit = function () {
    };
    GetStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-started',
            template: __webpack_require__(/*! ./get-started.component.html */ "./src/app/pages/get-started/get-started.component.html"),
            styles: [__webpack_require__(/*! ./get-started.component.css */ "./src/app/pages/get-started/get-started.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetStartedComponent);
    return GetStartedComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipe.safehtml.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/pipe.safehtml.ts ***!
  \****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexmarcos/Documents/Projects/ANGULAR/ngx-carousel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map