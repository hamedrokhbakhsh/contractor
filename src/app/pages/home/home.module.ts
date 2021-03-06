import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {SharedModule} from '../../shared/shared.module';
import {PersianPipesModule} from 'ngx-persian-pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PersianPipesModule,
        HomePageRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    declarations: [HomePage]
})
export class HomePageModule {}
