import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "linux-enter-task",
  templateUrl: "./enter-task.component.html",
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent {
  @Output() outEnterTask = new EventEmitter<string>();
  enterTask(titleInput: HTMLInputElement) {
    this.outEnterTask.emit(titleInput.value);
    titleInput.value = "";
    titleInput.focus();
  }
}
