import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http:HttpClient) { }

  obtenerClima(): Observable<any> {
    return this.http.get(`${environment.apiClimaUrl}lat={-70.61631917607444}&lon={-33.49992188566094}`);
  }

}