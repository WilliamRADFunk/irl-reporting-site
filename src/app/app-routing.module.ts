import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TodayResolver } from './resolvers/today/today.resolver';
import { WeekResolver } from './resolvers/week/week.resolver';
import { MonthResolver } from './resolvers/month/month.resolver';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'home', children: [
    {
      path: '',
      redirectTo: 'today',
      pathMatch: 'full'
    },
    {
      path: 'today',
      component: HomeComponent,
      resolve: { data: TodayResolver },
      pathMatch: 'full'
    },
    {
      path: 'week',
      component: HomeComponent,
      resolve: { data: WeekResolver },
      pathMatch: 'full'
    },
    {
      path: 'month',
      component: HomeComponent,
      resolve: { data: MonthResolver },
      pathMatch: 'full'
    },
    {
      path: '**', redirectTo: 'today'
    }
  ]},
  { path: 'about', component: AboutComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
