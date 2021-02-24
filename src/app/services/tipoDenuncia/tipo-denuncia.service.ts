import { baseUrl } from './../../../environments/environment';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDenuncia } from '../../models/tipoDenuncia';


@Injectable({
  providedIn: 'root'
})
export class TipoDenunciaService {

  constructor(private http:HttpClient) { }

  buscarTodosTipoDenuncia():Observable<TipoDenuncia[]>{
    const url = `${baseUrl}tipoDenuncia`
     return this.http.get<TipoDenuncia[]>(url);
  }
  buscarTipoDenunciaPorId(id: string):Observable<TipoDenuncia>{
    const url = `${baseUrl}tipoDenuncia/${id}`
    return this.http.get<TipoDenuncia>(url);
  }
  criarTipoDenuncia(tipoDenuncia: TipoDenuncia):Observable<TipoDenuncia>{
    const url = `${baseUrl}tipoDenuncia`
    return this.http.post<TipoDenuncia>(url, tipoDenuncia);
  }
  alterarTipoDenuncia(tipoDenuncia: TipoDenuncia):Observable<TipoDenuncia>{
    const url = `${baseUrl}tipoDenuncia/${tipoDenuncia.id}`
    return this.http.put<TipoDenuncia>(url, tipoDenuncia);
  }
  deletarTipoDenuncia(id: string){
  const url = `${baseUrl}tipoDenuncia/${id}`
  return this.http.delete(url);
  }
}
