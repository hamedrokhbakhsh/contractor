import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {DateComponent} from './date/date.component';



@NgModule({
  declarations: [
          FilterComponent ,
          DateComponent
      ],
  imports: [
    CommonModule
  ] ,
  exports: [
      FilterComponent ,
      DateComponent
  ]
})
export class SharedModule { }
