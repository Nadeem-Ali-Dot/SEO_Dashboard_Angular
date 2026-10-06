import { Component, OnInit, signal } from '@angular/core';
import { Ioccasions } from '../../interface/ioccasions';
import { OccasionsService } from '../../Service/occasions-service';

@Component({
  selector: 'app-fleetsection',
  imports: [],
  templateUrl: './fleetsection.html',
  styleUrl: './fleetsection.css',
})
export class Fleetsection implements OnInit {
 occasions = signal<Ioccasions []>([]);
  constructor(private t : OccasionsService){}
  ngOnInit(): void {
    this.t.GetData().subscribe(res=>{
      console.log(res)
      
      this.occasions.set(res.result);
    })
  }
}
