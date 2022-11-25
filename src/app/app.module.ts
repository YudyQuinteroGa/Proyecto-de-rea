import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Importaciones */

import {MatToolbarModule} from '@angular/material/toolbar'; /* Barra superior*/
import {MatIconModule} from '@angular/material/icon'; /* Iconos */
import {MatButtonModule} from '@angular/material/button'; /* Botones*/
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'; /*Ventana emergente*/
import {MatFormFieldModule} from '@angular/material/form-field'; /*Formularios*/
import {MatInputModule} from '@angular/material/input'; /*Entradas*/
import {MatSelectModule} from '@angular/material/select'; /*Selecciones*/
import {MatDatepickerModule} from '@angular/material/datepicker'; /*Calendario*/
import {MatNativeDateModule} from '@angular/material/core'; /*Calendario*/
import {MatRadioModule} from '@angular/material/radio'; /*RadioButton */
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*Formulario reactivo*/
import { HttpClientModule } from '@angular/common/http'; /*servico http*/
import {MatTableModule} from '@angular/material/table'; /*Tablas*/
import {MatPaginatorModule} from '@angular/material/paginator'; /*Paginador*/
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /* Importaciones */
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
