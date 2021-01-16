import { baseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitenteService {

  constructor(private http : HttpClient) {}

  getCursos(){
    return this.http.get(`${baseUrl}emitente`);
  }
}

