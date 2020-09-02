import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotosComponent} from './photos/photos.component';
import {PhotoComponent} from './photo/photo.component';


const routes: Routes = [
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'photos/:id',
    component: PhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
