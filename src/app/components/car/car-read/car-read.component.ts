import { Car } from '../models/car-model';
import { CarService } from '../services/car.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {

  cars!: Car[]
  carAtCard: Car
  displayedColumns = ['modelo', 'marca', 'valor', 'actions']
  showCarAtCard: Boolean;

  constructor(public carService: CarService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.carService.read().subscribe(cars => {
      this.cars = cars
      if (this.cars.length === 0) {
        this.showCarAtCard = false
      } else {
        this.carAtCard = this.cars[0]
        this.showCarAtCard = true
      }
    })
  }

  getCarId(id) {
    this.carAtCard = this.cars.find(element => element.id === id)
  }

  deprecateOne(id) {
    const deprecated = this.cars.find(element => element.id === id)
    if (deprecated.valor > 10000) {
      deprecated.valor = deprecated.valor - (deprecated.valor * 0.02)
      this.carService.patch(deprecated).subscribe(() => { })
    } else {
      this.carService.showErrorMessage("Carros com valor igual ou inferior a R$ 10.000 não serão depreciados.")
    }
  }
}