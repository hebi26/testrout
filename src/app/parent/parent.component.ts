import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  word : string;
  list =['pomme', 'orange', 'banane'];

  addfruit(){
// addfruit(entry : string){
  // this.word=(entry);
  if(this.list.indexOf(this.word) == -1){
  this.list.push(this.word);
  this.word="";
  }
  else{
    this.word='';
    alert('Deja dans la liste !');
  }
}

delete(event, i){
  this.list.splice(i, 1);
}

constructor() { }

  ngOnInit() {
  }

}
