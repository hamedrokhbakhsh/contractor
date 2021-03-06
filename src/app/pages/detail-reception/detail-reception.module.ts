import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailReceptionPageRoutingModule } from './detail-reception-routing.module';

import { DetailReceptionPage } from './detail-reception.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailReceptionPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailReceptionPage]
})
export class DetailReceptionPageModule {}
