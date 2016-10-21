import { Component } from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-create
        (newMealSender)="addMeal($event)"
      ></meal-create>
    </div>
  `
})

export class AppComponent {
  public mealListMaster: Meal[] = [];
  addMeal(newMeal) {
    this.mealListMaster.push(newMeal);
    console.log(this.mealListMaster[0].name);
  }
}
