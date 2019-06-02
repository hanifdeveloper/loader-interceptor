import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatTableModule],
})
export class MaterialModule { }
