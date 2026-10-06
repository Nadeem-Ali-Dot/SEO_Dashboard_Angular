import { Component, OnInit, signal } from '@angular/core';
import { IGallery } from '../../interface/igallery';
import { GalleryService } from '../../Service/gallery-service';

@Component({
  selector: 'app-gallerysection',
  imports: [],
  templateUrl: './gallerysection.html',
  styleUrl: './gallerysection.css',
})
export class Gallerysection implements OnInit {
 gallary = signal<IGallery[]>([]);
  constructor(private t : GalleryService){}
  ngOnInit(): void {
    this.t.getData().subscribe(res=>{
      console.log(res)
      
      this.gallary.set(res.result);
    })
  }
}
