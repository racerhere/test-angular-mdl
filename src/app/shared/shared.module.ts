import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlModule } from '@angular-mdl/core';
import { MdlExpansionPanelModule } from '@angular-mdl/expansion-panel';
import { MdlPopoverModule } from '@angular-mdl/popover';
import { MdlSelectModule } from '@angular-mdl/select';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdlModule,
    MdlExpansionPanelModule,
    MdlPopoverModule,
    MdlSelectModule
  ]
})
export class SharedModule { }
