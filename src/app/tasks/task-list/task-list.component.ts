import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "linux-task-list",
  templateUrl: "./task-list.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: "Task 1", done: false },
    { id: 2, title: "Task 2", done: true }
  ];

  addTask(title: any) {
    this.tasks.push({
      id: null,
      title,
      done: false
    });
  }
}
