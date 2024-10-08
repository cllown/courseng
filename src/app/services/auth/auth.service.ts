import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieService } from '../movie/movie.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://api.themoviedb.org/3';
    private apiKey = '10df4df25b93ff563f5e050212816841';

    private username = 'artoorclown';
    private password = 'tel56420';

    constructor(private http: HttpClient) { }

    // Get the request token
    private getRequestToken(): Observable<string> {
        const url = `${this.apiUrl}/authentication/token/new?api_key=${this.apiKey}`;
        return this.http.get<any>(url).pipe(
            map(response => response.request_token),
            catchError(this.handleError)
        );
    }

    private validateRequestToken(requestToken: string): Observable<void> {
        const url = `${this.apiUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}`;
        const body = {
            username: this.username,
            password: this.password,
            request_token: requestToken
        };
        return this.http.post<any>(url, body).pipe(
            map(() => { }),
            catchError(this.handleError)
        );
    }

    // Create a session ID
    private createSession(requestToken: string): Observable<string> {
        const url = `${this.apiUrl}/authentication/session/new?api_key=${this.apiKey}`;
        const body = { request_token: requestToken };
        return this.http.post<any>(url, body).pipe(
            map(response => response.session_id),
            catchError(this.handleError)
        );
    }

    // Get account details to retrieve accountId
    private getAccountId(sessionId: string): Observable<number> {
        const url = `${this.apiUrl}/account?api_key=${this.apiKey}&session_id=${sessionId}`;
        return this.http.get<any>(url).pipe(
            map(response => response.id),
            catchError(this.handleError)
        );
    }

    // Public method to get accountId
    public authenticateAndGetAccountId(): Observable<number> {
        return this.getRequestToken().pipe(
            switchMap(requestToken => this.validateRequestToken(requestToken).pipe(
                switchMap(() => this.createSession(requestToken)),
                switchMap(sessionId => this.getAccountId(sessionId))
            ))
        );
    }

    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error);
    }
}



// and save accountId in your MovieService

// accountId: number | null = null;

// setAccountId(id: number) {
//     this.accountId = id;
// }
