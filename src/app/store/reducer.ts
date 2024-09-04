import { createReducer, on } from "@ngrx/store";
import { MovieState, initialState } from "./state";
import * as MovieActions from './actions';

export const MovieReducer = createReducer(
  initialState,

  on(MovieActions.loadPopularMoviesSuccess, (state, { movies }) => ({
    ...state,
    popularMovies: movies, // Обновляем поле popularMovies
  })),

  on(MovieActions.loadPopularMoviesFailure, (state, { error }) => ({
    ...state,
    popularMovies: null, // Обновляем поле popularMovies
    error: error
  })),

  on(MovieActions.loadNowPlayingMoviesSuccess, (state, { movies }) => ({
    ...state,
    nowPlayingMovies: movies, // Обновляем поле nowPlayingMovies
  })),

  on(MovieActions.loadNowPlayingMoviesFailure, (state, { error }) => ({
    ...state,
    nowPlayingMovies: null, // Обновляем поле nowPlayingMovies
    error: error
  })),

  on(MovieActions.loadTopRatedMoviesSuccess, (state, { movies }) => ({
    ...state,
    topRatedMovies: movies, // Обновляем поле topRatedMovies
  })),

  on(MovieActions.loadTopRatedMoviesFailure, (state, { error }) => ({
    ...state,
    topRatedMovies: null, // Обновляем поле topRatedMovies
    error: error
  })),

  on(MovieActions.loadUpComingMoviesSuccess, (state, { movies }) => ({
    ...state,
    upComingMovies: movies, // Обновляем поле upComingMovies
  })),

  on(MovieActions.loadUpComingMoviesFailure, (state, { error }) => ({
    ...state,
    upComingMovies: null, // Обновляем поле upComingMovies
    error: error
  }))
);
