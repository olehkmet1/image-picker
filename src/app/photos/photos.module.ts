import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PhotosComponent} from './photos/photos.component';
import {PhotoComponent} from './photo/photo.component';
import {PhotosRoutingModule} from './photos-routing.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    InfiniteScrollModule,
    SharedModule
  ]
})
export class PhotosModule {
}
