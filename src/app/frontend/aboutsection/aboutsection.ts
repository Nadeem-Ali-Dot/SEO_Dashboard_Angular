import { Component, OnInit, signal } from '@angular/core';
import { IAboutSection } from '../../interface/iabout-section';
import { ContactService } from '../../Service/contact-service';
import { AboutSection } from '../../Service/about-section';

@Component({
  selector: 'app-aboutsection',
  imports: [],
  templateUrl: './aboutsection.html',
  styleUrl: './aboutsection.css',
})
export class Aboutsection  implements OnInit{

  about=signal<IAboutSection| null>(null)
constructor(private s:AboutSection){}
  ngOnInit(): void {
    this.s.getData().subscribe(res=>{
      this.about.set(res.result[0]);
    })
  }

}
