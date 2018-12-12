import { Component } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  clickme(){
  alert('called app component from js')
  Tesseract.recognize('assets/paytm-test.png')
.then(function(result){
    console.log(result)
})
  }
}
