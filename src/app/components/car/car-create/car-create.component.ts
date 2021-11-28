import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-car-create',
    templateUrl: './car-create.component.html',
    styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

    createForm!: FormGroup;

    constructor(private router: Router, private carService: CarService, private dialog: MatDialog,
        public dialogRef: MatDialogRef<CarCreateComponent>, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.createForm = this.formBuilder.group({
            modelo: ['', [Validators.required, Validators.minLength(2)]],
            marca: ['', [Validators.required, Validators.minLength(2)]],
            ano: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.min(2000)]],
            valor: ['', [Validators.required]],
            cor: ['', [Validators.required, Validators.minLength(2)]]
        });

    }

    createCar(): void {
        this.carService.create(this.createForm.value).subscribe(() => {
            this.carService.showOkMessage('Veículo Cadastrado com Sucesso')
            this.dialogRef.close();
            this.createForm.reset;
            location.reload();
        })
    }


    cancelCar(): void {
        this.dialogRef.close();
        this.createForm.reset
    }

}
