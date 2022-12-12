import { FlightSearchComponent } from './flight-booking/features/flight-search/flight-search.component';
import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    }
]
