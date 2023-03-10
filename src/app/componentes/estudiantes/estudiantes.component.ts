import { Component } from '@angular/core';
import { Estudiante } from 'src/app/Estudiante';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  estudiantes: Estudiante[] = [];
  constructor(private dataService: DataService){}

  ngOnInit(): void{
    this.dataService.getEstudiantes().subscribe((ests)=>{this.estudiantes = ests;});
    
  }


  addEstudiante(estudiante: Estudiante){
    this.dataService.addEstudiante(estudiante).subscribe((ests)=>{this.estudiantes = ests;});
  }

}
