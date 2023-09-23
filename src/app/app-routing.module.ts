import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiniseComponent } from './components/chinise/chinise.component';
import { DesiComponent } from './components/desi/desi.component';
import { IndianComponent } from './components/indian/indian.component';
import { RussianComponent } from './components/russian/russian.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {path:'chinise',component:ChiniseComponent},
  {path:'desi',component:DesiComponent},
  {path:'indian',component:IndianComponent},
  {path:'russian',component:RussianComponent},
  {path:'',component:IndexComponent},
  {path:'index',redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
