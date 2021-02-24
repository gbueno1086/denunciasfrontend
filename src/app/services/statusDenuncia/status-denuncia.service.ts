import { baseUrl } from './../../../environments/environment';
import { StatusDenuncia } from './../../models/statusDenuncia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatusDenunciaService {

  constructor(private http : HttpClient) { }

  getStatusDenuncia():Observable<StatusDenuncia[]>{
    const url = `${baseUrl}statusdenuncia`
    return this.http.get<StatusDenuncia[]>(url);
  }
  getStatusDenunciaPorId(id: string):Observable<StatusDenuncia>{
    const url = `${baseUrl}statusdenuncia/${id}`
    return this.http.get<StatusDenuncia>(url);
  }

  gravarStatusDenuncia(statusDenuncia: StatusDenuncia):Observable<StatusDenuncia>{
     const url = `${baseUrl}statusdenuncia`
     return this.http.post<StatusDenuncia>(url, statusDenuncia);

  }
  alterarStatusDenuncia(statusDenuncia: StatusDenuncia): Observable<StatusDenuncia>{
    const url = `${baseUrl}statusdenuncia/${statusDenuncia.id}`
    return this.http.put<StatusDenuncia>(url, statusDenuncia);
  }

  deletarStatusDenuncia(id: string){
    const url = `${baseUrl}statusdenuncia/${id}`
    return this.http.delete(url);
  }


}
