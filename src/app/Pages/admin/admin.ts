import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  imports: [ DatePipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
sidebarOpen = true;
nowdate : Date=new Date(); 
  activeMenu = 'Dashboard';

  menuItems = [
    {
      title: 'Dashboard',
      icon: '⌂',
      url:''
    },
    {
      title: 'SEO Settings',
      icon: '⌕',
      url:'seo'
    },
    {
      title: 'Schema Management',
      icon: '</>',
       url:'schema'
    },
    {
      title: 'Hero Section',
      icon: '⌂',
      url:'hero'
    },
    {
      title: 'About Us',
      icon: 'ⓘ',
       url:'about'
    },
    {
      title: 'Vehicles',
      icon: '▱',
       url:'vehicles'
    },
    {
      title: 'Occasions',
      icon: '□',
       url:'occasions'
    },
    {
      title: 'Testimonials',
      icon: '▢',
       url:'testimonials'
    },
    {
      title: 'Gallery',
      icon: '▧',
       url:'gallery'
    },
    {
      title: 'Contact Info',
      icon: '✉',
       url:'contact'
    }
  ];

  selectMenu(menu: string) {
    this.activeMenu = menu;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    console.log('Logout clicked');
  }

}
