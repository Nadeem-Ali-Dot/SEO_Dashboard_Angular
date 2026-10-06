import { Component, OnInit, signal } from '@angular/core';
import { Ivehicles } from '../../interface/ivehicles';
import { VehiclesService } from '../../Service/vehicles-service';

@Component({
  selector: 'app-ourservicesection',
  imports: [],
  templateUrl: './ourservicesection.html',
  styleUrl: './ourservicesection.css',
})
export class Ourservicesection  implements OnInit {
 vehicles = signal<Ivehicles []>([]);
  constructor(private t : VehiclesService){}
  ngOnInit(): void {
    this.t.getData().subscribe(res=>{
      console.log(res)
      
      this.vehicles.set(res.result);
    })
  }
}
