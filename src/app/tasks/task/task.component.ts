import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "linux-task",
  templateUrl: "./task.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: any;
}
