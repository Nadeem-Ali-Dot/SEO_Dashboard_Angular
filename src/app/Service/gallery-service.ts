import { Injectable } from '@angular/core';
import { IGallery } from '../interface/igallery';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
   constructor(private http:HttpClient){}

  baseurl="https://seo-dashboard-32j2.onrender.com/api/Gallery";
  postData(formData:FormData){
     return this.http.post<ApiResponse<IGallery>>(this.baseurl,formData);
  }
   getData(){
     return this.http.get<ApiResponse<IGallery>>(this.baseurl);
  }
   deleteData(id:number){
     return this.http.delete<ApiResponse<IGallery>>(this.baseurl+'/'+id);
  }
}
