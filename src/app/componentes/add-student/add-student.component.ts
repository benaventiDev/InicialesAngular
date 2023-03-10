import { Component, EventEmitter, Output } from '@angular/core';
import { Estudiante } from 'src/app/Estudiante';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Output() onAddEstudiante: EventEmitter<Estudiante> = new EventEmitter();
  name: string;
  lastname: string;
  edad: number;


  onSubmit(){
    const estudiante: Estudiante = {
      name: this.name,
      lastname: this.lastname,
      edad: this.edad
    }
    this.onAddEstudiante.emit(estudiante);
    this.name = "";
    this.lastname = "";
    this.edad = 0;
  }
}
