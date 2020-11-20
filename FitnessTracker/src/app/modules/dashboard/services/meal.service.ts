import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/commons/settings.service';
import { environment } from 'src/environments/environment';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})



export class MealService {
  
  constructor(private http: HttpClient,
              private settingService: SettingsService) { }

   
  private getHeader(): HttpHeaders{
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.settingService.getToken()
  });
  }

  getMeals(): Observable<Meal[]>{
    return this.http.get<Meal[]>(environment.urlApi + "/meals", { headers: this.getHeader() });
  }

  getIntervalMeals(index: number){
    return this.http.get<Meal[]>(environment.urlApi + "/meals/" + index, { headers: this.getHeader() });
  }

  deleteMeals(id: number){
    return this.http.delete(environment.urlApi + "/meal/" + id, { headers: this.getHeader() });
  }

  updateMeal(meal: Meal){
    return this.http.put(environment.urlApi + "/meal/" + meal.id, meal, { headers: this.getHeader() });
  }

  addMeal(meal: Meal){
    return this.http.post(environment.urlApi + "/meal", meal, { headers: this.getHeader() });
  }
}
