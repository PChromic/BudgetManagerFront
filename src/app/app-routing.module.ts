import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OperationListComponent} from './components/operation-list/operation-list.component';
import {OperationDetailComponent} from './components/operation-detail/operation-detail.component';
import {ExpenseListComponent} from './components/expense-list/expense-list.component';
import {ExpenseEditorComponent} from './components/expense-editor/expense-editor.component';
import {ExpenseDetailComponent} from './components/expense-detail/expense-detail.component';
import {ReportComponent} from './components/report/report.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'operations', component: OperationListComponent},
  {path: 'operations/:id', component: OperationDetailComponent},
  {path: 'expenses', component: ExpenseListComponent},
  {path: 'expenses/editor', component: ExpenseEditorComponent},
  {path: 'expenses/:id', component: ExpenseDetailComponent},
  {path: 'reports', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
