import { Component, OnInit, signal } from '@angular/core';
import { Heresection } from '../heresection/heresection';
import { Aboutsection } from '../aboutsection/aboutsection';
import { Ourservicesection } from '../ourservicesection/ourservicesection';
import { Fleetsection } from '../fleetsection/fleetsection';
import { Gallerysection } from '../gallerysection/gallerysection';
import { Contactsection } from '../contactsection/contactsection';
import { Testimonialssection } from '../testimonialssection/testimonialssection';


@Component({
  selector: 'app-homepage',
  imports: [Heresection, Aboutsection, Ourservicesection, Fleetsection, Gallerysection, Contactsection, Testimonialssection],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage  {


}

