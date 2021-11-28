import { Car } from '../models/car-model';
import { CarService } from '../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car: Car

  constructor(private router: Router, private carService: CarService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.carService.readById(id).subscribe(car => {
      this.car = car
    });


  }

  updateCar(): void {
    if (this.car.ano > 1999 && this.car.ano < 2025) {
    this.carService.update(this.car).subscribe(() => {
      this.carService.showOkMessage('Veículo Alterado Com Sucesso')
      this.router.navigate(['/cars'])
    })
  }
  }

  cancelCar(): void {
    this.router.navigate(['/cars'])
  }
}
