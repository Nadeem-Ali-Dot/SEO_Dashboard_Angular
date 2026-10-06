import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsService } from '../../Service/testimonials-service';
import { ITestimonials } from '../../interface/itestimonials';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-testimonials',
  imports: [ReactiveFormsModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials implements OnInit {
isFormOpen = false;
editingId: number | null = null;
testimonials= signal<ITestimonials[]>([]);



imagePreview = '';
selectedFile: File | null = null;
isloading = false;
testimonialForm:FormGroup;
constructor(private fb:FormBuilder,private tm:TestimonialsService,private toast:ToastrService){
  this.testimonialForm=this.fb.group({
     id: [0],
    customerName:[''],
    review:[''],
    rating:[''],
    customerImage:[''],
    publicId:['']

  });
}

ngOnInit(): void {
  this.tm.GetTestimonials().subscribe(res=>{
    this.testimonials.set(res.result);
    console.log(this.testimonials);
    })
}

cancelForm(){
  this.isFormOpen = !this.isFormOpen
}
editTestimonial(testimonial:any){
  console.log(testimonial);
  this.testimonialForm.patchValue(testimonial);
  this.isFormOpen=true;
}
deleteTestimonial(id:number){
  this.tm.DeleteTestimonials(id).subscribe(res=>{
  var data=  this.testimonials.update(data=> data.filter(x=>x.id!=id) );
 
    this.toast.show("Testimonial Remove Succesfully")
  })
}
onSubmit(){
if(this.testimonialForm.invalid){
  this.testimonialForm.markAllAsTouched();
  return;
}
   const formData = new FormData();
   formData.append('id',this.testimonialForm.get('id')?.value);
   formData.append('customerName',this.testimonialForm.get('customerName')?.value);
   formData.append('review',this.testimonialForm.get('review')?.value);
   formData.append('rating',this.testimonialForm.get('rating')?.value);
     if (this.selectedFile) {
   formData.append('customerImage',this.selectedFile);
  }
     formData.append('publicId',this.testimonialForm.get('publicId')?.value);
    
     this.tm.PostTestimonials(formData).subscribe(res=>{
      this.toast.success("Testimonial Add Succesfully","Success");
      console.log(res);
     })





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
}
