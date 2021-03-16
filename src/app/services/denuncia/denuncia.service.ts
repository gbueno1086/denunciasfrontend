import { baseUrl } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Denuncia } from '../../models/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(private http: HttpClient) { }

  getTodasDenuncias():Observable<any>{
    const url = `${baseUrl}denuncia`
    return this.http.get<any>(url);

  }

  buscarDenunciaPorId(id: string){
    const url = `${baseUrl}denuncia/${id}`
     return this.http.get(url);
  }

  salvarDenuncia(denuncia: Denuncia):Observable<Denuncia>{
    const url = `${baseUrl}denuncia`
    return this.http.post<Denuncia>(url, denuncia);
  }

  updateDenuncia(id:string, denuncia: Denuncia):Observable<Denuncia>{
    const url = `${baseUrl}denuncia/${id}`
    return this.http.put<Denuncia>(url, denuncia);
  }
  
}
