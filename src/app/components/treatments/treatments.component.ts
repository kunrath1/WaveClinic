import { Component } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {

}
