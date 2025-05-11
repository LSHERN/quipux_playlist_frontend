import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'playlist',
                loadChildren: () => import('../app/modules/playlist/playlist.route')
            }
        ] ,
        canActivate: [AuthGuard]
    },
    { 
        path: 'auth', 
        loadChildren: () => import('../app/modules/auth/auth.routes') 
    },
    /* {
        path: '**',
        //component: NotFoundComponent
    } */
];