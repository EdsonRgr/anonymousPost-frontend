import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'index', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
