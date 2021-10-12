import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  constructor(private service:SharedService) { }

  ToDoList:any=[];
  ActivateAddComp:boolean=false;
  todo:any;

  ngOnInit(): void {
    this.refreshToDoList();
  }

  refreshToDoList(){
    this.service.getToDoList().subscribe(data=>{
      this.ToDoList=data;
    })
  }

  addClick(){
    this.todo={
      ID:0,
      text:""
    }
    this.ActivateAddComp=true;
  }

  closeClick(){
    this.ActivateAddComp=false;
    this.refreshToDoList();
  }

}
