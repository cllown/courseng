import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadNowPlayingMovies, loadUpComingMovies } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class UpComingMoviesResolver implements Resolve<boolean> {

  constructor(private store: Store) {}

  resolve(): boolean {
    this.store.dispatch(loadUpComingMovies());
    return true;
  }
}
