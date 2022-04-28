import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbugsPageRoutingModule } from './addbugs-routing.module';

import { AddbugsPage } from './addbugs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbugsPageRoutingModule
  ],
  declarations: [AddbugsPage]
})
export class AddbugsPageModule {}
