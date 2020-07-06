import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';

import { LazyloadingmoduleRoutingModule } from './lazyloadingmodule-routing.module';
import { LazycomponentComponent } from './lazycomponent/lazycomponent.component';

const appRoutes: Routes=[
  {
    path:'',component:LazycomponentComponent}
]
@NgModule({
  declarations: [LazycomponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    LazyloadingmoduleRoutingModule
  ]
})
export class LazyloadingmoduleModule { }
