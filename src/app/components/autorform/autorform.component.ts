import { Component } from '@angular/core';
import { AutorComponent } from '../autor/autor.component';
import { Autor } from '../dto/autor';
import { AutorService } from '../services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autorform',
  templateUrl: './autorform.component.html',
  styleUrl: './autorform.component.css'
})
export class AutorformComponent {

  titulo = 'Crear Autor';

  autor: Autor = new Autor();

  error: any;

  constructor(private autorService: AutorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

  public crear(): void {
    this.autorService.registrarAutor(this.autor).subscribe(autor => {
      Swal.fire('Nuevo:', `Registro  => ${autor.idautor}   creado con éxito`, 'success');
      this.router.navigate(['/autor']);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}
