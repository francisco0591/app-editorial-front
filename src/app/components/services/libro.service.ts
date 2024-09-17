import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Libro } from '../dto/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url_base = "api/libro"

  constructor(private http : HttpClient) { }

  public listarLibros() : Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.url_base}/listarTodo`);
  }

  public registrarLibro(libro : Libro){
    return this.http.post<Libro>(`${this.url_base}/save`,libro)
}
}
