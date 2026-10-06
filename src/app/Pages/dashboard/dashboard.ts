import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html'
})
export class Dashboard {

  
  stats = [
    {
      title: 'Total Vehicles',
      count: 5,
      icon: '🚐',
      bg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    {
      title: 'Total Occasions',
      count: 4,
      icon: '▣',
      bg: 'bg-green-100',
      text: 'text-green-600'
    },
    {
      title: 'Testimonials',
      count: 4,
      icon: '▢',
      bg: 'bg-purple-100',
      text: 'text-purple-600'
    },
    {
      title: 'Gallery Images',
      count: 5,
      icon: '▧',
      bg: 'bg-orange-100',
      text: 'text-orange-600'
    },
    {
      title: 'Total Users',
      count: 3,
      icon: '♧',
      bg: 'bg-pink-100',
      text: 'text-pink-600'
    }
  ];

  quickActions = [
    {
      title: 'Add Vehicle',
      description: 'Add a new vehicle',
      icon: '🚐',
      bg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    {
      title: 'Add Occasion',
      description: 'Create an occasion',
      icon: '📅',
      bg: 'bg-purple-100',
      text: 'text-purple-600'
    },
    {
      title: 'Add Testimonial',
      description: 'Add customer review',
      icon: '💬',
      bg: 'bg-green-100',
      text: 'text-green-600'
    },
    {
      title: 'Upload Gallery',
      description: 'Upload new images',
      icon: '🖼️',
      bg: 'bg-orange-100',
      text: 'text-orange-600'
    }
  ];

  
}