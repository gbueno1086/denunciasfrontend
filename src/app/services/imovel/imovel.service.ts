import { Observable } from 'rxjs';
import { baseUrl } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { }

  buscaImoveisGerais(){
    this.http.get(`${baseUrl}imovel`)
  }

  buscaImovelPorId(id: number):Observable<any>{
    return  this.http.get(`${baseUrl}imovel/`+ id);
  }

  buscaImovelPorString(chave : string, valor: string):Observable<any>{
    return this.http.get(`${baseUrl}/imovel/?`+ chave +' = ' + valor);
  }

}
