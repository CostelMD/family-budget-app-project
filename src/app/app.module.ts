import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { AboutComponent } from './components/about/about.component';
import { BudgetComponent } from './components/budget/budget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './components/button/button.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { BudgetItemComponent } from './components/budget-item/budget-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [AppComponent, TopNavComponent, AboutComponent, BudgetComponent, ButtonComponent, CardStatsComponent, DashboardComponent, BudgetsComponent, BudgetItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
