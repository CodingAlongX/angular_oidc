import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isAuthenticated: boolean | undefined;
  activeId: any;
  user: any;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;

      this.oidcSecurityService.getPayloadFromIdToken().subscribe(u=>{
        this.user=u;
        console.log(this.user)
      })

      console.warn('authenticated: ', isAuthenticated);
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  refreshSession() {
    this.oidcSecurityService.authorize();
  }

  logout() {

    this.oidcSecurityService.logoff();

  }
}
