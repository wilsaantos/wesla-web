import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Car } from '../models/car-model';
import { Observable } from 'rxjs';
import { EnvironmentService } from './enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private env: EnvironmentService) { }

  

  showOkMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'msg-success'
    })
  }

  showErrorMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: 'msg-error'
    })
    console.error(msg)
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.env.getHostURL()}/cars/new`, car)
  }

  createWithForm(createForm: FormGroup): Observable<FormGroup>{
    return this.http.post<FormGroup>(`${this.env.getHostURL()}/cars/new`, createForm)
  }

  read(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.env.getHostURL()}/cars`)
  }

  readById(id: string): Observable<Car> {
    const url = `${this.env.getHostURL()}/cars/${id}`
    return this.http.get<Car>(url)
  }

  patch(car: Car): Observable<any>{
    const url = `${this.env.getHostURL()}/cars/edit/${car.id}`
    return this.http.patch(url, car)
  }



  update(car: Car): Observable<Car> {
    const url = `${this.env.getHostURL()}/cars/edit/${car.id}`
    return this.http.put<Car>(url, car)
  }

  delete(id: number): Observable<Car> {
    const url = `${this.env.getHostURL()}/cars/delete/${id}`
    return this.http.delete<Car>(url)
  }
}





