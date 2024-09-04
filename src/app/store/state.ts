import { Movie, popularMovies } from '../mock-data';

export interface MovieState{
  movies: Movie[] | null;
  favoriteMovies: Movie[] | null;
  watchListMovies: Movie[] | null;
  selectedMovie: Movie | null;
  popularMovies:Movie[]| null;
  nowPlayingMovies:Movie[]| null;
  topRatedMovies:Movie[]| null;
  upComingMovies:Movie[]| null;
}

export const initialState: MovieState = {
  movies:null,
  favoriteMovies:null,
  watchListMovies:null,
  selectedMovie:null,
  popularMovies:null,
  nowPlayingMovies:null,
  topRatedMovies:null,
  upComingMovies:null,
}
