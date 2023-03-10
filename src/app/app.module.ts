import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './componentes/estudiante/estudiante.component';
import { EstudiantesComponent } from './componentes/estudiantes/estudiantes.component';
import { AddStudentComponent } from './componentes/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    EstudiantesComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
