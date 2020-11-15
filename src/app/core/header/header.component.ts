import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  user$:Observable<any>;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.user$ = this.authService.user$;
  }

  login() {
    this.authService.loginWithRedirect();
  }

  logout(){
    this.authService.logout();
  }

}
