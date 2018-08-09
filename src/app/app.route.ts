import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

     { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'carauction', loadChildren: './layout/layout.module#LayoutModule'
    },
    {
        path: 'login', loadChildren: './login/login.module#LoginModule'
    }
];

export const ROUTES = RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
});