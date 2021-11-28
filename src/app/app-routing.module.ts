import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { CarCrudComponent } from './components/view/car-crud/car-crud.component';
import { CarDeleteComponent } from './components/car/car-delete/car-delete.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "cars",
  component: CarCrudComponent
}, {
  path: "cars/delete/:id",
  component: CarDeleteComponent
}, {
  path: "cars/update/:id",
  component: CarUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
