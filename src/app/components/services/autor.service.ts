import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Autor } from '../dto/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private url_base = "api/autor"

  constructor(private http : HttpClient) { }

  public listarAutores() : Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.url_base}/listarTodo`);
  }

  public registrarAutor(autor : Autor){
    return this.http.post<Autor>(`${this.url_base}/save`,autor)
}
}
