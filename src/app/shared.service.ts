import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Observable is for async requests 

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  readonly APIUrl= "http://127.0.0.1:8000";
  // http://127.0.0.1:8000/todo

  getToDoList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/todo');
  }

  addToDoList(val:any){
    alert(val.text);
    return this.http.post<any>(this.APIUrl+'/todo/',val);
  }

}
