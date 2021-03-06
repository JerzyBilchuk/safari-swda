import 'rxjs/Rx';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {HttpModule} from '@angular/http';
import {TodoService} from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
