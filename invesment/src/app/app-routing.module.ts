import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VxusComponent } from './vxus/vxus.component';

const routes: Routes = [
   { path: '', component: VxusComponent }
  // { path: 'performance', component: PerformanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
