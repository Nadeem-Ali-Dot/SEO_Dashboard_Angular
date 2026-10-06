import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interface/api-response';
import { Ioccasions } from '../interface/ioccasions';

@Injectable({
  providedIn: 'root',
})
export class OccasionsService {
  constructor(private http:HttpClient){}
 BaseUrl='https://seo-dashboard-32j2.onrender.com/api/Occasions';
  PostData(formData:FormData){
   return this.http.post<ApiResponse<Ioccasions>>(this.BaseUrl,formData);
  }
   GetData(){
   return this.http.get<ApiResponse<Ioccasions>>(this.BaseUrl);
  }
   deleteData(id:number){
   return this.http.delete<ApiResponse<Ioccasions>>(this.BaseUrl+'/'+id);
  }
}
