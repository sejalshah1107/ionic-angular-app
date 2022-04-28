import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Bugs } from './bugs.model';
import { BugsService } from './bugs.service';
import { ModalBugsComponent } from './modal-bugs/modal-bugs.component';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.page.html',
  styleUrls: ['./bugs.page.scss'],
})
export class BugsPage implements OnDestroy, OnInit{
  public description: string;
  public priority: string;
  public area: string;
  public filedby: string;
  public bugid: number;

  private _subBugs: Subscription;

  bugs: Bugs[];
  public searchText = "";

  constructor(private svcBugs: BugsService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this._subBugs = this.svcBugs.bugs.subscribe(res =>{
      this.bugs = res;
    });
    console.log(this.bugs);
  }

  ngOnDestroy(): void {
    if (this._subBugs) this._subBugs.unsubscribe();
  }

  searchBugs(event: any) {
    this.searchText = event.target.value.toLowerCase();
    console.log(this.searchText);
  }

  public async openEditModal(bug){
    this.description = bug.description;
    this.area = bug.area;
    this.priority = bug.priority;
    this.filedby = bug.filed_by;
    this.bugid=bug.id;

    console.log(bug.filed_by);

    console.log(bug);
    const modalPage = await this.modalCtrl.create({
      component: ModalBugsComponent,
      componentProps:{id : bug.id,
                      description:bug.description,
                      priority:bug.priority,
                      area:bug.area,
                      filedby:bug.filedby}
  });
   modalPage.present();
  }
  public async openModal(){
      const modalPage = await this.modalCtrl.create({
        component:ModalBugsComponent
      });
       modalPage.present();
  }
}

