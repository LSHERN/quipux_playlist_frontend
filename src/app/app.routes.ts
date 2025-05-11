import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'inventory',
                //loadChildren: () => import('./app/modules/inventory/inventory.routes')
            }
        ],
        //canActivate: [AuthGuard]
    },
    { 
        path: 'auth', 
        loadChildren: () => import('../app/modules/auth/auth.routes') 
    },
    {
        path: '**',
        //component: NotFoundComponent
    }
];