import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty task initially', () => {
    expect(component.task.title).toBe('');
    expect(component.task.description).toBe('');
  });

  it('should add a task and reset the form', () => {
    component.task.title = 'New Task';
    component.task.description = 'New Description';
    spyOn(console, 'log');
    component.addTask();
    expect(console.log).toHaveBeenCalledWith({ title: 'New Task', description: 'New Description' });
    expect(component.task.title).toBe('');
    expect(component.task.description).toBe('');
  });
});
