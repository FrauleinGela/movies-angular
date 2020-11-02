import { Injectable } from '@angular/core';
import { IMovie } from './movie';

@Injectable()
export class MovieMapperService {
  mapMovies(movies: any[]): IMovie[] {
    return movies.map((movie: any) => (this.mapMovie(movie)))
  }

  mapMovie(movie: any): IMovie {
    const mapped = <IMovie>{};
    mapped.title = movie.title;
    mapped.actors = movie.actors;
    mapped.year = movie.year;
    mapped.rated = movie.rated;
    mapped.released = movie.released;
    mapped.runtime = movie.runtime;
    mapped.genre = movie.genre;
    mapped.director = movie.director;
    mapped.writer = movie.writer;
    mapped.actors = movie.actors;
    mapped.plot = movie.plot;
    mapped.language = movie.language;
    mapped.country = movie.country;
    mapped.poster = movie.poster;
    mapped.awards = movie.awards;
    mapped.imdbRating = movie.imdbRating;
    mapped.imdbID = movie.imdbID;
    return mapped;
  }
}