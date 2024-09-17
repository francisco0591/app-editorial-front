import { Component } from '@angular/core';
import { Libro } from '../dto/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  titulo : string = 'Listado de libros';
  listadoLibro : Libro[] = [];
  constructor(private libroService : LibroService){}
  ngOnInit(): void {
    this.listarLibro();
  }

  public listarLibro() : void {
    this.libroService.listarLibros().subscribe(libro => {
      this.listadoLibro = libro;
    })
  }
}
