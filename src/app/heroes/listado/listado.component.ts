import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk','Thor','Capitan America'];
  heroeBorrado: string = ''; // || false, null, undefined;

  borrarHeroe():void {
    //this.heroes.shift(); //Borra el primer elemento
    //this.heroes = [];
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
