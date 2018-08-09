import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { UserComponent } from './user.component';



const routes:Routes=[
    {
        path:'',
        component:UserComponent
    },
];

export const ROUTES=RouterModule.forChild(routes);