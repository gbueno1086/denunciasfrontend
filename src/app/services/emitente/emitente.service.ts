import { observable, Observable } from 'rxjs';
import { baseUrl } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitenteService {

  constructor(private http : HttpClient) {}

  getEmitentePorId(id: number):Observable<any>{
    return this.http.get(`${baseUrl}emitente/`+id);
  }

}
