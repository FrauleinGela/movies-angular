import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IMovie, IMovieListParameters } from './movie';
import { MovieMapperService } from './movie-mapper.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class MovieService {
  private readonly apiUrl: string;
  constructor(private movieMapperService: MovieMapperService, private http: HttpClient) {
    this.apiUrl = `${environment.apiUri}/movies`;
  }
  getMovies(parameters: IMovieListParameters): Observable<IMovie[]> {
    const httpParams = this.setHttpParams(parameters);
    return this.http.get(`${this.apiUrl}`, { params: httpParams })
      .pipe(map((resp: any[]) => (this.movieMapperService.mapMovies(resp))));
  }

  getMovie(imdbId: string): Observable<IMovie> {
    return this.http.get(`${this.apiUrl}/${imdbId}`)
      .pipe(map((resp: any) => (this.movieMapperService.mapMovie(resp))));
  }

  // TODO: Move method to a shared utils service
  setHttpParams(parameters: any): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.set(key, parameters[key]);
    });
    return httpParams;
  }
}