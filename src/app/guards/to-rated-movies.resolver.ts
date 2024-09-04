import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadNowPlayingMovies, loadTopRatedMovies } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class TopRatedMoviesResolver implements Resolve<boolean> {

  constructor(private store: Store) {}

  resolve(): boolean {
    this.store.dispatch(loadTopRatedMovies());
    return true;
  }
}
