import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { RegisterComponent } from './register/register.component';
import { ToBuyListComponent } from './to-buy-list/to-buy-list.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import { ListproductavechttpComponent } from './listproductavechttp/listproductavechttp.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductbyidComponent } from './productbyid/productbyid.component';
import {product} from "./core/models/product";
import { AppartementsComponent } from './appartements/appartements.component';
import { AppartementbyresidenceComponent } from './appartementbyresidence/appartementbyresidence.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductbyidComponent,
    ResidencesComponent,
    NavbarComponent,
    WishListComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    RegisterComponent,
    ToBuyListComponent,
    ListproductavechttpComponent,
    EditProductComponent,
    ProductbyidComponent,
    AppartementsComponent,
    AppartementbyresidenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
