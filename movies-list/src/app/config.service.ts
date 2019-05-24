import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }
  endpoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  apiKey ='ee7600c9376ec3598cc7b17dd3ac8f43';
   httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  
  private extractData(res:Response){
    let body = res;
    return body || {};  
  }

  getMoviesList():Observable<any> {
    return this.http.get(this.endpoint+this.apiKey).pipe(
      map(this.extractData));
  }


}
