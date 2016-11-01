import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WorkoutsPage} from "../pages/workouts/workouts";
import {AddWorkoutPage} from "../pages/add-workout/add-workout";
import {WorkoutService} from "./services/workout.service";
import {WorkoutDetailsPage} from "../pages/workout-details/workout-details";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WorkoutDetailsPage,
    HomePage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WorkoutDetailsPage,
    HomePage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutPage,
  ],
  providers: [WorkoutService]
})
export class AppModule {}
