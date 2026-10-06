import { Component, OnInit, signal } from '@angular/core';
import { IContact } from '../../interface/icontact';
import { ContactService } from '../../Service/contact-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-contactsection',
  imports: [],
  templateUrl: './contactsection.html',
  styleUrl: './contactsection.css',
})
export class Contactsection implements OnInit {
contact=signal<IContact | null>(null)
mapHtml:SafeHtml="";
constructor(private s : ContactService,private sanitizer: DomSanitizer){}
ngOnInit(): void {
  this.s.GetData().subscribe(res=>{
    this.contact.set(res.result[0]);
    this.mapHtml = this.sanitizer.bypassSecurityTrustHtml(
  res.result[0].googleMapEmbedCode);
  })
 
}
}
