import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-imagen-modal',
  imports: [MatDialogModule],
  templateUrl: './imagen-modal.html',
  styleUrl: './imagen-modal.css'
})
export class ImagenModal {
constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string; descripcion: string }) {}

}
