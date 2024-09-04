import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './state';

export const selectState = createFeatureSelector<MovieState>('movieState');

export const selectPopularMovies = createSelector(
  selectState,
  (state) => state.popularMovies
);
export const selectNowPlayingMovies = createSelector(
  selectState,
  (state) => state.nowPlayingMovies
);

export const selectTopRatedMovies = createSelector(
  selectState,
  (state) => state.topRatedMovies
);

export const selectUpComingMovies = createSelector(
  selectState,
  (state) => state.upComingMovies
);
