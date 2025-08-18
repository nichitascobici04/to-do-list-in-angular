import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact-component/contact-component';
import { ItemComponent } from './item/item-component/item-component';

export const routes: Routes = [  
    { path: 'contact-component', component: ContactComponent},
    { path: '', component: ItemComponent}
];
