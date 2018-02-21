import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {
  // receive paquito from 
  @Input() paquito: string;
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleDeleteClick() {
    console.log('Delete clicked on' + this.paquito);
    this.delete.emit(this.paquito);
  }

}
