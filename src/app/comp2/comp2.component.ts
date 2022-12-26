import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { takeLast, map, mergeMap, filter, toArray, take, pluck, skip, exhaustMap, skipLast , debounceTime ,distinctUntilChanged} from 'rxjs/operators';
import { combineLatest, concat, from, merge, of, Subscription, Observable } from 'rxjs';
import { interval, fromEvent } from 'rxjs';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit , AfterViewInit {
@ViewChild('checkInp') checkInp : ElementRef
  constructor(public srdServ:SharedService) { }

  ngOnInit(): void {
    let pr = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.error('issue')
    })
    pr.subscribe((res)=>{
      console.log(res)
    })
  }
  ngAfterViewInit(): void {
    fromEvent(this.checkInp.nativeElement, 'keyup').pipe(map((event:any) => event.target.value ),debounceTime(1000) , distinctUntilChanged())
    .subscribe((res)=>{
      console.log(res);
    })
  }

}
