import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ThemeSettingsModalComponent } from './shared/components/theme-settings-modal/theme-settings-modal.component';

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
    ThemeSettingsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
