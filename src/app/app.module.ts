import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DogsService } from './shared/services/dogs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogsListComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
