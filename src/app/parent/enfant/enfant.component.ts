import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input()word : string;
  @Input()list : string;
  @Output() supr : EventEmitter<any> = new EventEmitter<any>();

  delete(i){
  this.supr.emit(i);
  }

  constructor() { }


  ngOnInit() {
  }

}
