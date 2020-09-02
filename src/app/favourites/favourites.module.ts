import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FavoritesComponent} from './favorites/favorites.component';
import { FavouritesRoutingModule } from './favourites-routing.module';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }
