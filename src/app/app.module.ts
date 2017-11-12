import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main-component/main.component';
import { WeekComponent } from './week-component/week.component';
import { MonthComponent } from './month-component/month.component';
import { YearComponent } from './year-component/year.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeekComponent,
    MonthComponent,
    YearComponent,
    EntryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
