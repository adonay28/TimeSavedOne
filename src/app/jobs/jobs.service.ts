import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JobsService {
  constructor(private http: Http) {

  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  get_worker_activiy(): Observable<any> {
    return this.http.get(`/assets/dummy_data/job_activity.json`)
      .map((response: Response) => <any>response.json())
      .do(data => console.log('All: ' + data))
      .catch(this.handleError);
  }
}