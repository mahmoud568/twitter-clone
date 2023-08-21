import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TweetComponent } from './shared/components/tweet/tweet.component';
import { HomeComponent } from './features/home/home.component';
import { MiniTagsComponent } from './features/side-taps/mini-tags/mini-tags.component';
import { MiniWhoToFollowComponent } from './features/side-taps/mini-who-to-follow/mini-who-to-follow.component';
import { TimelineForyouComponent } from './features/home/timeline-foryou/timeline-foryou.component';
import { TimelineFollowingComponent } from './features/home/timeline-following/timeline-following.component';
import { SideTapsComponent } from './features/side-taps/side-taps.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingDialogComponent } from './shared/components/theming-dialog/theming-dialog.component';
import { IconModule } from './shared/modules/icon.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { AtHashColorDirectiveDirective } from './shared/directives/at-hash-color-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniTagsComponent,
    MiniWhoToFollowComponent,
    TimelineForyouComponent,
    TimelineFollowingComponent,
    TweetComponent,
    SideTapsComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    SearchInputComponent,
    TopBarComponent,
    ThemingDialogComponent,
    AtHashColorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    IconModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconModule: IconModule) {
    this.iconModule.registerIcons();
  }
}
