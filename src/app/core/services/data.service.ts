import {Injectable} from '@angular/core';
import * as faker from 'faker';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private favorites: string[] = [];

  getImages(): string[] {
    const images = [];

    for (let i = 0; i < 10; i++) {
      images.push(faker.random.image());
    }

    return images;
  }

  public getFavourites(): string[] {
    const savedFavourites = localStorage.getItem('favorites');

    return JSON.parse(savedFavourites);
  }

  public getPhoto(index): string {
    const savedFavourites = localStorage.getItem('favorites');

    return JSON.parse(savedFavourites)[index];
  }

  public addToFavourites(url): void {
    this.favorites.push(url);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  public removeFromFavourites(index): void {
    this.favorites = this.getFavourites();
    this.favorites.splice(index, 1);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
