import { Routes } from '@angular/router';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Admin } from './Pages/admin/admin';
import { Seo } from './Pages/seo/seo';
import { Schema } from './Pages/schema/schema';
import { Testimonials } from './Pages/testimonials/testimonials';
import { Hero } from './Pages/hero/hero';
import { Gallery } from './Pages/gallery/gallery';
import { Occasions } from './Pages/occasions/occasions';
import { Settings } from './Pages/settings/settings';
import { Vehicles } from './Pages/vehicles/vehicles';
import { Contact } from './Pages/contact/contact';
import path from 'path';
import { About } from './Pages/about/about';
import { Login } from './Pages/login/login';
import { Homepage } from './frontend/homepage/homepage';

export const routes: Routes = [
{path:'',component:Homepage},
   {
path:'',
component:Login
            },
    {path:'',component:Admin,
        
        children:[
        {
                path:'dashoboard',
                redirectTo:'dashboardhome',
                pathMatch:'full'


            },
         
            {
                path:'dashboadHome',
                component:Dashboard
            },

    {path:'seo',component:Seo},
    {path:'schema',component:Schema},
    {path:'testimonials',component:Testimonials},
    {path:'hero',component:Hero},
    {path:'gallery',component:Gallery},
    {path:'occasions',component:Occasions},
    {path:'settings',component:Settings},
    {path:'vehicles',component:Vehicles},
    {path:'contact',component:Contact},
    {path:'about',component:About},
    ]},
    
];
