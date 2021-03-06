import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonComponent } from './module/person/person.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PersonComponent, PersonListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
