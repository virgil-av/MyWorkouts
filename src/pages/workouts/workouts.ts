import {Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutDetailsPage} from "../workout-details/workout-details";

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit{
  workouts


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private workoutService: WorkoutService) {

    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts)


  }

  ngOnInit(){
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts)
  }

  workoutSelected(event, workout) {
    console.log(workout)
    this.navCtrl.push(WorkoutDetailsPage,{
      workout: workout
    })

  }

}
