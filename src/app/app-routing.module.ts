import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { RegisterComponent } from './register/register.component';
import {ProductbyidComponent} from "./productbyid/productbyid.component";
import {AppartementsComponent} from "./appartements/appartements.component";
import {AppartementbyresidenceComponent} from "./appartementbyresidence/appartementbyresidence.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  {
    path: 'residences',
    component: ResidencesComponent
  },
  {path:'residences/:id',component:ResidenceDetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'productByID/:id',component:ProductbyidComponent},
  {path:'appartements',component:AppartementsComponent},
  {path:'appartemntsbyresidence/:id',component:AppartementbyresidenceComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
