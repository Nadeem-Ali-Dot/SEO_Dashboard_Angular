import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Ivehicles } from '../../interface/ivehicles';
import { VehiclesService } from '../../Service/vehicles-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicles',
  imports: [ReactiveFormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements OnInit {
vehicleForm:FormGroup; 
imagePreview = '';
selectedFile: File | null = null;
isloading = false;
isopen:boolean=false;
vehicles=signal<Ivehicles[]>([]);
constructor(private fb:FormBuilder,private service:VehiclesService,private tost:ToastrService){
  this.vehicleForm=this.fb.group({
      id: [0],
  name: [''],
  description: [''],
  imageUrl: [''],
  seatingCapacity: [0],
  features: [''],
  displayOrder: [0],
  publicId: ['']
  });
}
onSubmit(){
  if(this.vehicleForm.invalid){
    this.vehicleForm.markAllAsTouched();
    return;
  }
  const formData = new FormData();
  formData.append("id",this.vehicleForm.get('id')?.value ??0);
  formData.append("name",this.vehicleForm.get('name')?.value);
  formData.append("description",this.vehicleForm.get('description')?.value);
  if(this.selectedFile){
    formData.append('imageUrl',this.selectedFile);
  }
    formData.append("seatingCapacity",this.vehicleForm.get('seatingCapacity')?.value);
    formData.append("features",this.vehicleForm.get('features')?.value);
    formData.append("displayOrder",this.vehicleForm.get('displayOrder')?.value ??0);
    formData.append("publicId",this.vehicleForm.get('publicId')?.value);
  this.service.postData(formData).subscribe(res=>{
    this.tost.success("Vehicle add Successfuly",'Success');
    this.vehicleForm.reset();
    this.imagePreview="";
  this.loaddata();
  })    

}

ondelete(id:number){
  this.service.deleteData(id).subscribe(res=>{
    this.tost.success("Vehicle Deleted Successfuly",'Success');
    this.loaddata();
  })
}

ngOnInit(): void {
  this.loaddata();
}

loaddata(){
  this.service.getData().subscribe(res=>{
    this.vehicles.set(res.result);

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
