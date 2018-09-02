
import { Component, ViewChild, OnInit } from '@angular/core';
import { DogsService } from './shared/services/dogs.service';
import { filter, map, tap } from 'rxjs/operators';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';

interface DogsResponseType {
  status: String;
  message: String[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: String = 'Dogs Database';
  dogs: String[];
  images: String[];
  selected: String;

  @ViewChild(DogsListComponent)
  private dogsListComp: DogsListComponent;

  constructor(private dogsService: DogsService) {
  }

  ngOnInit() {
    this.createDogsListAndGallery('');
  }

  createDogsListAndGallery(filter) {
    this.dogsService.getListOfDogBreeds()
      .pipe(
      map((x: DogsResponseType) => x.message.filter(x => x.includes(filter))),
      tap(x => console.log(x))
      )
      .subscribe((data: String[]) => {
        this.dogs = data;
        this.selected = this.dogs[0];
        this.dogsService.getBreedImages(this.dogs[0])
          .subscribe((data: DogsResponseType) => {
            this.images = data.message;
          });
      },
      (err) => {
        console.log('error', err);
      });
  }
  dogSelected(breed) {
    this.selected = breed;
    this.dogsService.getBreedImages(breed)
      .subscribe((data: DogsResponseType) => {
        this.images = data.message;
      });
  }

  filterDogsList(value) {
    this.createDogsListAndGallery(value);

  }

}
