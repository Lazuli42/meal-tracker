import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealCreateComponent }   from './meal-create.component';
import { MealListComponent }   from './meal-list.component';
import { CalorieFilterPipe }   from './calorieFilter.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    MealCreateComponent,
    MealListComponent,
    CalorieFilterPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
