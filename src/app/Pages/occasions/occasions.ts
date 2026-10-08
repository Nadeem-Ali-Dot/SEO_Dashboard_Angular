import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OccasionsService } from '../../Service/occasions-service';
import { Ioccasions } from '../../interface/ioccasions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-occasions',
  imports: [ReactiveFormsModule],
  templateUrl: './occasions.html',
  styleUrl: './occasions.css',
})
export class Occasions implements OnInit {
imagePreview = '';
selectedFile: File | null = null;
isloading = signal(false);
isopen:boolean=false;

 occasionForm:FormGroup ;
occasions = signal<Ioccasions[]>([]);
  constructor(private fb:FormBuilder,private service:OccasionsService,private tost:ToastrService){
  this.occasionForm=this.fb.group({
    id: [0],
title:['',Validators.required],
description:['',Validators.required],
imageUrl:[''],
displayOrder: [0],
publicId: ['']
  });
 }
 
ngOnInit(): void {

this.loaddata();
}

loaddata(){
  this.service.GetData().subscribe(res=>{
    this.occasions.set(res.result);
    console.log(res.result)
  })
}

deleteoccasion(id:number){
  this.service.deleteData(id).subscribe(res=>{
    console.log(res)
    this.tost.success("Occasion Has Been Deleted Suceesfully","Success");
    this.loaddata();
  })
}
cancelForm(){
  this.isopen = !this.isopen
}
onImageSelected(event: Event) {

  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];

  // 5 MB validation
  if (file.size > 5 * 1024 * 1024) {
    alert('Image size must be less than 5MB');
    return;
  }

  this.selectedFile = file;

  // Preview
  const reader = new FileReader();

  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };

  reader.readAsDataURL(file);
}
 onSubmit(){
  if(this.occasionForm.invalid){
    this.occasionForm.markAllAsTouched();
    return;
  }
  
  const formData=new FormData();
  formData.append("id",this.occasionForm.get('id')?.value);
  formData.append("title",this.occasionForm.get('title')?.value);
  formData.append("publicId",this.occasionForm.get('publicId')?.value);
  formData.append("description",this.occasionForm.get('description')?.value);
  if(this.selectedFile){
  formData.append("imageUrl",this.selectedFile);

  }

 
  this.isloading.set(true)
  this.service.PostData(formData).subscribe(res=>{
     this.tost.success("Occasion Has Been Added Suceesfully","Success");
     this.occasionForm.reset();
     this.imagePreview="";
         this.loaddata();
    console.log(res);
    this.isloading.set(false);
  })
 }
 Editoccasion(obj:Ioccasions){
    this.occasionForm.patchValue(obj);
    this.imagePreview = obj.imageUrl;
    this.isopen=true;
 }

}
