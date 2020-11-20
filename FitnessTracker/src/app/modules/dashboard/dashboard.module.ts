import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeMealComponent } from './pages/recipe-meal/recipe-meal.component';
import { MealComponent } from './components/meal/meal.component';
import { environment } from 'src/environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

const config: SocketIoConfig = { url: environment.urlApi, options: {} };

@NgModule({
  declarations: [RecipeMealComponent, MealComponent],
  imports: [
    PipesModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ]
})
export class DashboardModule { }
