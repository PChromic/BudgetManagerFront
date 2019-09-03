import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OperationListComponent} from './modules/home/components/operation-list/operation-list.component';
import {OperationDetailComponent} from './modules/home/components/operation-detail/operation-detail.component';
import {HomeComponent} from './modules/home/components/home/home.component';
import {ReportComponent} from './modules/home/components/report/report.component';
import {ExpenseListComponent} from './modules/home/components/expense-list/expense-list.component';
import {ExpenseDetailComponent} from './modules/home/components/expense-detail/expense-detail.component';
import {ExpenseEditorComponent} from './modules/home/components/expense-editor/expense-editor.component';

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
