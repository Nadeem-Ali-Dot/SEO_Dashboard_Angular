import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../Service/contact-service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  ContactForm:FormGroup;
  isloading=signal(false);
  mapHtml: SafeHtml = '';
constructor(private fb:FormBuilder,private service:ContactService,private toast:ToastrService,private sanitizer: DomSanitizer){
  this.ContactForm = this.fb.group({
  id: [0],
  phoneNumber: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  officeAddress: ['', Validators.required],
  googleMapEmbedCode: ['']
});
}
ngOnInit(): void {
  this.service.GetData().subscribe(res=>{
    this.ContactForm.patchValue(res.result[0]);
    this.mapHtml = this.sanitizer.bypassSecurityTrustHtml(
  res.result[0].googleMapEmbedCode);
   
  })
}

onSubmit(){

  if(this.ContactForm.invalid){
    this.ContactForm.markAllAsTouched();
    return;
  }
  this.isloading.set(true);
  this.service.postData(this.ContactForm.value).subscribe(res=>{
    this.toast.success("Contact update changes successfully","Success");
this.isloading.set(false);
  })

}
}
