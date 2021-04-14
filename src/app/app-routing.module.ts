import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: '', component: CategoriesFeaturedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
