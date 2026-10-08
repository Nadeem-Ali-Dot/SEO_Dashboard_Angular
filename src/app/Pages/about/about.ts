import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AboutSection } from '../../Service/about-section';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-about',
  imports: [ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
 selectedFile: File | null = null;
  imagePreview: string | null = '';
  isloading = signal(false);
  AboutsectionForm: FormGroup;
  constructor(private c:AboutSection,private fb:FormBuilder,private tost:ToastrService){
    this.AboutsectionForm=this.fb.group({
      id:[0],
    title:['',Validators.required],
    description:['',Validators.required],
    imageUrl:[''],
    publicId:['']
    })
  }
 
  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    this.selectedFile = input.files[0];

    
    this.imagePreview = URL.createObjectURL(this.selectedFile);
  }

  
  ngOnInit(): void {
    this.c.getData().subscribe(res=>{
     
      this.AboutsectionForm.patchValue(res.result[0])
        this.imagePreview = res.result[0].imageUrl;
       console.log(this.AboutsectionForm);
    })
  }
  onSubmit(){
  
     if (this.AboutsectionForm.invalid) {
      this.AboutsectionForm.markAllAsTouched();
      return;
    }

      const formData = new FormData();

     formData.append(
      'id',
      String(this.AboutsectionForm.get('id')?.value ?? 0)
    );

    formData.append(
      'title',
      this.AboutsectionForm.get('title')?.value ?? ''
    );

    formData.append(
      'description',
      this.AboutsectionForm.get('description')?.value ?? ''
    );
    formData.append(
      'publicId',
      this.AboutsectionForm.get('publicId')?.value ?? ''
    );

    // Only send image if user selected a new image
    if (this.selectedFile) {
      formData.append('ImageUrl', this.selectedFile);
    }
    this.isloading.set(true);
    this.c.postData(formData).subscribe({
      next: (res) => {
        this.isloading.set(false);
       this.tost.success(
  'About section updated successfully!',
  'Success'
);
console.log(res);
        // Update form with new image information
        // if (res.result) {
        //   this.AboutsectionForm.patchValue({
        //     //imageUrl: res.result[0].imageUrl,
        //     publicId: res.result[0].publicId
        //   });

        //   //this.imagePreview = res.result[0].imageUrl;
        //   this.selectedFile = null;
        // }
      },
      error: (err) => {
          this.isloading.set(false);
        console.error('Upload failed', err);
      }
    });
    
  }
  removeimage(){
    this.imagePreview=null;
  }
}

