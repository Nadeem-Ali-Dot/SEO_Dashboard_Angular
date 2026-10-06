import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISeosetting } from '../interface/iseosetting';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root',
})
export class SEOSettingsservice {
  base_url="https://seo-dashboard-32j2.onrender.com/api/Seo";
  constructor(private http:HttpClient){}

  postDate(obj:ISeosetting){
      return this.http.post(this.base_url,obj)
  }
  getData(){
    return this.http.get<ApiResponse<ISeosetting>>(this.base_url);
  }

}
