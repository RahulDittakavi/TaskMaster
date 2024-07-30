import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default tasks', () => {
    expect(component.tasks.length).toBe(2);
    expect(component.tasks[0].title).toBe('Task 1');
    expect(component.tasks[1].title).toBe('Task 2');
  });

  it('should remove a task', () => {
    component.removeTask(0);
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Task 2');
  });
});
