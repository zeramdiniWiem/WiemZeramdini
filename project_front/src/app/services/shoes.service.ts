import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  constructor(private httpClient: HttpClient) { }
  getListShoes(): Observable<any> {
  return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/chaussures`)
}

postShoes(data: any): Observable<any>{
  return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/chaussures`,data);}

deleteShoes(shoesId: string):Observable<any> {
  return this.httpClient.delete<any[]>(`${environment.apiUrl}/${environment.prefix}/chaussures/${shoesId}`);}
  getShoes(shoesId: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/chaussures/${shoesId}`);
  }

  updateShoes(shoesId: string, data: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/chaussures/${shoesId}`, data);
  }

}
