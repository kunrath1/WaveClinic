import { Component } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
