import {NgModule} from '@angular/core';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://localhost:7001',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'spa',
      scope: 'openid profile offline_access email roles api_access', // 'openid profile offline_access ' + your scopes
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      renewTimeBeforeTokenExpiresInSeconds: 30,
      logLevel: LogLevel.Debug
    }
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
