import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { ToDoComponent } from './to-do.component';
import { By } from '@angular/platform-browser';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoComponent ],
       schemas: [NO_ERRORS_SCHEMA]              // ------->  *
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // Smoke Test
  // Test the presence of a Component instance
  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // Now to test Child Compeonenets we have two methods, 
  // 1) Decalare child compenents - Integeration Test
  // 2) Tell aNgualre to ignore the unknown elements - Unit Test

  // By doing * we have ignored the unknown element

  // Now First of all, we need to test the presence of app-show-todo

  it('renders a show to do component', () => {
    const { debugElement } = fixture;
    const counter = debugElement.query(By.css('app-show-todo'));
    expect(counter).toBeTruthy();
  });


});
