import { Component, OnInit, signal } from '@angular/core';
import { TestimonialsService } from '../../Service/testimonials-service';
import { ITestimonials } from '../../interface/itestimonials';

@Component({
  selector: 'app-testimonialssection',
  imports: [],
  templateUrl: './testimonialssection.html',
  styleUrl: './testimonialssection.css',
})
export class Testimonialssection implements OnInit {
 testimonials = signal<ITestimonials[]>([]);
  constructor(private t : TestimonialsService){}
  ngOnInit(): void {
    this.t.GetTestimonials().subscribe(res=>{
      console.log(res)

      this.testimonials.set(res.result);
    })
  }
}
