import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'calorieFilter',
  pure: false
})

export class CalorieFilterPipe implements PipeTransform {
  transform(input: Meal[], targetCalories: string) {
    var output: Meal[] = [];
    console.log(targetCalories);
    if (targetCalories === "highCalories") {
      for(var i=0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (targetCalories === "lowCalories") {
      for(var i=0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
