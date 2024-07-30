import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize with some tasks
    this.tasks = [
      { title: 'Task 1', description: 'Description 1' },
      { title: 'Task 2', description: 'Description 2' },
    ];
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
