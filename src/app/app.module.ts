import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { ToDoComponent } from './shared/to-do/to-do.component';
import { ShowTodoComponent } from './shared/to-do/show-todo/show-todo.component';
import { AddTodoComponent } from './shared/to-do/add-todo/add-todo.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ShowTodoComponent,
    AddTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
