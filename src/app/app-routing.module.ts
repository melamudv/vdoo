import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhonesComponent} from './phones/phones.component';
import {CarsComponent} from './cars/cars.component';
import {LaptopsComponent} from './laptops/laptops.component';
import {AppComponent} from './app.component';
import {AllComponent} from './all/all.component';

const routes: Routes = [
  { path: 'all', component: AllComponent },
  { path: '',   redirectTo: '/all', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
