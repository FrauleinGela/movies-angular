import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { mockProvider } from '@ngneat/spectator';
import { Observable, of } from 'rxjs';
import { MaterialModule } from '../../shared/material.module';
import { IMovie } from '../shared/movie';
import { moviesMock } from '../shared/movie.mock';
import { MovieService } from '../shared/movie.service';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      providers: [
        mockProvider(MovieService, {
          getMovies: (): Observable<IMovie> => of(moviesMock[0])
        }),
        mockProvider(ActivatedRoute, {
          snapshot: {
            paramMap: {
              get: () => "MovieMock1"
            }
          }
        })
      ],
      imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should movie be defined', () => {
    expect(component.movie$).toBeDefined();
  });
});
