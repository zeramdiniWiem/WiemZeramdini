import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GestionShoesComponent } from './gestion-shoes/gestion-shoes.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutShoesComponent } from './ajout-shoes/ajout-shoes.component';
import { EditShoesComponent } from './edit-shoes/edit-shoes.component';
import { AjoutMagasinsComponent } from './ajout-magasins/ajout-magasins.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionShoesComponent,
    HeaderComponent,
    AjoutShoesComponent,
    AjoutMagasinsComponent,
    EditShoesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
