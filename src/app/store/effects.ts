import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MovieActions from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MovieService } from '../services/movie/movie.service';

@Injectable()
export class MovieEffects {
  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadPopularMovies),
      mergeMap(() =>
        this.movieService.getPopularMovies().pipe(
          map((movies) =>
            MovieActions.loadPopularMoviesSuccess({
              movies: movies.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadPopularMoviesFailure({ error }))
          )
        )
      )
    )
  );

  loadNowPlayingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadNowPlayingMovies),
      mergeMap(() => {
        return this.movieService.getNowPlayingMovies().pipe(
          map((movies) =>
            MovieActions.loadNowPlayingMoviesSuccess({
              movies: movies.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadNowPlayingMoviesFailure({ error }))
          )
        );
      })
    )
  );

  loadTopRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTopRatedMovies),
      mergeMap(() => {
        return this.movieService.getTopRatedMovies().pipe(
          map((movies) =>
            MovieActions.loadTopRatedMoviesSuccess({
              movies: movies.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadTopRatedMoviesFailure({ error }))
          )
        );
      })
    )
  );

  loadUpComingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadUpComingMovies),
      mergeMap(() => {
        return this.movieService.getUpComingMovies().pipe(
          map((movies) =>
            MovieActions.loadUpComingMoviesSuccess({
              movies: movies.results,
            })
          ),
          catchError((error) =>
            of(MovieActions.loadUpComingMoviesFailure({ error }))
          )
        );
      })
    )
  );
  constructor(private movieService: MovieService, private actions$: Actions) {}
}
