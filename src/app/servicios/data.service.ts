import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../Estudiante';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000'
  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    const url = `${this.apiUrl}/estudiantes`;
    const est = this.http.get<Estudiante[]>(url);
    console.log(est);
    return est;
  }

  addEstudiante(estudiante: Estudiante): Observable<Estudiante[]>{
    return this.http.post<Estudiante[]>(this.apiUrl, estudiante, httpOptions);
  }

}
