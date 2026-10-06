import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interface/api-response';
import { IAboutSection } from '../interface/iabout-section';

@Injectable({
  providedIn: 'root',
})
export class AboutSection {
  base_url="https://seo-dashboard-32j2.onrender.com/api/About";
  constructor(private http:HttpClient){}

  postData(obj:FormData){
      return this.http.post<ApiResponse<IAboutSection>>(this.base_url,obj)
  }
  getData(){
    return this.http.get<ApiResponse<IAboutSection>>(this.base_url);
  }
}
