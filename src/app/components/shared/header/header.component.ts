import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/home' },
    { label: 'Procedimentos', routerLink: '/treatments' },
    { label: 'Agendamentos', routerLink: '/contact' },
    { label: 'Sobre', routerLink: '/about' },
    { label: 'Depoimentos', routerLink: '/testimonials' },
    // Adicione mais itens conforme necessário
  ];
  
}
