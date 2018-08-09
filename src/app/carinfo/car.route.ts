import { Routes, RouterModule} from '@angular/router';
import { CarinfoComponent } from './carinfo.component';



const routes:Routes=[
    {
        path:'',
        component:CarinfoComponent
    },
];

export const ROUTES=RouterModule.forChild(routes);