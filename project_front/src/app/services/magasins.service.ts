import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  constructor(private httpClient: HttpClient) { }
  getListMgasin(): Observable<any> {
  return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/magasins`)
}

postMagasin(data: any): Observable<any>{
  return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/magasins`,data);}

  getAllMagasins(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/magasins`);
  }

  getMagasin(magasinsId: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/magasins/${magasinsId}`);
  }


}
