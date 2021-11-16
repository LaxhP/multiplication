import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableMultiplicationComponent } from './components/table-multiplication/table-multiplication.component';
import { IdentComponent } from './components/ident/ident.component';
import { TablesMultiplicationComponent } from './components/tables-multiplication/tables-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMultiplicationComponent,
    IdentComponent,
    TablesMultiplicationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
