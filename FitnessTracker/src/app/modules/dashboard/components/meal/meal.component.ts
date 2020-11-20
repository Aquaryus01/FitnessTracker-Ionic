import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
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
    if (this.inputMeal){
      console.log("da")
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
    this.mealService.updateMeal(this.meal).subscribe(res => {
      console.log(res);
    });
  }

  addMeal(){
    this.mealService.addMeal(this.meal).subscribe(res => {
      console.log(res);
    });
  }

}
