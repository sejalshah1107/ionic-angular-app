import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Bugs } from '../bugs.model';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'app-modal-bugs',
  templateUrl: './modal-bugs.component.html',
  styleUrls: ['./modal-bugs.component.scss'],
})
export class ModalBugsComponent {
  // public description: string;
  // public priority: string;
  // public area: string;
  // public filedby: string;
  // public bugid: number;

  public filedbylist = ['Hetul', 'VivekAnand', 'Sejal'];
  public arealist = ['middletier', 'api', 'db', 'client'];

  // public bugs: Bugs[];
  // private _bugid: number;

  constructor(private modalCtrl: ModalController,
    private bugService: BugsService) { }


  dismisModal() {
    this.modalCtrl.dismiss();
  }
  submitdata(formValue: any) {
    console.log(formValue);
    this.bugService.addBugs(formValue);
  }
}
