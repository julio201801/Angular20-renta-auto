import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImagenModal } from '../../imagen-modal/imagen-modal';

@Component({
  selector: 'app-inicio',
  imports: [MatToolbarModule,MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
matcarItems = [
  {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-1.jpg'
  },
   {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-4.jpg'
  },
    {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-6.jpg'
  },
    {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-7.jpg'
  },
    {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-9.jpg'
  },
    {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-10.jpg'
  },
   {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-23.jpg'
  },
  {
    name: 'Ford Mustang',
    description: 'El icónico muscle car americano con un diseño agresivo y potente motor.',
    imageUrl: 'assets/images/Ford-Mustang-24.jpg'
  }
];
constructor(private dialog: MatDialog) {}

abrirImagen(url: string, descripcion: string) {
  this.dialog.open(ImagenModal, {
    data: { url, descripcion },
    width: '90vw',
    maxHeight: '90vh'
  });
}

}
