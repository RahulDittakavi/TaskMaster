import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = {
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService) { }

  createTask(): void {
    this.taskService.createTask(this.task).subscribe(() => {
      this.task = { title: '', description: '', completed: false };
    });
  }
}
