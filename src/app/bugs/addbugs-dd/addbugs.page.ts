import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Bugs } from '../bugs.model';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'app-addbugs',
  templateUrl: './addbugs.page.html',
  styleUrls: ['./addbugs.page.scss'],
})
export class AddbugsPage implements OnInit {
  public description: string;
  public priority: string;
  public area: string;
  public filedby: string;

  public filedbylist = ['Hetul', 'VivekAnand', 'Sejal'];
  public arealist = ['middletier', 'api', 'db', 'client'];

  public bugs: Bugs[];
  private _bugid: number;

  constructor(private bugService: BugsService,
    private _svcActivatedRoute: ActivatedRoute,
    private _svcRouter: Router) { }

  ngOnInit() {
    this._svcActivatedRoute.paramMap.subscribe((pid) => {
      this._bugid = +pid.get('id');
    });

    this.bugService.bugs.subscribe(res => {
      this.bugs = res;

      if (this.bugs) {
        console.log(this.bugs);
        for (const x of this.bugs) {
          if (x.id === this._bugid) {
            this.description = x.description;
            this.area = x.area;
            this.priority = x.priority;
            this.filedby = x.filedby;
          }
        }
        console.log(this.priority);
      }
      // if (this.bugs) {
      //   for (let i = 0; i < this.bugs.length; i++) {
      //     if (this._bugid === this.bugs[i].id) {
      //         console.log(this._bugs.id);
      //     }
      //   }
      // }

    });
  }

  submitdata(formValue: any) {
    console.log(formValue);
    const message = this.bugService.addBugs(formValue);
    console.log(message);
  }
}
