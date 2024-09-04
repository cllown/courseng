import { createAction, props } from "@ngrx/store";
import { Movie } from "../mock-data";

export const loadPopularMovies = createAction('[Movie] Load Popular Movies ');

export const loadPopularMoviesSuccess = createAction('[Movie] Load Popular Movies Success',
  props<{ movies: Movie[] | null}>()
);
export const loadPopularMoviesFailure = createAction('[Movie] Load Popular Movies Failure',
  props<{ error:any}>()
);
export const loadNowPlayingMovies = createAction('[Movie] Load NowPlaying Movies ');

export const loadNowPlayingMoviesSuccess = createAction('[Movie] Load NowPlaying Movies Success',
  props<{ movies: Movie[] | null}>()
);
export const loadNowPlayingMoviesFailure = createAction('[Movie] Load NowPlaying Movies Failure',
  props<{ error:any}>()
);
export const loadTopRatedMovies = createAction('[Movie] Load Top Rated Movies ');

export const loadTopRatedMoviesSuccess = createAction('[Movie] Load Top Rated Movies Success',
  props<{ movies: Movie[] | null}>()
);
export const loadTopRatedMoviesFailure = createAction('[Movie] Load Top Rated Movies Failure',
  props<{ error:any}>()
);
export const loadUpComingMovies = createAction('[Movie] Load UpComing Movies ');

export const loadUpComingMoviesSuccess = createAction('[Movie] Load UpComing Movies Success',
  props<{ movies: Movie[] | null}>()
);
export const loadUpComingMoviesFailure = createAction('[Movie] Load UpComing Movies Failure',
  props<{ error:any}>()
);
