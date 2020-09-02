import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  public imageUrl: string;
  public index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getImageId();
    this.getImage(this.index);
  }

  getImageId(): void {
    this.route.params.subscribe(params => {
      this.index = +params.id;
    });
  }

  getImage(index): void {
    this.imageUrl = this.dataService.getPhoto(index);
  }

  removeFromFavourites(index): void {
    this.dataService.removeFromFavourites(index);
    this.router.navigate(['/favourites']);
  }

}
