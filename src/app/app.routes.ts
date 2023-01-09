import { FlightEditComponent } from './flight-booking/features/flight-edit/flight-edit.component';
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
    },
    {
        path: 'flight-edit',
        component: FlightEditComponent
    }
]
