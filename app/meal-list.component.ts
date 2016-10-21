import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div>
      <select (change)="sendCalorieData($event.target.value)">
        <option value="All">View All Meals</option>
        <option value="highCalories">View Meals > 500 calories</option>
        <option value="lowCalories">View Meals < 500 calories</option>
      </select>

      <div *ngFor="let meal of mealListChild | calorieFilter:caloriesToFilter">
        <hr>
        <h3>{{meal.name}}</h3>
        <h4>{{meal.calories}} calories</h4>
        <p>{{meal.details}}</p>
      </div>
      <hr>
    </div>
  `
})

export class MealListComponent {
  @Input() mealListChild: Meal[];
  @Output() mealListEvent = new EventEmitter();
  public caloriesToFilter: string = "All";
  sendCalorieData(targetCalories) {
    this.caloriesToFilter = targetCalories;
    console.log(targetCalories);
  }
}
