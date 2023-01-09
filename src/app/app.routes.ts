import { HomeComponent } from './core/home/home.component';
import { FlightEditComponent } from './flight-booking/features/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-booking/features/flight-search/flight-search.component';
import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
]
