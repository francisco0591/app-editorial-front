import { Component } from '@angular/core';
import { Libro } from '../dto/libro';
import { LibroService } from '../services/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libroform',
  templateUrl: './libroform.component.html',
  styleUrl: './libroform.component.css'
})
export class LibroformComponent {

  titulo = 'Crear Autor';

  libro: Libro = new Libro();

  error: any;

  constructor(private libroService: LibroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

  public crear(): void {
    this.libroService.registrarLibro(this.libro).subscribe(libro => {
      Swal.fire('Nuevo:', `Registro  => ${libro.idlibro}   creado con éxito`, 'success');
      this.router.navigate(['/autor']);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}
