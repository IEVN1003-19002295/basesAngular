import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciaComponent } from './formularios/resistencia/resistencia.component';
import { SignozodiacalComponent } from './formularios/signozodiacal/signozodiacal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    Ejemplo1Component,
    CinepolisComponent,
    ResistenciaComponent,
    SignozodiacalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
