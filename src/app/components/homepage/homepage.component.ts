import { Component, OnInit } from '@angular/core';
import {foo,pi} from '../../custom/functions';
import { AnyService } from '../../services/any.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  animals: Array<String>;
  date: Date = new Date();
  name= '';
  feedbackEnabled = false;
  moonPhase = 'full';



  // animals: Array<string> = ['Dog', 'Duck', 'Elephant', 'Zebra'];
  // name = 'Foobar';

  constructor(private anyService: AnyService) {
    this.name;
    // my Array 
    this.animals = ['foo', 'bar','me'];

   }

  // constructor() {
  //  this.name =null;
  //  this.animals = [{
  //    name: 'boo',
  //    type: 'Dog',
  //   }, {
  //     name: 'dumbo',
  //     type: 'elephant',
  //   }]
  //  }


  ngOnInit() {
  }

   addAnimal(form) {
     if (form.valid) {
       this.animals.push(this.name);
       this.name = '';
       this.feedbackEnabled = false;
     } else {
       this.feedbackEnabled = true;
     }
  }

  handleDeleteAnimal(event) {
    console.log('User want to delete animallissimo ' + event);
  }

//   recordAllTheKeyStrokes(event) {
//     console.log(`Key inserted: ${event.key}`);
//     //console.log(`Input value: ${event.currentTarget.value}`);
// }

}


// export class HomepageComponent implements OnInit {
// name: string;
// animals: Array<string>;
  
//   constructor() {
//     this.animals = ['Dog', 'Duck', 'Elephant', 'Zebra'];
//     this.name = 'Foobar';
//     console.log('Constructor was called')
//    }

//   ngOnInit() {
//   }

// }