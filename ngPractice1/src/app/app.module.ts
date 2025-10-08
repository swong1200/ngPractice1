import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeColorDirective } from './directives/change-color.directive';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FilterTasksPipe } from './filter-tasks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    ChangeColorDirective,
    TaskDetailComponent,
    FilterTasksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
