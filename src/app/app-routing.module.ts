import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OperationListComponent} from './components/operation-list/operation-list.component';
import {OperationDetailComponent} from './components/operation-detail/operation-detail.component';
import {ExpenseListComponent} from './components/expense-list/expense-list.component';
import {ExpenseEditorComponent} from './components/expense-editor/expense-editor.component';
import {ExpenseDetailComponent} from './components/expense-detail/expense-detail.component';
import {ReportComponent} from './components/report/report.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full', canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'operations', component: OperationListComponent, canActivate:[AuthGuardService]},
  {path: 'operations/:id', component: OperationDetailComponent, canActivate:[AuthGuardService]},
  {path: 'expenses', component: ExpenseListComponent, canActivate:[AuthGuardService]},
  {path: 'expenses/editor', component: ExpenseEditorComponent, canActivate:[AuthGuardService]},
  {path: 'expenses/:id', component: ExpenseDetailComponent, canActivate:[AuthGuardService]},
  {path: 'reports', component: ReportComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
