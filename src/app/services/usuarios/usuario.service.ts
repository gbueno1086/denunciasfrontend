import { baseUrl } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  getUsuarioPorId(id: number):Observable<any>{
    return this.http.get(`${baseUrl}user/`+id);
  }
}
