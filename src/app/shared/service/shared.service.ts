import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';


  imports: [
    CommonModule,
    // other modules
  ]
  // other properties
export class AppModule { }

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
}
