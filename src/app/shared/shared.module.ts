import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  exports: [
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ]
})

export class SharedModule {
}
