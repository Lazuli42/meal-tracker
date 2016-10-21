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
      <meal-list
        [mealListChild]="mealListMaster"
      ></meal-list>
    </div>
  `
})

export class AppComponent {
  public mealListMaster: Meal[] = [
    new Meal("Breakfast Sandwich", "Eggs and bacon on a bagel", 300)
  ];
  addMeal(newMeal) {
    this.mealListMaster.push(newMeal);
    console.log(this.mealListMaster[0].name);
  }
}
