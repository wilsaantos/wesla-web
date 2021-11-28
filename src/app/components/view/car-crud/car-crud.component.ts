import { Car } from '../../car/models/car-model';
import { CarService } from '../../car/services/car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CarCreateComponent } from '../../car/car-create/car-create.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-crud',
  templateUrl: './car-crud.component.html',
  styleUrls: ['./car-crud.component.css']
})
export class CarCrudComponent implements OnInit {


  panelOpenState = false;
  baseUrl = 'http://localhost:8080/cars'
  cars!: Car[]
  car: Car = {
    modelo: "",
    marca: "",
    ano: null!,
    valor: null!,
    cor: ""
  }

  constructor(private router: Router, 
    private carService: CarService, 
    public dialog: MatDialog, 
    public http: HttpClient) { }

  ngOnInit(): void {
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open<CarCreateComponent>(CarCreateComponent, {
      width: '600px',
      autoFocus: true,
      closeOnNavigation: true,
    })
  }

  deprecateAll(): void {
    this.carService.read().subscribe(cars => {
      this.cars = cars
      for (const car of cars) {
        if (car.valor > 10000) {
          car.valor = car.valor - (car.valor * 0.02)
          this.carService.patch(car).subscribe(() => { })
        }
      }
      location.reload();

    })

  }

}
