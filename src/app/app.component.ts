import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { interval, fromEvent, Observable, Subscription, Subject, BehaviorSubject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import * as Rx from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'rxjsPr';
  wait$: Subscription;
  showtext: any;

  constructor() {

  }
  @ViewChild('AddBtn') AddBtn: ElementRef

  ngOnInit(): void {

  }
  checkInt(interval : Observable<any>){
    let maxCount = 30;
    this.wait$ = interval.pipe(takeUntil(fromEvent(this.AddBtn.nativeElement , 'click'))).subscribe((res)=>{
      maxCount -- ;
      console.log(maxCount);
    })
  }
  checkTimer(timerEx : Observable<any>){
    let maxCount = 30;
    this.wait$ = timerEx.subscribe((res)=>{
      maxCount -- ;
      console.log(maxCount);
    })
  }
  // ngAfterViewInit(): void {
  //   let intervalEx$ = interval(1000);
  //   let timerEx$ = timer(10000, 3000);
  //   //this.checkInt(intervalEx$);
  //   this.checkTimer(timerEx$);
  // }
  // ngOnDestroy(): void {
  // this.wait$.unsubscribe();
  // }

}
