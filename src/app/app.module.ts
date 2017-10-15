import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main-component/main.component';
import { WeekComponent } from './week-component/week.component';
import { MonthComponent } from './month-component/month.component';
import { YearComponent } from './year-component/year.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeekComponent,
    MonthComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'week',
        component: WeekComponent
      },
      {
        path: 'month',
        component: MonthComponent
      },
      {
        path: 'year',
        component: YearComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
