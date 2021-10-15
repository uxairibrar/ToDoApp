import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToDoComponent } from '../to-do.component';

import { ShowTodoComponent } from './show-todo.component';

describe('ShowTodoComponent', () => {
  let component: ShowTodoComponent;
  let fixture: ComponentFixture<ShowTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTodoComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('renders a show to do component', () => {
    const { debugElement } = fixture;
    const counter = debugElement.query(By.css('app-add-todo'));
    expect(counter).toBeTruthy();
  });

  

  describe('Add button', () => {

    it('should have a click event on add button', () => {

      spyOn(component, 'addClick');
      component.addClick();

      fixture.detectChanges();

      let buton = fixture.debugElement.query(By.css('button')).nativeElement.click();
      expect(component.addClick).toHaveBeenCalled();

    });

    it('should have a add button', () => {
      const addButton = fixture.debugElement.nativeElement.querySelector('#addButton')
      expect(addButton).toBeTruthy();
    });
  
  });  

});
