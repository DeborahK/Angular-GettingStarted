import { NgModule }  from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star.component';

@NgModule({
  imports: [ CommonModule, FormsModule],
  exports : [CommonModule, FormsModule, StarComponent],
  declarations: [ StarComponent ],
})
export class SharedModule { }
