import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuletaComponent } from './components/ruleta/ruleta.component';
import { BoxesComponent } from './components/boxes/boxes.component';

const routes: Routes = [
  {
    path:'ruleta',
    component: RuletaComponent,
  },
  {
    path:'box',
    component: BoxesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
