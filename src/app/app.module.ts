import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { OperationDetailComponent } from './components/operation-detail/operation-detail.component';
import { Operation } from './components/operation/operation.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import {OperationService} from './operation.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ExpensesComponent,
    DashboardComponent,
    UserComponent,
    UserDetailsComponent,
    LoginComponent,
    OperationDetailComponent,
    Operation,
    OperationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
