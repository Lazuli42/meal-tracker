import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let meal of mealListChild">
      <hr>
      <h4>{{meal.name}}</h4>
      <h5>{{meal.calories}}</h5> calories
      <p>{{meal.details}}</p>
    </div>
    <hr>
  `
})

export class MealListComponent {
  @Input() mealListChild: Meal[];
}
