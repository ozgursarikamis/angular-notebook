import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:movieId',
    component: MoviesDetailComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'series/:seriesId',
    component: SeriesDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
