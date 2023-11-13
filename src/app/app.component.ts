import {Component, NgModule, OnInit} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./app.component.css']
})
export class CountdownComponent implements OnInit{
  days:any
  hours:any
  minutes:any
  seconds:any
  countdownInterval:any;
  timeremaining:any;
  currentTime:any;


  midnightDate="01/01/2024"
  midnightTime=new Date(this.midnightDate).getTime()

  constructor() {
  }
  ngOnInit() {
    this.updateTimeRemaining();
    this.countdownInterval = setInterval(() => {
      this.updateTimeRemaining();
    }, 1000);


  }

  updateTimeRemaining(){
    this.currentTime=new Date().getTime();
    this.timeremaining=Math.max(0,((this.midnightTime-this.currentTime)/1000));

    this.days=Math.floor(this.timeremaining/3600/24)
    this.hours=Math.floor(this.timeremaining/3600)%24
    this.minutes=Math.floor(this.timeremaining/60)%60
    this.seconds=Math.floor(this.timeremaining)%60
    this.days=this.timeFormat(this.days)
    this.hours=this.timeFormat(this.hours)
    this.minutes=this.timeFormat(this.minutes)
    this.seconds=this.timeFormat(this.seconds)
  }
  timeFormat(szam:any):string{
    if(szam<10){
      return `0${szam}`
    }
    return szam;
  }
}


