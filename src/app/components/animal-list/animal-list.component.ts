import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  // accepts input animals from homepage html
  @Output() deleteAnimal = new EventEmitter<string>();
  @Input() animals: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  handleDelete(event) {
    console.log('User want to delete ' + event);
    this.deleteAnimal.emit(event);
  }

}
