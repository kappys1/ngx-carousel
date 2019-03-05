import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter, OnInit } from '@angular/core';

const ZERO = 0.000000000001;

@Directive({
    selector: '[swiper]',
    exportAs: 'swiper'
})
export class SwiperDirective implements OnInit {
    isDown: boolean = false;
    initialPos: number = ZERO;
    lastPosX: number = ZERO;
    lastPosY: number = ZERO;
    swipeDistanceX: number = ZERO;
    swipeDistanceY: number = ZERO;
    firstSwipeDate = Date.now();

    @Output() onSwipeRight: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSwipeLeft: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSwipeUp: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSwipeDown: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSwipe: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSwipeStart: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSwipeEnd: EventEmitter<any> = new EventEmitter<any>();
    @Output() swipeLeft: EventEmitter<any> = new EventEmitter<any>();
    @Output() swipeRight: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }


    ngOnInit() {
    }

    getResultFromEvent(event) {

      let swipeFrameDistanceX = event.clientX - this.initialPos - this.lastPosX;
      swipeFrameDistanceX = swipeFrameDistanceX < 30 ? swipeFrameDistanceX : 30;
      this.swipeDistanceX += swipeFrameDistanceX;

      let swipeFrameDistanceY = event.clientY - this.initialPos - this.lastPosY;
      swipeFrameDistanceY = swipeFrameDistanceY < 30 ? swipeFrameDistanceY : 30;
      this.swipeDistanceY += swipeFrameDistanceY;

      this.lastPosX = event.clientX - this.initialPos;
      this.lastPosY = event.clientY - this.initialPos;

      return {
        velocityX: swipeFrameDistanceX,
        velocityY: swipeFrameDistanceY,
        isFinal: false,
      };

    }



    @HostListener('mousedown', ['$event'])
    onMouseDown(event: any) {
        this.firstSwipeDate = Date.now();
        this.isDown = true;
        this.initialPos = event.clientX;
        this.swipeDistanceX = 0;
        this.onSwipeStart.emit();
    }

    @HostListener('document:mouseup', ['$event'])
    onMouseUp(event: any) {
        if (!this.isDown) {
          return;
        }
        this.initialPos = this.lastPosX = ZERO;
        this.isDown = false;
        const res = {
          velocityX: 0,
          isFinal: !this.isDown,
        };
        if (this.swipeDistanceX > 100) {
            this.swipeLeft.emit();
            // this.onSwipeLeft.emit(res);
        } else if (this.swipeDistanceX < -100) {
            this.swipeRight.emit();
            // this.onSwipeRight.emit(res);
        } else {
            this.onSwipeEnd.emit(res);
        }
        this.onSwipeEnd.emit(res);
        this.swipeDistanceX = ZERO;
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: any) {
        if (this.isDown) {
            const res = this.getResultFromEvent(event);
            if (res.velocityX > 0) {
                this.onSwipeLeft.emit(res);
            } else {
                this.onSwipeRight.emit(res);
            }
        }
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: any) {
        const touch = event.touches[0] || event.changedTouches[0];
        const res = this.getResultFromEvent(touch);

        if (res.velocityX > 0) {
            this.onSwipeLeft.emit(res);
        } else {
            this.onSwipeRight.emit(res);
        }
    }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: any) {
        const touch = event.touches[0] || event.changedTouches[0];
        this.firstSwipeDate = Date.now();
        this.initialPos = touch.clientX;
        this.swipeDistanceX = ZERO;
        this.onSwipeStart.emit();
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd(event: any) {
        this.initialPos = this.lastPosX = ZERO;
        const res = {
          velocityX: 0,
          isFinal: true,
        };
        if (this.swipeDistanceX > 100) {
            this.swipeLeft.emit(res);
            // this.onSwipeLeft.emit(res);
        } else if (this.swipeDistanceX < -100) {
            this.swipeRight.emit(res);
            // this.onSwipeRight.emit(res);
        } else {
            this.onSwipeEnd.emit(res);
        }
        this.onSwipeEnd.emit(res);
        this.swipeDistanceX = ZERO;
    }

}
