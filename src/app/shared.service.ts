import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  btnText = new BehaviorSubject('Click Me');
  obj1 = [{
    "name": "Ankit",
    "age": "25"
  },
  {
    "name": "Manoj",
    "age": "28"
  },
  {
    "name": "priya",
    "age": "39"
  }]

  newBhv = new BehaviorSubject(this.obj1);
  constructor(private httpService : HttpClient) { }
getDummy(){
  return this.httpService.get('https://jsonplaceholder.typicode.com/posts');
}
getUser(){
  return this.httpService.get('https://jsonplaceholder.typicode.com/users')
}
}
