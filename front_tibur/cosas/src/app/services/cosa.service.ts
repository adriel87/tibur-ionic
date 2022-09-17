import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_API_URL: string ='http://localhost:8080/api/cosa'

@Injectable({
  providedIn: 'root'
})
export class CosaService {

  api = {
    getAll : `http://localhost:8080/api/cosa`
  } 


  constructor(private httpClient: HttpClient) { }


  getCosas(){
    return this.httpClient.get(this.api.getAll)
  }
}
