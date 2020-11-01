import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { mockProvider } from '@ngneat/spectator';
import { MovieService } from '../shared/movie.service';
import { Observable, of } from 'rxjs';
import { IMovie } from '../shared/movie';
import { moviesMock } from '../shared/movie.mock';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [
        mockProvider(MovieService, {
          getMovies: (): Observable<IMovie[]> => of(moviesMock)
        })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of movies', () => {
    expect(component.movies$).toBeDefined();
    component.movies$.subscribe((movies)=> {
      expect(movies.length).toBe(3)
    })
  })
});
