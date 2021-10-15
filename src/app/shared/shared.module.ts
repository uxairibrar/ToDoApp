import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do/to-do.component';
import { AddTodoComponent } from './to-do/add-todo/add-todo.component';
import { ShowTodoComponent } from './to-do/show-todo/show-todo.component';



@NgModule({
  declarations: [
    ToDoComponent,
    AddTodoComponent,
    ShowTodoComponent,
    
],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
