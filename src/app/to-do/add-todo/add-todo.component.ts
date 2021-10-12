import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() todo:any;
  ID:string | undefined;
  text: string = '';

  ngOnInit(): void {
    this.todo=this.todo.ID;
    this.todo=this.todo.text;
  }

  addToDo(){
    // alert("Called");
    var val = {
      text:this.text};
      this.service.addToDoList(val).subscribe(res=>{
      alert(res.toString());
      });
  }
}
