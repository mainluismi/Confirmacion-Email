import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ConfirmacionCorreoComponent } from './confirmacion-correo/confirmacion-correo.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },{
        path: 'registro', component: RegistroComponent
    },{
        path: 'confirmacion-correo', component: ConfirmacionCorreoComponent
    },{
        path: 'inicio-sesion', component: InicioSesionComponent
    },{
        path: 'admin-panel', component: AdminPanelComponent
    },{
        path: 'error', component: Error
    },{
        path: 'home', component: HomeComponent
    },{
        path: '**', redirectTo: '/home', pathMatch: 'full'
    }
];
