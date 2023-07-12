import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroHomeComponent } from './micro-home/micro-home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './micro.routes';

@NgModule({
  declarations: [MicroHomeComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class MicroModule {}
