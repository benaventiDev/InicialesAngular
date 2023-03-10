import { Component, Input } from '@angular/core';
import { Estudiante } from 'src/app/Estudiante';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {
  @Input() estudiante: Estudiante;
}
