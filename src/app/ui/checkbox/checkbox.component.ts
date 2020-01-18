import {
  Component,
  EventEmitter,
  Input,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "linux-checkbox",
  templateUrl: "./checkbox.component.html",
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() checked: boolean;
  @Input() outCheck = new EventEmitter<boolean>();

  check(checked: boolean) {
    this.outCheck.emit(checked);
  }
}
