import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car-model';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  createForm!: FormGroup;
  car!: Car
  id: string

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.carService.readById(id).subscribe( car => {
      this.car = car
    }),
      this.createForm = this.formBuilder.group({
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      marca: ['', [Validators.required, Validators.minLength(2)]],
      ano: [null, [Validators.required, Validators.maxLength(2), Validators.minLength(4)]],
      valor: [null, [Validators.required, Validators.minLength(2)]],
      cor: ['', [Validators.required, Validators.minLength(2)]]
    });
    }


  deleteCar(): void {
    alert('Realmente deseja excluir?')
    this.carService.delete(this.car.id).subscribe(() => {
      this.carService.showOkMessage('Produto Deletado')
      this.router.navigate(['/cars'])
    })

  }

  cancelCar(): void {
    this.router.navigate(['/cars'])
  }
}
