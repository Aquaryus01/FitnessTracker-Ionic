import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meal } from 'src/app/models/Meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit, OnChanges {
  @Input() inputMeal: Meal;
  meal: Meal = {
    id: null,
    name: '',
    calorie: null,
    ingredients: '',
  };

  constructor(private mealService: MealService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.inputMeal);
    if (this.inputMeal){
      this.meal.id = this.inputMeal.id;
      this.meal.name = this.inputMeal.name;
      this.meal.calorie = this.inputMeal.calorie;
      this.meal.ingredients = this.inputMeal.ingredients;
    }
  }

  clearMeal(): void{
    this.meal = {
      id: null,
      name: '',
      calorie: null,
      ingredients: '',
    };

    this.inputMeal = undefined;
  }

  updateMeal(){
    this.inputMeal = this.meal;
    console.log(this.inputMeal);
  }

  addMeal(){}

}
