import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { mysqlcomponent } from './components/mysql.component';
import { mongodbcomponent } from './components/mongodb.component';

@NgModule({
  declarations: [
    AppComponent,mysqlcomponent,mongodbcomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mysqlcomponent]
})
export class AppModule { }
