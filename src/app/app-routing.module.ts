import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './components/autor/autor.component';
import { AutorformComponent } from './components/autorform/autorform.component';
import { LibroformComponent } from './components/libroform/libroform.component';
import { LibroComponent } from './components/libro/libro.component';

const routes: Routes = [
  {path : '' ,component:AutorComponent },
  {path : 'autor' ,component:AutorComponent },
  {path : 'autor/form' , component : AutorformComponent},
  {path : 'libro' , component : LibroComponent},
  {path : 'libro/form' , component : LibroformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
