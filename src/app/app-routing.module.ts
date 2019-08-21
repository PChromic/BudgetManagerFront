import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpensesComponent} from './components/expenses/expenses.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user/user-details/user-details.component';
import {OperationListComponent} from './components/operation-list/operation-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: 'operations', component: OperationListComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'user/:id', component:UserComponent ,
    children: [
      {path: '', redirectTo: 'user', pathMatch:'full'},
      {path: 'expenses', component: ExpensesComponent},
      {path: 'details', component: UserDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
