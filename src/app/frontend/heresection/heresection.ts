import { Component, OnInit, signal } from '@angular/core';
import { IHero } from '../../interface/ihero';
import { HereService } from '../../Service/here-service';

@Component({
  selector: 'app-heresection',
  imports: [],
  templateUrl: './heresection.html',
  styleUrl: './heresection.css',
})
export class Heresection implements OnInit {

  hero = signal<IHero | null>(null);
  constructor(private t : HereService){}
  ngOnInit(): void {
    this.t.GetData().subscribe(res=>{
      console.log(res)
      
      this.hero.set(res.result[0]);
    })
  }
}
