import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
