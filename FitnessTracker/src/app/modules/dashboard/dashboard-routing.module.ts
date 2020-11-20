import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/commons/auth.guard';
import { RecipeMealComponent } from './pages/recipe-meal/recipe-meal.component';

const routes: Routes = [{path: "", component: RecipeMealComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
