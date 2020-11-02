import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { mockProvider } from '@ngneat/spectator';
import { MovieService } from '../shared/movie.service';
import { Observable, of } from 'rxjs';
import { IMovie } from '../shared/movie';
import { moviesMock } from '../shared/movie.mock';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      ],
      imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup({
      'title': new FormControl(''),
      'country': new FormControl(''),
      'language': new FormControl(''),
      'sortDirection': new FormControl('ASC')
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of movies', () => {
    expect(component.movies$).toBeDefined();
    component.movies$.subscribe((movies) => {
      expect(movies.length).toBe(3)
    })
  })
  it('should return empty value for properties that are undefined', () => {
    component.formGroup.controls.title.setValue(undefined);
    component.formGroup.controls.country.setValue(undefined);
    component.formGroup.controls.language.setValue(null);
    var cleanParameters = component.getCleanedFormGroupParameters();
    expect(cleanParameters.title).toBe("");
    expect(cleanParameters.language).toBe("");
    expect(cleanParameters.country).toBe("");
  })

});
