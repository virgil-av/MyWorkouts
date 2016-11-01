import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorkoutsPage} from "../workouts/workouts";
import {WorkoutService} from "../../app/services/workout.service";

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
  workout;
  result;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private workoutService: WorkoutService
  ) {

    this.workout = this.navParams.get('workout')

  }


  deleteWorkout(workoutId){
    this.workoutService.deleteWorkout(workoutId)
      .subscribe(
        data => {this.result = data},
        err => console.log(err),
        () => console.log('Workout deleted')
      );

    this.navCtrl.setRoot(WorkoutsPage)

  }

}
