import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../interface/icontact';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http:HttpClient){}
   base_url="https://seo-dashboard-32j2.onrender.com/api/contact";
  postData(obj:IContact){
   return this.http.post<ApiResponse<IContact>>(this.base_url,obj);
  }
  GetData(){
   return this.http.get<ApiResponse<IContact>>(this.base_url);
  }
}
