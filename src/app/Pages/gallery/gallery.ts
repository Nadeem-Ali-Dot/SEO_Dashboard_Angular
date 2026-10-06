import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IGallery } from '../../interface/igallery';
import { GalleryService } from '../../Service/gallery-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gallery',
  imports: [ReactiveFormsModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
 galleryForm:FormGroup;

 constructor(private fb:FormBuilder, private service : GalleryService,private toat:ToastrService){
  this.galleryForm=this.fb.group({
 id: [0],
  imageUrl: [''],
  altText: ['',Validators.required],
  displayOrder: [0],
  publicId: ['']
  });
 }

 imagePreview:string="";
selectedFile: File | null = null;
isloading = false;
isopen:boolean=false;
gallery=signal<IGallery[]>([])
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
ngOnInit(): void {
  this.loaddata();
}
 onSubmit(){
   if(this.galleryForm.invalid)
      {
        this.galleryForm.markAllAsTouched();
        return;
      }
    const formData = new FormData();
    formData.append('id',this.galleryForm.get('id')?.value??0);
    formData.append('altText',this.galleryForm.get('altText')?.value);
    formData.append('publicId',this.galleryForm.get('publicId')?.value);
    formData.append('displayOrder',this.galleryForm.get('displayOrder')?.value??0);
    if(this.selectedFile){
    formData.append('imageUrl',this.selectedFile);

    }

    this.service.postData(formData).subscribe(res=>{
      console.log(res);
      if(res.isSuccess){
        this.galleryForm.reset();
       
        this.imagePreview='';
        this.toat.success('Gallery Add Successfully',"Success");
        this.loaddata();
      }

    })

 }
  
 ondelete(id:number){
  this.service.deleteData(id).subscribe(res=>{
    if(res.isSuccess){
         this.toat.success('Gallery Deleted Successfully',"Success");
        this.loaddata();
    }else{
      this.toat.success('Opration Failed',"error");
    }
  })
 }
   
 loaddata(){
  this.service.getData().subscribe(res=>{
    this.gallery.set(res.result);

  })


}
oncancel(){
  this.isopen = !this.isopen;
}
}
