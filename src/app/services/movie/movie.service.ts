import { Injectable, OnInit } from '@angular/core';
import { allMovies, Movie, MovieApiModel, nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  favorites: Movie[] = [];
  watchList: Movie[] = [];
  apiKey=`?api_key=10df4df25b93ff563f5e050212816841`
  apiUrl=`https://api.themoviedb.org/3/movie`

  constructor(private httpClient: HttpClient) { }

    accountId: number | null = null;

    setAccountId(id: number) {this.accountId = id;}

    getPopularMovies():Observable<MovieApiModel>{

      return this.httpClient.get<MovieApiModel>(`${this.apiUrl}/popular${this.apiKey}`);
    }
    getUpComingMovies(){
      return this.httpClient.get<MovieApiModel>(`${this.apiUrl}/upcoming${this.apiKey}`);
    }
    getTopRatedMovies(){
      return this.httpClient.get<MovieApiModel>(`${this.apiUrl}/top_rated${this.apiKey}`);
    }
    getNowPlayingMovies(){
      return this.httpClient.get<MovieApiModel>(`${this.apiUrl}/now_playing${this.apiKey}`);
    }
    getMovieDetails(movieId:number):Observable<Movie>{
      return this.httpClient.get<Movie>(`${this.apiUrl}/${movieId}${this.apiKey}`);
    }
    setToFavorite(movie: Movie) {
      if (!this.favorites.some((m: Movie) => m.id === movie.id)) {
        this.favorites.push(movie);
      }
    }
    getFavoriteMovies(){
      return this.favorites;
    }
    delFromFavorite(movie: Movie){
      this.favorites = this.favorites.filter((m: Movie) => m.id !== movie.id);
    }
    setToWatchList(movie: Movie) {
      if (!this.watchList.some((m: Movie) => m.id === movie.id)) {
        this.watchList.push(movie);
      }
    }
    getWatchList(){
      return this.watchList;
    }
    delFromWatchList(movie: Movie){
      this.watchList = this.watchList.filter((m: Movie) => m.id !== movie.id);
    }
    getAllMovies(){
      return allMovies;
    }
    getMovieById(id:number): Movie | undefined {
      return this.getAllMovies().find((movie: Movie) => movie.id === id);
    }
  }
