import { Routes } from '@angular/router';
import { HistoriaComponent } from './enrrutamiento/historia/historia.component';
import { HerramientasComponent } from './enrrutamiento/herramientas/herramientas.component';
import { TecnologiasComponent } from './enrrutamiento/tecnologias/tecnologias.component';
import { TiposComponent } from './enrrutamiento/tipos/tipos.component';

export const routes: Routes = [
    {
        //Componente que se mostrara por defecto
        path: '',
        component: HistoriaComponent
    },
    {
        path: 'historia',  
        component: HistoriaComponent
    },
    {
        path: 'herramientas',
        component: HerramientasComponent
    },
    {
        path: 'tecnologias',
        component: TecnologiasComponent
    },
    {
        path: 'tipos',
        component: TiposComponent
    }
];
