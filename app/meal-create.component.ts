import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-create',
  template: `
    <div class="form-group">
    <label>Meal:</label>
    <input #mealName class="form-control">

    <label>Details:</label>
    <input #mealDetails class="form-control">

    <label>Calories:</label>
    <input #mealCalories class="form-control" type="number">
    </div>

    <button (click)="createMeal(mealName.value, mealDetails.value, mealCalories.value)" class="btn" type="submit">Submit</button>
  `
})

export class MealCreateComponent {
  @Output() newMealSender = new EventEmitter();
  createMeal(mealName, mealDetails, mealCalories) {
    var output = [];
    var newMeal = new Meal (mealName, mealDetails, mealCalories);
    this.newMealSender.emit(newMeal);
  }
}
