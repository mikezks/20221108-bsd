import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
