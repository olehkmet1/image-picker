import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FavoritesComponent} from './favorites/favorites.component';


const routes: Routes = [
  {
    path: 'favourites',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FavouritesRoutingModule { }
