import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FilterArrayPipe } from './Pipe/filter.pipe';

import { FormsModule } from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UsersService } from './services/users.service';
import { SearchService } from './services/search.service';
import { FilterPipe } from './pipe/filter.pipe';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';

const appRoutes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-users', component: AddUsersComponent },
  { path: 'user/:id', component: UsersDetailsComponent },
  { path: 'edit-user/:id', component: EditUsersComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UsersDetailsComponent,
    AddUsersComponent,
    EditUsersComponent,
    SidebarComponent,
    DashboardComponent,
    FilterPipe,
    // FilterArrayPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService, SearchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
