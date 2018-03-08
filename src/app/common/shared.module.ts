import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng-select';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    MalihuScrollbarModule.forRoot(),
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    SelectModule,
    MalihuScrollbarModule
  ],
  providers: [],
})
export class SharedModule {}