import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter, OnInit } from '@angular/core';

const ZERO = 0.000000000001;
const DIRECTION = {
  LEFT : 'left',
  RIGHT : 'right',
  UP : 'up',
  DOWN : 'down',
  NONE : 'none',
};
@Directive({
    selector: '[swiper]',
    exportAs: 'swiper'
})
export class SwiperDirective implements OnInit {
    isDown = false;
    initialPosX: number = ZERO;
    initialPosY: number = ZERO;
    lastPosX: number = ZERO;
    lastPosY: number = ZERO;
    swipeDistanceX: number = ZERO;
    swipeDistanceY: number = ZERO;
    firstSwipeDate = Date.now();
    direction = DIRECTION.NONE;

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
      let swipeFrameDistanceX = event.clientX - this.initialPosX - this.lastPosX;
      swipeFrameDistanceX = swipeFrameDistanceX < 30 ? swipeFrameDistanceX : 30;
      this.swipeDistanceX += swipeFrameDistanceX;

      let swipeFrameDistanceY = event.clientY - this.initialPosY - this.lastPosY;
      swipeFrameDistanceY = swipeFrameDistanceY < 30 ? swipeFrameDistanceY : 30;
      this.swipeDistanceY += swipeFrameDistanceY;

      this.lastPosX = event.clientX - this.initialPosX;
      this.lastPosY = event.clientY - this.initialPosY;

      const res = {
        velocityX: swipeFrameDistanceX,
        velocityY: swipeFrameDistanceY,
        isFinal: false,
        direction: this.direction,
        event: event,
      };
      return res;
    }

    swipeStart(event) {
      this.firstSwipeDate = Date.now();
      this.isDown = true;
      this.initialPosX = event.clientX;
      this.initialPosY = event.clientY;
      this.swipeDistanceX = ZERO;
      this.swipeDistanceY = ZERO;
      this.onSwipeStart.emit();
    }

    swipeEnd(event) {
      this.initialPosX = this.lastPosX = ZERO;
      this.initialPosY = this.lastPosY = ZERO;
      this.isDown = false;
      const res = {
        velocityX: 0,
        velocityY: 0,
        isFinal: !this.isDown,
      };
      this.onSwipeEnd.emit(res);
      this.swipeDistanceX = ZERO;
      this.swipeDistanceY = ZERO;
    }

    swipeMove(event) {
      const res = this.getResultFromEvent(event);
      if (res.velocityX > 0) {
        this.direction = DIRECTION.LEFT;
        this.onSwipeLeft.emit(res);
      } else if (res.velocityX < 0) {
        this.direction = DIRECTION.RIGHT;
        this.onSwipeRight.emit(res);
      } else if (res.velocityY > 0) {
        this.direction = DIRECTION.DOWN;
        this.onSwipeDown.emit(res);
      } else if (res.velocityY < 0) {
        this.direction = DIRECTION.UP;
        this.onSwipeUp.emit(res);
      }
      this.onSwipe.emit(res);
    }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: any) {
        const touch = event.touches[0] || event.changedTouches[0];
        this.swipeStart(touch);
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: any) {
        this.swipeStart(event);
    }

    @HostListener('document:mouseup', ['$event'])
    onMouseUp(event: any) {
      this.swipeEnd(event);
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd(event: any) {
      const touch = event.touches[0] || event.changedTouches[0];
      this.swipeEnd(touch);
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: any) {
      if (this.isDown) {
        this.swipeMove(event);
      }

    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: any) {
      const touch = event.touches[0] || event.changedTouches[0];
      this.swipeMove(touch);
    }




}
