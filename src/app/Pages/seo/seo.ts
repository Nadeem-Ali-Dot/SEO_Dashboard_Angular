import { Component, OnInit } from '@angular/core';
import { SEOSettingsservice } from '../../Service/seosettingsservice';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-seo',
  imports: [ReactiveFormsModule],
  templateUrl: './seo.html',
  styleUrl: './seo.css',
})
export class Seo implements OnInit {
  seoform: FormGroup;
  constructor(private c:SEOSettingsservice,private fb:FormBuilder){
    this.seoform=fb.group({
      id:[0],
      pageName: [''],
      metaTitle: ['',[Validators.required]],
      metaDescription: ['',[Validators.required]],
      focusKeywords: ['',[Validators.required]],
      canonicalUrl: ['',[Validators.required]],
      robotsTag: [''],
      ogTitle: ['',[Validators.required]],
      ogDescription: ['',[Validators.required]],
      ogImage: ['',[Validators.required]],
      twitterTitle: ['',[Validators.required]],
      twitterDescription: ['',[Validators.required]],
      twitterImage: ['',[Validators.required]],

    });
  }
   
getError(controlName: string): string {

  const control = this.seoform.get(controlName);

  if (!control || !control.touched) {
    return '';
  }

  if (control.hasError('required')) {
    return 'This field is required';
  }

  return '';
}
  onSubmit(){
  console.log(this.seoform.invalid)
     if (this.seoform.invalid) {

    this.seoform.markAllAsTouched();

    return;
  }
   
 this.c.postDate(this.seoform.value).subscribe(res=>{
      console.log(this.seoform.value);
    })
    
    
   
  }

  ngOnInit(): void {
    this.c.getData().subscribe(res=>{
      console.log(res.result[0])
this.seoform.patchValue(res.result[0]);
    });
  }
}
