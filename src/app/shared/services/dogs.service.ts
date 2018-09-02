import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

    getListOfDogBreedsUrl = 'https://dog.ceo/api/breeds/list';
    getBreedImagesUrl = 'https://dog.ceo/api/breed/';

    fetchingImages = false;


    constructor(private http: HttpClient) {
    }

    getListOfDogBreeds() {
        return this.http.get(this.getListOfDogBreedsUrl);
    }

    getBreedImages(breed) {
        this.fetchingImages = true;
        return this.http.get(`${this.getBreedImagesUrl}${breed}/images`)
            .pipe(
            tap(() => { this.fetchingImages = false;
            })
        );
    }
}
