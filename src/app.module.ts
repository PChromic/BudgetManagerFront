import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './core/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';
import {UserComponent} from './modules/home/components/user/user.component';
import {UserDetailsComponent} from './modules/home/components/user/user-details/user-details.component';
import {OperationDetailComponent} from './modules/home/components/operation-detail/operation-detail.component';

import {OperationListComponent} from './modules/home/components/operation-list/operation-list.component';
import {OperationService} from './core/services/operation.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {FileService} from './core/services/backend/file.service';
import {HttpService} from './core/http/http.service';
import { OperationItemComponent } from './modules/home/components/operation-item/operation-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ReportComponent } from './modules/home/components/report/report.component';
import { ExpenseListComponent } from './modules/home/components/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './modules/home/components/expense-detail/expense-detail.component';
import { ExpenseEditorComponent } from './modules/home/components/expense-editor/expense-editor.component';


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
    ExpenseEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OperationService,FileService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
