import {Injectable, Inject} from '@angular/core';
import{Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{

  apiKey = 'SwU9o8zJ9EQVyJhWxeqviTo-aWkRQDS5';;
  workoutsUrl = 'https://api.mlab.com/api/1/databases/workoutsapp/collections/workouts';
  url = this.workoutsUrl + '?apiKey=' + this.apiKey;

  constructor(private http: Http){
    console.log('service connected');
  }

  getWorkouts(){

    return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
      .map(response => response.json())

  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(workout), {headers: headers})
      .map(result => result.json());
  }

  deleteWorkout(workoutId){
    return this.http.delete(this.workoutsUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
      .map(response => response.json())
  }



}
