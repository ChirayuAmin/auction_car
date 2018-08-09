import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: 'displaycars', pathMatch: 'full' },
            {
                path: 'carinfo',
                loadChildren: '../carinfo/car.module#CarModule',
            },
            {
                path: 'user',
                loadChildren: '../user/user.module#UserModule',
            },
            {
                path: 'displaycars',
                loadChildren: '../displaycars/displaycars.module#DisplaycarsModule',
            }]
    },
];

export const ROUTES = RouterModule.forChild(routes);