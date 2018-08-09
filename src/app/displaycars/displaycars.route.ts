import { Routes, RouterModule} from '@angular/router';
import { DisplaycarsComponent } from './displaycars.component';



const routes:Routes=[
    {
        path:'',
        component:DisplaycarsComponent
    },
];

export const ROUTES=RouterModule.forChild(routes);