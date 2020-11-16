import { movies } from './../app.constants';
import { StoreRootState } from '../store';
import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { getRouterState } from 'src/app/store/selectors';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit, OnDestroy {

  movieId: string;
  movie: any;

  private subscriptions: { [key: string]: any } = {};

  constructor(private store: Store<StoreRootState>) { }

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(select(getRouterState))
      .subscribe((route) => {
        const movieId = route.state.params.movieId;
        this.movie = movies.find(x => x.id === movieId);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }

}
