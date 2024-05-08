import { Component } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

}
