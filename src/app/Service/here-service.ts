import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHero } from '../interface/ihero';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root', 
})
export class HereService {
  
  constructor(private http:HttpClient){}
    base_url="https://seo-dashboard-32j2.onrender.com/api/Hero";

    PostData(obj:FormData){
  return this.http.post<ApiResponse<IHero>>(this.base_url,obj);
    }
    GetData(){
  return this.http.get<ApiResponse<IHero>>(this.base_url);
    }

}
