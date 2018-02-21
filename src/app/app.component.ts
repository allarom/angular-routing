import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor (){
    this.title = 'I am a title';
    console.log('constructor')
  }
  sayHello(){
    console.log('Hi!');
  }
}
