import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interface/api-response';
import { Ivehicles } from '../interface/ivehicles';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  
  constructor(private http:HttpClient){}

  baseurl="https://seo-dashboard-32j2.onrender.com/api/Vehicles";
  postData(formData:FormData){
     return this.http.post<ApiResponse<Ivehicles>>(this.baseurl,formData);
  }
   getData(){
     return this.http.get<ApiResponse<Ivehicles>>(this.baseurl);
  }
   deleteData(id:number){
     return this.http.delete<ApiResponse<Ivehicles>>(this.baseurl+'/'+id);
  }
}
