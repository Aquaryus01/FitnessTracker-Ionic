import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/commons/settings.service';
import { Meal } from '../../models/meal';
import { MealService } from '../../services/meal.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-recipe-meal',
  templateUrl: './recipe-meal.component.html',
  styleUrls: ['./recipe-meal.component.scss'],
})
export class RecipeMealComponent implements OnInit {

  meals: Meal[] = []
  inputMeal: Meal;
  searchFilter: string = '';
  indexPaginator: number = 0;

  openMeal(meal: Meal){
    this.inputMeal = meal;
  }

  constructor(private mealService: MealService,
              private settingService: SettingsService,
              private websocketService: WebsocketService,
              private router: Router) {
  }

  ngOnInit(){
    this.mealService.getIntervalMeals(this.indexPaginator).subscribe((meals: Meal[]) => {
      console.log(meals);
      this.meals = meals;
    })

    this.websocketService.getMessage().subscribe((res) => {
      this.indexPaginator = 0;
      this.mealService.getIntervalMeals(this.indexPaginator).subscribe((meals: Meal[]) => {
        this.meals = meals;
      })
    }) 
  }

  deleteMeal(id: number){
    this.mealService.deleteMeals(id).subscribe(res => {
      this.meals.filter((meal: Meal)=> meal.id != res["meal_id"]);
      console.log(res);
    })
  }

  changeSearchFilter(event){
    console.log(event)
    this.searchFilter = event.detail.value;
  }

  removeToken(){
    this.settingService.removeToken();
    this.router.navigate(['/login']);
  }

  loadData(event){
    this.mealService.getIntervalMeals(this.indexPaginator).subscribe((meals: Meal[]) => {
      meals.forEach(meal => {
        this.meals.push(meal);
      });

      this.indexPaginator += 5;
      event.target.complete();
    })
  }

}
