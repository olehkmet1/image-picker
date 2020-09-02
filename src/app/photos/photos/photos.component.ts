import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public images = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.images = this.images.concat(this.dataService.getImages());
  }

  onScroll(): void {
      this.getImages();
  }

  trackByFn(index, item): number {
    return index;
  }

}
