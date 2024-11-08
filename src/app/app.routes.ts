import { Routes } from '@angular/router';
import { HellobabeComponent } from './hellobabe/hellobabe.component';

export const routes: Routes = [
    {path:'hello-babe',component:HellobabeComponent,title:"😍😍😍"},
    {path:'',redirectTo:'/hello-babe',pathMatch:'full'}
];
