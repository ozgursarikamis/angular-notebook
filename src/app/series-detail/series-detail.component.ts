import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { series } from '../app.constants';
import { StoreRootState } from '../store';
import { getCurrentRouteState } from '../store/selectors';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss']
})
export class SeriesDetailComponent implements OnInit, OnDestroy {
  seriesId: string;
  series: any;
  private subscriptions: { [key: string]: any } = {};

  constructor(private store: Store<StoreRootState>) {}

  ngOnInit(): void {
    this.subscriptions.routerSelector = this.store
      .pipe(select(getCurrentRouteState))
      .subscribe((route: any) => {
        const seriesId = route.params.seriesId;
        this.series = series.find((series) => series.id === seriesId);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.routerSelector.unsubscribe();
  }

}
