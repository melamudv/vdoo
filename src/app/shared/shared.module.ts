import { NgModule } from '@angular/core';

import {ArraySortPipe} from './sortBy.pipe';

@NgModule({
    declarations: [ ArraySortPipe ],
    exports: [ ArraySortPipe ]
})
export class SharedModule { }
