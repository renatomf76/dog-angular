import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent {

    @Input() images: String[];

    _dogs: String[];
    @Input() selected: String;
    @Output() dogClicked = new EventEmitter<String>();

    @Input()
    set dogs(dogs: String[]) {
        this._dogs = (dogs && dogs.length && dogs.sort()) || [];
    }
    get dogs() {
        return this._dogs;
    }

    clicked(dog) {
        this.dogClicked.emit(dog);
    }
    isSelected(breed) {
        return breed === this.selected;
    }

    removeImage(dog) {
        const userselection = confirm('Você quer deletar essa imagem permanentemente?');
        if (userselection === true) {
            this.dogs.splice(this.dogs.indexOf(dog), 1);
            } else {
            alert('Esta imagem não foi deletada!');
        }
    }
}
