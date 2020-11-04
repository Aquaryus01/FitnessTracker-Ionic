import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/Meal';
import { MealService } from '../services/meal.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
   meals: Meal[] = [{
    id: 0,
    name: "Ciorba de vacuta",
    calorie: 1440,
    ingredients: "apa, carne de vacuta, patrunjel",
  },
  {
    id: 0,
    name: "Pizza la vatra",
    calorie: 500,
    ingredients: "faina, salam, cascaval, sos rosii, porumb, branza feta",
  },
  {
    id: 0,
    name: "Ciorba de vacuta",
    calorie: 1440,
    ingredients: "apa, carne de vacuta, patrunjel",
  }];
  inputMeal: Meal;
  constructor(private mealService: MealService) {
  }

  ngOnInit(){
  }

  openMeal(meal: Meal){
    this.inputMeal = meal;
  }
}
