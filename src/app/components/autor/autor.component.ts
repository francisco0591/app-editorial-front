import { Component } from '@angular/core';
import { Autor } from '../dto/autor';
import { AutorService } from '../services/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {
  titulo : string = 'Listado de autores';
  listadoAutor : Autor[] = [];
  constructor(private autorService : AutorService){}
  ngOnInit(): void {
    this.listarAutor();
  }

  public listarAutor() : void {
    this.autorService.listarAutores().subscribe(autor => {
      this.listadoAutor = autor;
    })
  }
}
