import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bugs } from './bugs.model';

@Injectable({
  providedIn: 'root'
})
export class BugsService {
  public result: any;
  public errorMessage: string;



  httpHeader = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  private _bugs: BehaviorSubject<Bugs[]> = new BehaviorSubject<Bugs[]>(null);

  // private _bugs: BehaviorSubject<Bugs[]> =
  //   new BehaviorSubject<Bugs[]>([
  //     new Bugs(1,'Bug Test 1','Low','client','Hetul','2022-02-25 10:00:00','Fixed','hetul','2022-02-25 10:00:00',true),
  //     new Bugs(
  //         2,
  //         'Bug Test 2',
  //         'High',
  //         'client',
  //         'Hetul',
  //         '2022-02-25 10:00:00',
  //         'Fixed',
  //         'hetul',
  //         '2022-02-25 10:00:00',
  //         true
  //     ),
  //   ]);


  constructor(private http: HttpClient) {
    const userUri = 'https://localhost:443/api/c_bugtracker.php';
    this.http.get<Bugs[]>(userUri).subscribe(bs => this._bugs.next(bs));
  }

  get bugs() {
    return this._bugs.asObservable();
  }

  // getBugs<Bugs[]>(){
  //   new Bugs[
  //      1,
  //     'Test 1',
  //     'Low',
  //     'client',
  //     'Hetul',
  //     '2022-02-25 10:00:00',
  //     'Fixed',
  //     'hetul',
  //     '2022-02-25 10:00:00',
  //     true
  //   ],



  // }
  fetchBugs() {
    const userUri = 'https://localhost:443/api/c_bugtracker.php';
    return this.http.get<Bugs>(userUri).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }
  addBugs(postData) {
    const userUri = 'https://localhost:443/api/c_bugtrackerpost.php';
    console.log(userUri);
    return (this.http.post<any>(userUri, postData, this.httpHeader).subscribe({
      next: data => {
        this.result = data;
        console.log(this.result);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error.message);
      }
    })
    );
  }
}
