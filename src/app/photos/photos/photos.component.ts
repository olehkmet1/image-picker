import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/services/data.service';
import {SharedService} from '../../shared/services/shared.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public images = [];
  public isLoading: boolean;
  public scrollThrottle: number;

  public trackByFn = this.sharedService.trackByFn;

  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.images = this.images.concat(this.dataService.getImages());
  }

  onScroll(): void {
    this.scrollThrottle = Math.floor(200 + Math.random() * (300 + 1 - 200));
    this.isLoading = true;
    this.getImages();
    this.isLoading = false;
  }

}
