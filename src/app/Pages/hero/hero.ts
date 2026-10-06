import { Component, OnInit, signal } from '@angular/core';
import { HereService } from '../../Service/here-service';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService

 } from 'ngx-toastr';
@Component({
  selector: 'app-hero',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  isloading =signal(false);
  HereForm:FormGroup;
  selectedFile: File | null = null;
  imagePreview: string = '';
constructor(private ser:HereService,private fb:FormBuilder,private tost:ToastrService){
   this.HereForm=this.fb.group({
       id: [0],
  heading: ['',Validators.required],
  subHeading: ['',Validators.required],
  buttonText: ['',Validators.required],
  buttonLink: ['',Validators.required],
  imageUrl: [''],
  publicId: ['']
   })
}

ngOnInit(): void {
  this.ser.GetData().subscribe(res=>{
    console.log(res);
    this.HereForm.patchValue(res.result[0]);
    this.imagePreview=res.result[0].imageUrl;
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
  onSubmit(){
    console.log("click",this.HereForm);
    if(this.HereForm.invalid){
      this.HereForm.markAllAsTouched()
      return;
    }
     const formData = new FormData();
     
     formData.append('id',this.HereForm.get('id')?.value ?? 0)
     formData.append('heading',this.HereForm.get('heading')?.value)
     formData.append('subHeading',this.HereForm.get('subHeading')?.value)
     formData.append('buttonText',this.HereForm.get('buttonText')?.value)
     formData.append('buttonLink',this.HereForm.get('buttonLink')?.value)
     formData.append('publicId',this.HereForm.get('publicId')?.value)
    if (this.selectedFile) {
      formData.append('ImageUrl', this.selectedFile);
    }
     this.isloading.set(true);
     this.ser.PostData(formData).subscribe(res=>{
      this.isloading.set(false);
   this.tost.success('Hero section updated successfully!',
  'Success')
     })
  }
}
