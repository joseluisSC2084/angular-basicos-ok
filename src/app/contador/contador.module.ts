import { NgModule } from "@angular/core";
import { ContadorComponet } from './contador/contador.component';

@NgModule({
    declarations:[//Componentes
        ContadorComponet
    ],

    exports:[//Para mostrarlo en otra parte
        ContadorComponet
    ]
})

export class ContadorModule{
}