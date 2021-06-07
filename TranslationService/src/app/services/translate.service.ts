import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  result:string;
  key:string;
  url:string;
  

 
  constructor(private httpClient:HttpClient) {
    this.key=environment.API_KEY;
    this.url=`https://translation.googleapis.com/language/translate/v2?key=${this.key}`
   }

   

  translate(text:string){
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json'
    // });

    return this.httpClient.post(this.url,{
      'q':text,
      'target':'es'
    }).pipe(
      map((result:any) => {
        return result.data.translations[0].translatedText;
      })
    )
  }    
}    
     
   
 

