import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  serie: any;
  valor: any;
}



@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  fecha = new Date()

  constructor(private http: HttpClient) {}

  getDolar(): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/dolar`
    )
  }

  getYuro(): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/euro`
    )
  }



}
