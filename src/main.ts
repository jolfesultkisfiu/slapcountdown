// @ts-ignore

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CountdownComponent } from './app/app.component';
import {NgModule} from "@angular/core";
import{BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

bootstrapApplication(CountdownComponent, appConfig)
  .catch((err) => console.error(err));





