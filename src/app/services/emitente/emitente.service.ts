import { Emitente } from './../../models/emitente';
import { Observable } from 'rxjs';
import { baseUrl } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitenteService {

  constructor(private http : HttpClient) {}

  getEmitentePorId(id: number):Observable<Emitente>{
    return this.http.get<Emitente>(`${baseUrl}prefeitura/`+id);
  }

  getEmitente():Observable<Emitente[]>{
    return this.http.get<Emitente[]>(`${baseUrl}prefeitura`);
  }

  postEmitente(emitente: Emitente):Observable<Emitente>{
     return this.http.post<Emitente>(`${baseUrl}emitente`, emitente);

  }
  putEmitente(id: number, emitente: Emitente):Observable<Emitente>{
      return  this.http.put<Emitente>(`${baseUrl}emitente/`+id, emitente);
  }

}
