import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './components/footer/footer.component';
import {UserDetailsComponent} from './components/user/user-details/user-details.component';
import {OperationDetailComponent} from './components/operation-detail/operation-detail.component';
import {UserComponent} from './components/user/user.component';
import {OperationListComponent} from './components/operation-list/operation-list.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {FileService} from './services/backend/file.service';
import {ExpenseDetailComponent} from './components/expense-detail/expense-detail.component';
import {HomeComponent} from './components/home/home.component';
import {ExpenseComponent} from './components/expense/expense.component';
import {ExpenseEditorComponent} from './components/expense-editor/expense-editor.component';
import {ExpenseService} from './services/expense.service';
import {OperationItemComponent} from './components/operation-item/operation-item.component';
import {ReportComponent} from './components/report/report.component';
import {OperationService} from './services/operation.service';
import {ExpenseListComponent} from './components/expense-list/expense-list.component';
import {OperationDetailModal} from './components/operation-list/operationDetailModal';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    UserDetailsComponent,
    OperationDetailComponent,
    OperationListComponent,
    PageNotFoundComponent,
    OperationItemComponent,
    HomeComponent,
    ReportComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ExpenseEditorComponent,
    ExpenseComponent,
    OperationDetailModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [OperationService,FileService,ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
