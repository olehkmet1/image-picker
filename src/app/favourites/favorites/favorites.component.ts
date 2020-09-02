import { Component, OnInit } from '@angular/core';
import {DataService} from '../../core/services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favourites = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites(): void {
    this.favourites = this.dataService.getFavourites();
  }

}
