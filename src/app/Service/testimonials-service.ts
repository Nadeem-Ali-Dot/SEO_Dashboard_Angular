import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interface/api-response';
import { ITestimonials } from '../interface/itestimonials';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private http:HttpClient){}
  base_url='https://seo-dashboard-32j2.onrender.com/api/Testimonials';
  PostTestimonials(obj:FormData){
    return this.http.post<ApiResponse<ITestimonials>>(this.base_url,obj);
  }
   GetTestimonials(){
    return this.http.get<ApiResponse<ITestimonials>>(this.base_url);
  }
  
   DeleteTestimonials(id:number){
    return this.http.delete<ApiResponse<ITestimonials>>(this.base_url+'/'+id);
  }
}
