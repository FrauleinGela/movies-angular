import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { MaterialModule } from '../../shared/material.module';
import { HeaderComponent } from './header.component';

export class AuthServiceMock {
  user$: Observable<boolean> = of(false);
  isAuthenticated$: Observable<boolean> = of(false);
  loginWithRedirect: Observable<void> = of();
  logout: Observable<void> = of();
}
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
