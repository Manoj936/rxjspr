import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { takeLast, map, mergeMap, mergeAll, switchMap, filter, toArray, take, pluck, skip, exhaustMap, skipLast } from 'rxjs/operators';
import { combineLatest, concat, from, merge, of, Subscription } from 'rxjs';
import { interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, OnDestroy {

  constructor(public srdServ: SharedService) {

  }

  ngOnInit(): void {
    let sub1 = this.srdServ.getDummy();
    let sub2 = this.srdServ.getUser();

    let newObs = from(['Manoj', 'ankit', 'raju', 'priya']);
    const prom = (str :string) => new Promise((res, rej) => {
      setTimeout(() => {
        res('My name is ' + str)
      }, 1500)
    })

    sub2.pipe(mergeMap((res:any) => res) ,pluck('address','geo'), toArray()).subscribe((res)=>{
      console.log(res);
    })

    let Obs1 = interval(1000).pipe(map((res: any) => 'Any ' + res), take(5))
    let Obs2 = interval(500).pipe(map((res: any) => 'Manny ' + res), take(5))



    newObs.pipe(mergeMap((res) => { return prom(res) })).subscribe((res) => {
      console.log(res)
    })
    // concat(sub1 ,sub2).subscribe((res)=>{
    //   console.log( 'concat', res)
    // })


    //merge
    // merge(sub1 ,sub2).subscribe((res)=>{
    //   console.log('merge',res)
    // })




    //combile Latest
    // combineLatest([sub1 ,sub2]).subscribe(([res1 , res2])=>{
    //   console.log(res1 ,' combine latest==>res1')
    //   console.log(res2 , 'combine latest =>res2')
    // })




    // let obs1 = interval(1000).pipe(map((res)=> 'any' + res),take(5));
    // let obs2 = interval(3000).pipe(map((res)=> 'many' + res),take(5));
    // let obs3 =

  }
  ngOnDestroy(): void {

  }
  obsRetr(key: string) {
    return of('my name is' + key);
  }
  isClicked() {
    this.srdServ.btnText.next('Cliked');
    const newVar = { "name": "Bunty", "age": "32" }
    this.srdServ.newBhv.subscribe((res) => {
      console.log(res);
    })
  }
}
