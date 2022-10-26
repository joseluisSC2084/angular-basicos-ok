import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //
  templateUrl: 'app.component.html', //ubicar el archivo html
/*  template: '<h1>Jose Luis</h1>', */
//  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  acumular(valor: number):void{
    this.numero += valor;
  }

  sumar():void{
    this.numero = this.numero + 1
  }

  restar():void{
    this.numero -= 1
  }  
}
