import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div>
      <select (change)="sendCalorieData($event.target.value)" id="calorieSelect">
        <option value="All">View All Meals</option>
        <option value="highCalories">View Meals > 500 calories</option>
        <option value="lowCalories">View Meals < 500 calories</option>
      </select>

      <edit-meal
        [meal]="mealToEdit"
        [showEdit]="showEdit"
      ></edit-meal>

      <div *ngFor="let meal of mealListChild | calorieFilter:caloriesToFilter">
        <hr>
        <h3>{{meal.name}} </h3>
        <h4>{{meal.calories}} calories</h4>
        <p>{{meal.details}}</p>

        <a *ngIf="hideEdit" (click)="displayEdit(meal)">edit</a>
        <a *ngIf="showEdit" (click)="concealEdit(meal)">hide edit form</a>
      </div>
      <hr>
    </div>
  `
})

export class MealListComponent {
  @Input() mealListChild: Meal[];
  @Output() mealListEvent = new EventEmitter();
  public caloriesToFilter: string = "All";
  public showEdit: boolean = false;
  public hideEdit: boolean = true;
  public mealToEdit: Meal;
  sendCalorieData(targetCalories) {
    this.caloriesToFilter = targetCalories;
    console.log(targetCalories);
  }
  displayEdit(meal) {
    this.mealToEdit = meal;
    this.showEdit = true;
    this.hideEdit = false;
  }
  concealEdit(meal) {
    this.mealToEdit = meal;
    this.hideEdit = true;
    this.showEdit = false;
  }
}
