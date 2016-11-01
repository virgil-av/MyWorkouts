import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  result;

  constructor(public navCtrl: NavController,
              private workoutService: WorkoutService
  ) {

  }

  onSubmit(form){
    this.workoutService.addWorkout(form.value)
      .subscribe(
        data => {this.result = data},
        err => console.log(err),
        () => console.log('Workout added')
      );

    this.navCtrl.setRoot(WorkoutsPage)
  }

}
