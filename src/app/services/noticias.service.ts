import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment.prod';

const apiKey = environment.apikey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){

    query= apiUrl + query;
    return this.http.get<T>(query,{headers});

  }

  getTopHeadLines(){
    //return this.http.get<RespuestaTopHeadLines>('http://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=8f640782bd264a3d8772350c6e03442d');
    return this.ejecutarQuery<RespuestaTopHeadLines>('/top-headlines?country=ar&category=general');
  }

  getTopLinesCategorias(categoria: string){
    console.log(categoria);
    return this.ejecutarQuery<RespuestaTopHeadLines>('/top-headlines?country=ar&category='+ categoria);

  }
}
