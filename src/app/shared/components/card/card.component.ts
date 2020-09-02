import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../../core/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(
    private dataService: DataService
  ) {
  }

  @Input() url: string;
  @Input() buttonActive: boolean;
  @Input() maxWidth: number;

  addToFav(url): void {
    this.dataService.addToFavourites(url);
  }
}
