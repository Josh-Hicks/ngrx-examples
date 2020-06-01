import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { UserComponent } from './components/user/user.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { SignOutPageComponent } from './containers/sign-out-page/sign-out-page.component';
import { UserService } from './data/users.service';
import { AppEffects } from './store/app.effects';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignOutPageComponent,
    UserComponent,
    AdBannerComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ [fromApp.appFeatureKey]: fromApp.reducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
