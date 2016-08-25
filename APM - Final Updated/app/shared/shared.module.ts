import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star.component';

@NgModule({
  imports: [ CommonModule ],
  exports : [
    CommonModule,
    StarComponent
  ],
  declarations: [ StarComponent ],
})
export class SharedModule { }
