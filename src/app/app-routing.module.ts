import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {
      path:'',component:HomeComponent
    },
    {
      path:'rating',component:RatingComponent,
    },
    {
      path:'gioi-thieu',component:AboutusComponent,
    },
    {
      path:'list',component:ListComponent,
    }
  ]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
