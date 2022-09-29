import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const BASE_API_URL: string ='http://localhost:8080/api/cosa'

@Injectable({
  providedIn: 'root'
})
export class CosaService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  api = {
    getAll : `http://localhost:8080/api/cosa`,
    getFav : BASE_API_URL,
    create : BASE_API_URL,
    update : BASE_API_URL+'/',
    delete : BASE_API_URL+'/'
  } 


  constructor(private httpClient: HttpClient) { }


  getCosas(){
    return this.httpClient.get(this.api.getAll)
  }

  getCosa(id){
    return this.httpClient.get(this.api.getAll+`/${id}`)
  }

  getCosasFav(){
    return this.httpClient.get(this.api.getAll)
  }

  createNewCosa(value): Observable<any> {
    return this.httpClient.post(this.api.create, JSON.stringify({...value}), this.httpOptions)
      .pipe(
      
      )
  }

  updateCosa(id, cosaNueva): Observable<any>{
    return this.httpClient.put(this.api.delete+id,JSON.stringify({...cosaNueva}), this.httpOptions)
  }

  deleteCosa(id): Observable<any> {
    return this.httpClient.delete(this.api.delete+id, this.httpOptions)
  }
}
