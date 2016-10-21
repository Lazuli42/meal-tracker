import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="showEdit">
    <div class="form-group">
    <label>New Meal Name:</label>
    <input #mealName placeholder="{{meal.name}}" class="form-control">

    <label>New Details:</label>
    <input #mealDetails placeholder="{{meal.details}}" class="form-control">

    <label>New Calories:</label>
    <input #mealCalories placeholder="{{meal.calories}}" class="form-control" type="number">
    </div>

    <button (click)="editMeal(mealName.value, mealDetails.value, mealCalories.value)" class="btn" type="submit">Submit</button>
  </div>
  `
})
export class EditMealComponent {
@Input() meal: Meal;
@Input() showEdit: boolean;

editMeal(mealName, mealDetails, mealCalories) {
  if (mealName != "") {
    this.meal.name = mealName;
  }
  if (mealDetails != "") {
    this.meal.details = mealDetails;
  }
  if (mealCalories != "") {
    this.meal.calories = mealCalories;
  }
  this.showEdit = false;
}
}
