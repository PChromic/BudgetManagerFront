import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpensesComponent} from './modules/home/components/expenses/expenses.component';
import {DashboardComponent} from './modules/home/components/dashboard/dashboard.component';
import {UserComponent} from './modules/home/components/user/user.component';
import {UserDetailsComponent} from './modules/home/components/user/user-details/user-details.component';
import {OperationListComponent} from './modules/home/components/operation-list/operation-list.component';
import {OperationDetailComponent} from './modules/home/components/operation-detail/operation-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: 'operations', component: OperationListComponent,
    children: [
      {path: ':id', component: OperationDetailComponent}
    ]
  },
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
