import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IMovie } from './movie';
import { MovieMapperService } from './movie-mapper.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class MovieService {
  private readonly apiUrl: string;
  constructor(private movieMapperService: MovieMapperService, private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  getMovies(): Observable<IMovie[]> {
    return this.http.get(this.apiUrl).pipe(map((resp: any[]) => (this.movieMapperService.mapMovies(resp))));
  }
}