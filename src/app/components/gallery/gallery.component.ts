import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() images: String[];
  @Input() busy: boolean;
  @Input() selected: String;

  // removeImage(image) {
  //   this.images.splice(this.images.indexOf(image), 1);
  // }

  removeImage(image) {
      const userselection = confirm('Você quer deletar essa imagem permanentemente?');
      if (userselection === true) {
          this.images.splice(this.images.indexOf(image), 1);
        } else {
          alert('Esta imagem não foi deletada!');
      }
    }
}
