import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionShoesComponent } from './gestion-shoes/gestion-shoes.component';
import { AjoutShoesComponent } from './ajout-shoes/ajout-shoes.component';
import { EditShoesComponent } from './edit-shoes/edit-shoes.component'; // Importez le composant EditShoesComponent
import { AjoutMagasinsComponent } from './ajout-magasins/ajout-magasins.component';

const routes: Routes = [
{path: 'liste', component: GestionShoesComponent},
{path: 'ajouter', component: AjoutShoesComponent},
{path: 'ajouter_magasins', component: AjoutMagasinsComponent},
{ path: 'edit-shoes/:id', component: EditShoesComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
