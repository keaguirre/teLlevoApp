import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsuariosService {

  constructor(private http:HttpClient) { }

  listarUsuarios():Observable<Usuarios>{
    return this.http.get<Usuarios>(`${environment.apiURL}/personas`)
  }

}