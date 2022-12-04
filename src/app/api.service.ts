import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchFriend=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
  addFriend=(dataToSend:any)=>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }
}
