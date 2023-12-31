import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './componnents/select/select.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    BrowserModule
  ],
  exports :[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    
  ]
})
export class SharedModule { }
