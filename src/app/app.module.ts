import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { EnterTaskComponent } from "./tasks/enter-task/enter-task.component";
import { TaskListComponent } from "./tasks/task-list/task-list.component";
import { TaskComponent } from "./tasks/task/task.component";
import { CheckboxComponent } from './ui/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
