import { baseUrl } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
   
  constructor(private http : HttpClient) { }

  getUsuarioPorId(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`${baseUrl}user/`+id);
  }

  getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${baseUrl}user`);
  }

  gravarUsuario(usuario: Usuario):Observable<Usuario>{
     return this.http.post<Usuario>(`${baseUrl}user`, usuario);

  }
}
